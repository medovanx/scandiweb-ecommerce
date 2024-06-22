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
            // Check if requested quantity is available in stock
            if ($product->in_stock !== 1) {
                throw new \Exception('Insufficient stock');
            }

            // Calculate total price based on product price and quantity
            $productPrice = $product->prices->first()->amount; // Assuming prices is a collection, get the first price
            $totalPrice = $productPrice * intval($args['quantity']);

            // Create a new order record
            $order = new Order();
            $order->product_id = $args['productId'];
            $order->quantity = $args['quantity'];
            $order->total_price = $totalPrice;

            // Save the order
            $order->save();

            // Return success message
            return [
                'success' => true,
                'message' => 'Order placed successfully',
                'order' => $order // Optionally return the order details for the client to use, e.g. 'order.id', 'order.total_price
            ];
        } catch (\Exception $e) {
            // Handle exceptions
            $errorMessage = $e->getMessage();
            return [
                'success' => false,
                'message' => 'Failed to place order: ' . $errorMessage
            ];
        }
    }
}
