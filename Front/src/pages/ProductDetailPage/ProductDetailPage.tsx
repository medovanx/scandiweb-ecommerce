import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import './ProductDetailPage.css';
import { BsCart2 } from 'react-icons/bs';
import { PRODUCTS_BY_ID_QUERY } from "../../queries/Queries.ts";
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import ProductAttributes from '../../components/ProductAttributes/ProductAttributes';
import { parseDescription } from '../../utils/parseDescription.ts';
import { convertChildNodesToReactNodes } from '../../utils/convertChildNodesToReactNodes.tsx';

const ProductDetailPage: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const { loading, error, data } = useQuery(PRODUCTS_BY_ID_QUERY, {
        variables: { id: productId },
    });

    if (loading) return <div className="loading-icon"></div>; // Display spinner
    if (error) return <p>Error: {error.message}</p>;

    const product = data.product;
    console.log(product);

    return (
        <div className="product-detail-page">
            <ImageGallery images={product.images} />
            <div className="product-details">
                <h1>{product.name}</h1>
                <ProductAttributes attributes={product.attributes} />
                <h3>PRICE:</h3>
                <p className="product-price-detail">${product.prices[0].amount.toFixed(2)}</p>
                {product.in_stock && <button className="add-to-cart-button-detail">
                    <BsCart2 size={20} /> ADD TO CART
                </button>}
                <div className="product-description">
                    {convertChildNodesToReactNodes(parseDescription(product.description))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
