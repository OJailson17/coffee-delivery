import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';

interface CartContextProviderProps {
	children: ReactNode;
}

interface ICoffee {
	id: number;
	title: string;
	imageUrl: string;
	price: number;
	quantity: number;
}

interface removeCoffeeFromCartProps {
	removeCoffee?: boolean;
	coffeeId: number;
}

interface CartContextProps {
	cart: ICoffee[] | [];
	addCoffeeToCart: (coffee: ICoffee) => void;
	addItemQuantity: (coffeeId: number) => void;
	removeCoffeeFromCart: (props: removeCoffeeFromCartProps) => void;
}

const CartContext = createContext({} as CartContextProps);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
	const [cart, setCart] = useState<ICoffee[] | []>([]);

	// Add coffee to cart
	const addCoffeeToCart = (coffee: ICoffee) => {
		const coffeeExist = cart.find(coffeeItem => coffeeItem.id === coffee.id);

		// If coffee exists, get the coffee object and add quantity property
		if (coffeeExist) {
			addItemQuantity(coffee.id);
			return;
		}

		// Save coffee list on state and define quantity 1 as default
		setCart(state => [...state, { ...coffee, quantity: 1 }]);
	};

	// Delete coffee to from cart
	const removeCoffeeFromCart = ({
		coffeeId,
		removeCoffee = false,
	}: removeCoffeeFromCartProps) => {
		// If removeCoffee property is true, remove the whole item from cart
		if (removeCoffee) {
			const newCart = cart.filter(coffee => coffee.id !== coffeeId);
			setCart(newCart);

			console.log({ remove: newCart });
			return;
		}

		const coffeeExist = cart.find(coffee => coffee.quantity >= 1);

		// If coffee exists, reduce its quantity by 1
		if (coffeeExist) {
			reduceItemQuantity(coffeeId);
		}
	};

	// Save cart items into local storage
	const saveCartToLocalStorage = (cartItems: ICoffee[]) => {
		const cartString = JSON.stringify(cartItems);

		localStorage.setItem('@coffee-delivery', cartString);
	};

	// Get cart item from local storage and save in cart state
	const getCartFromLocalStorage = () => {
		const savedCart = localStorage.getItem('@coffee-delivery');

		if (savedCart) {
			const parsedCart: ICoffee[] = JSON.parse(savedCart);
			setCart(parsedCart);
		}
	};

	// Get the id of a coffee and add one unit to quantity property
	const addItemQuantity = (coffeeId: number) => {
		const newCart = cart.map(coffee => {
			if (coffee.id === coffeeId) {
				return {
					...coffee,
					quantity: (coffee.quantity += 1),
				};
			}
			return coffee;
		});

		// After modify the item, update cart
		setCart(newCart);
	};

	// Reduce quantity of the coffee passed in params
	const reduceItemQuantity = (coffeeId: number) => {
		const newCart = cart.map(coffee => {
			if (coffee.id === coffeeId) {
				return {
					...coffee,
					quantity: (coffee.quantity -= 1),
				};
			}
			return coffee;
		});

		// Remove the items with quantity 0 or less
		const removedWithZeroQuantity = newCart.filter(
			cartItem => cartItem.quantity > 0,
		);

		// Clear local storage
		localStorage.removeItem('@coffee-delivery');

		// After modify the items, update cart
		setCart(removedWithZeroQuantity);
	};

	useEffect(() => {
		// Only save cart in local storage if there is some item
		if (cart.length > 0) {
			saveCartToLocalStorage(cart);
		}
	}, [cart]);

	useEffect(() => {
		// Get cart data from local storage after page loads
		getCartFromLocalStorage();
	}, []);

	return (
		<CartContext.Provider
			value={{
				cart,
				addCoffeeToCart,
				addItemQuantity,
				removeCoffeeFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
