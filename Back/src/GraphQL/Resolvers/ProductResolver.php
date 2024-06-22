<?php
namespace App\GraphQL\Resolvers;

use App\Models\Product;
use Throwable;
use App\Utils\Database;

Database::initialize();
class ProductResolver
{
    public static function resolve($root, $args, $context, $info)
    {
        try {
            $product = Product::with(['category', 'images', 'attributes', 'prices'])->find($args['id']);
            if (!$product) {
                throw new \Exception('Product not found');
            }
            // Map attributes to match the structure expected by GraphQL
            $product->attributes = $product->attributes->map(function ($attribute) {
                return [
                    'id' => $attribute->id,
                    'name' => $attribute->attribute_name, 
                    'value' => $attribute->attribute_value,
                ];
            })->toArray();
            return $product;
        } catch (Throwable $e) {
            error_log($e->getMessage());
            error_log($e->getTraceAsString());
            throw $e;
        }
    }
}
