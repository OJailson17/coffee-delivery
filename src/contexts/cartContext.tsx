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

interface CartContextProps {
	cart: ICoffee[] | [];
	addCoffeeToCart: (coffee: ICoffee) => void;
	addItemQuantity: (coffeeId: number) => void;
}

const CartContext = createContext({} as CartContextProps);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
	const [cart, setCart] = useState<ICoffee[]>([]);

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

	// Get the id of a coffee and add one unit to quantity propery
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

	useEffect(() => {
		if (cart.length > 0) {
			saveCartToLocalStorage(cart);
		}
	}, [cart]);

	useEffect(() => {
		// Get cart data from local storage after page loads
		getCartFromLocalStorage();
	}, []);

	return (
		<CartContext.Provider value={{ cart, addCoffeeToCart, addItemQuantity }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
