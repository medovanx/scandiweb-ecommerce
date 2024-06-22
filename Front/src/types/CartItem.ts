export interface CartItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
    attributes: {
        id: string;
        name: string;
        value: string;
        selected?: boolean;
    }[];
    image: string;
    totalPrice: number;
}