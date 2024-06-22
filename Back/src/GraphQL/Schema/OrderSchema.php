<?php
namespace App\GraphQL\Schema;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class OrderSchema extends ObjectType {
    public function __construct() {
        $config = [
            'name' => 'Order',
            'fields' => [
                'product_id' => Type::nonNull(Type::id()),
                'quantity' => Type::nonNull(Type::int()),
                'total_price' => Type::nonNull(Type::float()),
                'created_at' => [
                    'type' => Type::nonNull(Type::string()),
                    'resolve' => function ($root, $args) {
                        return date('d-M-Y', strtotime($root->created_at));
                    }
                ],
            ]
        ];
        parent::__construct($config);
    }
}
?>
