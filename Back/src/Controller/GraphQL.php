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
                ],
            ]);

            $mutationType = new ObjectType([
                'name' => 'Mutation',
                'fields' => [
                    'createOrder' => [
                        'type' => Type::boolean(),
                        'args' => [
                            'productId' => ['type' => Type::nonNull(Type::id())],
                            'quantity' => ['type' => Type::nonNull(Type::int())],
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
            echo json_encode(['errors' => [['message' => $e->getTraceAsString()]]]);
            echo json_encode(['errors' => [['message' => $e->getMessage()]]]);
        }
    }
}
