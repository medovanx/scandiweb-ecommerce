import json
import mysql.connector
from mysql.connector import Error


def connect():
    """ Connect to MySQL database """
    try:
        connection = mysql.connector.connect(
            host='localhost',
            database='e_commerce',
            user='root',
            password=''
        )
        if connection.is_connected():
            return connection
    except Error as e:
        print(f"Error: {e}")
        return None


def insert_data(connection, query, data):
    cursor = connection.cursor()
    cursor.execute(query, data)
    connection.commit()
    return cursor.lastrowid


def main():
    # Read JSON data from file
    with open('data.json', 'r') as file:
        data = json.load(file)

    connection = connect()
    if connection is None:
        print("Failed to connect to database")
        return

    try:
        cursor = connection.cursor()

        # Insert categories
        categories = {}
        for category in data['data']['categories']:
            query = "INSERT INTO categories (name) VALUES (%s)"
            category_id = insert_data(connection, query, (category['name'],))
            categories[category['name']] = category_id

        # Insert products, images, attributes, and prices
        for product in data['data']['products']:
            query = """INSERT INTO products (id, name, in_stock, description, category_id, brand)
                       VALUES (%s, %s, %s, %s, %s, %s)"""
            product_data = (
                product['id'],
                product['name'],
                product['inStock'],
                product['description'],
                categories[product['category']],
                product['brand']
            )
            insert_data(connection, query, product_data)

            # Insert images
            for url in product['gallery']:
                query = "INSERT INTO images (product_id, url) VALUES (%s, %s)"
                insert_data(connection, query, (product['id'], url))

            # Insert attributes
            for attribute_set in product['attributes']:
                for attribute in attribute_set['items']:
                    query = """INSERT INTO attributes (product_id, attribute_name, attribute_value, display_value)
                               VALUES (%s, %s, %s, %s)"""
                    attribute_data = (
                        product['id'],
                        attribute_set['name'],
                        attribute['value'],
                        attribute['displayValue']
                    )
                    insert_data(connection, query, attribute_data)

            # Insert prices
            for price in product['prices']:
                query = """INSERT INTO prices (product_id, amount, currency)
                           VALUES (%s, %s, %s)"""
                price_data = (
                    product['id'],
                    price['amount'],
                    price['currency']['label']
                )
                insert_data(connection, query, price_data)

    except Error as e:
        print(f"Error: {e}")
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()


if __name__ == "__main__":
    main()
