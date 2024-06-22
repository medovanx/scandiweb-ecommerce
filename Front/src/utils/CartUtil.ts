import { CartItem } from "../types/CartItem";

interface Product {
    id: string;
    name: string;
    images: { id: string; url: string }[];
    prices: { id: string; amount: number; currency: string }[];
    in_stock: boolean;
    attributes: { id: string; name: string; value: string }[];
}

export function addToCart(
    product: Product,
    cartItems: CartItem[],
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>,
): void {
    // Create a unique identifier for the product based on selected attributes
    const identifier = `${product.id}`;

    // Check if the product is already in the cart
    const existingItem = cartItems.find(item => item.id === identifier);

    if (existingItem) {
        // If the product with the same attributes is already in the cart, update its quantity
        const updatedCartItems = cartItems.map(item => {
            if (item.id === identifier) {
                return { ...item, quantity: item.quantity + 1, totalPrice: item.price * (item.quantity + 1) };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    } else {
        // If the product with selected attributes is not in the cart, add it
        const newCartItem: CartItem = {
            id: identifier,
            name: product.name,
            quantity: 1,    // Initial quantity is 1
            price: product.prices[0]?.amount || 0, // Assuming the first price is used
            totalPrice: product.prices[0]?.amount || 0, // Initial total price is the same as price
            attributes: product.attributes,
            image: product.images[0]?.url // Assuming this is the URL of the first image
        };
        setCartItems([...cartItems, newCartItem]);
    }
}

export function getFirstAttributes(attributes: { id: string; name: string; value: string }[]): string[] {
    const firstAttributes: string[] = [];
    const attributeTypes = new Set<string>();

    attributes.forEach(attr => {
        if (!attributeTypes.has(attr.name)) {
            firstAttributes.push(attr.value);
            attributeTypes.add(attr.name);
        }
    });

    return firstAttributes;
}

export function updateCartItemQuantity(cartItems: CartItem[], itemId: string, quantityDelta: number): CartItem[] {
    return cartItems.map(item => {
        if (item.id === itemId) {
            const newQuantity = item.quantity + quantityDelta;
            const newTotalPrice = item.price * newQuantity;
            // Automatically remove item if quantity is decremented to zero
            if (newQuantity <= 0) {
                return { ...item, quantity: 0 };
            }
            return { ...item, quantity: newQuantity, totalPrice: newTotalPrice };
        }
        return item;
    }).filter(item => item.quantity > 0); // Remove items with quantity zero
}

export function removeCartItem(cartItems: CartItem[], itemId: string): CartItem[] {
    return cartItems.filter(item => item.id !== itemId);
}