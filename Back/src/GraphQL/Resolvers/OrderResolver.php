<?php
namespace App\GraphQL\Resolvers;

use App\Models\Order;
use App\Models\Product;
use App\Utils\Database;

Database::initialize();

class OrderResolver
{
    public static function createOrder($args)
    {
        try {
            // Fetch product by ID to ensure it exists
            $product = Product::findOrFail($args['productId']);

            // Example: Calculate total price based on product price and quantity
            $productPrice = $product->prices->first()->amount; // Assuming prices is a collection, get the first price
            $totalPrice = $productPrice * intval($args['quantity']);

            // Example: Create a new order record
            $order = new Order();
            $order->product_id = $args['productId'];
            $order->quantity = $args['quantity'];
            $order->total_price = $totalPrice;

            // Save the order
            $order->save();

            return true; // Return true if order is successfully placed
        } catch (\Exception $e) {
            // Handle exceptions
            throw new \Exception('Failed to place order: ' . $e->getMessage());
        }
    }
}
?>
