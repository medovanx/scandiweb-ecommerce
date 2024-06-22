import './ProductCard.css';
import { BsCart2 } from "react-icons/bs";
import { useCartContext } from '../../context/CartContext';
import { addToCart } from '../../utils/CartUtil'; // Adjust the path based on your project structure

interface ProductCardProps {
    product: {
        id: string;
        name: string;
        images: { id: string; url: string }[];
        prices: { id: string; amount: number; currency: string }[];
        in_stock: boolean;
        attributes: { id: string; name: string; value: string }[];
    };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { cartItems, setCartItems } = useCartContext();

    const handleAddToCart = () => {
        addToCart(product, cartItems, setCartItems);
    };

    return (
        <div className="product-card" data-testid={`product-${product.name.split(' ').join('-').toLowerCase()}`}>
            <div className="product-image">
                <img
                    src={product.images[0]?.url}
                    alt={product.name}
                    style={{ filter: product.in_stock ? 'grayscale(0%)' : 'grayscale(100%)' }}
                />
                {!product.in_stock && (
                    <div className="out-of-stock-overlay">
                        <span className="out-of-stock">OUT OF STOCK</span>
                    </div>
                )}
            </div>
            <div className="product-info">
                <p className='product-name'>{product.name}</p>
                <p className='product-price'>${product.prices[0]?.amount}</p>
            </div>
            {product.in_stock && (
                <button className='add-to-cart-button' onClick={handleAddToCart}>
                    <BsCart2 size={20} />
                </button>
            )}
        </div>
    );
};

export default ProductCard;
