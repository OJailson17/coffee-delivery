import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
} from 'phosphor-react';
import { CartItem, CheckoutItem } from '../../components/CheckoutItem';
import { useCart } from '../../contexts/cartContext';
import {
	CheckoutAddress,
	CheckoutContainer,
	CheckoutFormAddress,
	CheckoutInputComponent,
	CheckoutPaymentMethodContainer,
	CheckoutPriceList,
	SelectedItemsContainer,
} from './styles';

export const Checkout = () => {
	const { cart } = useCart();

	const formatPrice = (price: number) => {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(price);
	};

	// Delivery tax
	const deliveryTax = 3.5;

	// Sub total of the bill
	const subTotal = cart.reduce((sumTotal: number, product: CartItem) => {
		const subTotal = product.quantity * product.price;
		sumTotal = sumTotal + subTotal;
		return sumTotal;
	}, 0) as number;

	// The total value of the bill
	const totalBill = subTotal + deliveryTax;

	return (
		<CheckoutContainer>
			<div>
				<p className='section-title'>Complete seu pedido</p>
				<CheckoutAddress>
					<div className='checkout-title'>
						<MapPinLine size={22} color='#C47F17' />
						<div>
							<p>Endereço de Entrega</p>
							<span>Informe o endereço onde deseja receber seu pedido</span>
						</div>
					</div>

					<CheckoutFormAddress>
						<CheckoutInputComponent
							type='text'
							placeholder='CEP'
							variant='sm'
						/>
						<CheckoutInputComponent type='text' placeholder='RUA' />

						<div>
							<CheckoutInputComponent
								type='number'
								placeholder='NÚMERO'
								variant='sm'
							/>

							<div className='complement'>
								<CheckoutInputComponent type='text' placeholder='COMPLEMENTO' />
							</div>
						</div>

						<div>
							<CheckoutInputComponent
								type='text'
								placeholder='BAIRRO'
								variant='sm'
							/>
							<CheckoutInputComponent type='text' placeholder='CIDADE' />
							<CheckoutInputComponent
								type='text'
								placeholder='UF'
								variant='xs'
							/>
						</div>
					</CheckoutFormAddress>
				</CheckoutAddress>
				<CheckoutPaymentMethodContainer>
					<div className='payment-method-title'>
						<CurrencyDollar size={22} color='#8047F8' />

						<div>
							<p>Pagamento</p>
							<span>
								O pagamento é feito na entrega. Escolha a forma que deseja pagar
							</span>
						</div>
					</div>

					<div className='methods'>
						<div>
							<CreditCard size={16} color='#8047F8' />
							Cartão de crédito
						</div>
						<div>
							<Bank size={16} color='#8047F8' />
							cartão de débito
						</div>
						<div>
							<Money size={16} color='#8047F8' />
							dinheiro
						</div>
					</div>
				</CheckoutPaymentMethodContainer>
			</div>

			{/* Cart */}
			<div>
				<p className='section-title'>Cafés selecionados</p>
				<SelectedItemsContainer>
					<div>
						{/* Cart item */}
						{cart.map(cartItem => (
							<CheckoutItem key={cartItem.id} cartItem={cartItem} />
						))}
					</div>

					<CheckoutPriceList>
						<div>
							<p>Total de itens</p>
							<span>{formatPrice(subTotal)}</span>
						</div>
						<div>
							<p>Entrega</p>
							<span>{formatPrice(deliveryTax)}</span>
						</div>
						<div className='total-price'>
							<p>Total</p>
							<span>{formatPrice(totalBill)}</span>
						</div>

						<button>Confirmar Pedido</button>
					</CheckoutPriceList>
				</SelectedItemsContainer>
			</div>
		</CheckoutContainer>
	);
};
