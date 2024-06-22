<?php

namespace App\Controller;

use GraphQL\GraphQL as GraphQLBase;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
use GraphQL\Type\SchemaConfig;
use RuntimeException;
use Throwable;

class GraphQL
{
    static public function handle()
    {
        try {
            $queryType = new ObjectType([
                'name' => 'Query',
                'fields' => [
                    'product' => [
                        'type' => new \App\GraphQL\Schema\ProductSchema(),
                        'args' => [
                            'id' => ['type' => Type::id()],
                        ],
                        'resolve' => function ($root, $args, $context, $info) {
                            return \App\GraphQL\Resolvers\ProductResolver::resolve($root, $args, $context, $info);
                        },
                    ],
                    'productsByCategory' => [
                        'type' => Type::listOf(new \App\GraphQL\Schema\ProductSchema()),
                        'args' => [
                            'categoryName' => ['type' => Type::string()],
                        ],
                        'resolve' => function ($root, $args, $context, $info) {
                            if ($args['categoryName'] === 'all') {
                                // Return all products
                                return \App\GraphQL\Resolvers\ProductResolver::getAllProducts();
                            } else {
                                // Return products filtered by category
                                return \App\GraphQL\Resolvers\ProductResolver::productsByCategory($root, $args, $context, $info);
                            }
                        },
                    ],
                ],
            ]);

            // MutationType in GraphQL class

            $mutationType = new ObjectType([
                'name' => 'Mutation',
                'fields' => [
                    'createOrder' => [
                        'type' => new ObjectType([
                            'name' => 'CreateOrderResponse',
                            'fields' => [
                                'success' => ['type' => Type::nonNull(Type::boolean())],
                                'message' => ['type' => Type::nonNull(Type::string())],
                                'order' => ['type' => new \App\GraphQL\Schema\OrderSchema()],
                            ],
                        ]),
                        'args' => [
                            'productId' => ['type' => Type::nonNull(Type::id())],
                            'quantity' => ['type' => Type::nonNull(Type::int())],
                            'attributes' => ['type' => Type::string()], // Adjust the type based on how you handle attributes
                        ],
                        'resolve' => function ($root, $args) {
                            return \App\GraphQL\Resolvers\OrderResolver::createOrder($args);
                        },
                    ],
                ],
            ]);


            $schema = new Schema(
                (new SchemaConfig())
                    ->setQuery(function () use ($queryType) {
                        return $queryType;
                    })
                    ->setMutation(function () use ($mutationType) {
                        return $mutationType;
                    })
            );

            $rawInput = file_get_contents('php://input');
            if ($rawInput === false) {
                throw new RuntimeException('Failed to get php://input');
            }

            $input = json_decode($rawInput, true);
            $query = $input['query'];
            $variableValues = $input['variables'] ?? null;
            $rootValue = ['prefix' => 'You said: '];
            $result = GraphQLBase::executeQuery($schema, $query, $rootValue, null, $variableValues);
            $output = $result->toArray();
            header('Content-Type: application/json');
            echo json_encode($output);
        } catch (Throwable $e) {
            header('Content-Type: application/json', true, 500);
            echo json_encode(['errors' => [['message' => $e->getMessage()]]]);
        }


    }
}
