import './ProductCard.css';
import { BsCart2 } from "react-icons/bs";

interface ProductCardProps {
    id: number;
    name: string;
    images: Array<{ id: number; url: string }>;
    prices: Array<{ id: number; amount: number; currency: string }>;
    in_stock: boolean;
}
const ProductCard = ({ product }: { product: ProductCardProps }) => {
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

            </div>{product.in_stock && <button className='add-to-cart-button'><BsCart2 size={20} /></button>}
        </div>
    );
};

export default ProductCard;
