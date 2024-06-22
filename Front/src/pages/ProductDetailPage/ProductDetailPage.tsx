import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { productId } = useParams<{ productId: string }>();

    return (
        <div>
            <h1>Product Detail Page</h1>
            <p>Product ID: {productId}</p>
        </div>
    );
};

export default ProductPage;
