import { createContext, useContext } from 'react';
import type {
	ShoppingCartProviderProps,
	ShoppingCartContextType,
	CartItem,
} from '@/Types/Types';
import usePersistedState from '@/Hooks/usePersistedState';

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export const useShoppingCartContext = () => {
	return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
	const [shoppingCart, setShoppingCart] = usePersistedState<CartItem[]>(
		'cart',
		[]
	);

	function addToCart(product: CartItem) {
		setShoppingCart((prevCart) => {
			const existingItem = prevCart.find((item) => item.id === product.id);
			if (existingItem) {
				// If the item already exists, update its quantity
				return prevCart.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + product.quantity }
						: item
				);
			} else {
				return [...prevCart, product];
			}
		});
	}

	function updateCartItemQuantity(productId: number, newQuantity: number) {
		if (newQuantity <= 0) {
			const updatedCart = shoppingCart.filter(
				(item: CartItem) => item.id !== productId
			);
			return setShoppingCart(updatedCart);
		}
		const updatedCart = shoppingCart.map((item: CartItem) =>
			item.id === productId ? { ...item, quantity: newQuantity } : item
		);
		setShoppingCart(updatedCart);
	}

	function calculateTotalPrice() {
		const total = shoppingCart.reduce((total: number, item: CartItem) => {
			return total + item.price * item.quantity;
		}, 0);
		return total;
	}

	function getCartItemCount() {
		return shoppingCart.length;
	}

	function clearCart() {
		return setShoppingCart([]);
	}

	return (
		<ShoppingCartContext.Provider
			value={{
				addToCart,
				shoppingCart,
				calculateTotalPrice,
				updateCartItemQuantity,
				clearCart,
				getCartItemCount,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
}
