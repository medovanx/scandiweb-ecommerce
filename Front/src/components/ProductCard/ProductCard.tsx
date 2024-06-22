import './ProductCard.css';
interface ProductCardProps {
    id: number;
    name: string;
    images: Array<{ id: number; url: string }>;
    prices: Array<{ id: number; amount: number; currency: string }>;
    in_stock: boolean;
}
const ProductCard = ({ product }: { product: ProductCardProps }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.images[0]?.url} alt={product.name} />
            </div>
            <div className="product-info">
                <p className='product-name'>{product.name}</p>
                <p className='product-price'>${product.prices[0]?.amount}</p>

            </div>{product.in_stock ? (
                <span className="out-of-stock">OUT OF STOCK</span>
            ) : (
                <button>Add to Cart</button>
            )}
        </div>
    );
};

export default ProductCard;
