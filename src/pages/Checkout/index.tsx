import * as RadioGroup from '@radix-ui/react-radio-group';
import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
} from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CartItem, CheckoutItem } from '../../components/CheckoutItem';
import { ToastContainer, toast } from 'react-toastify';

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

interface DeliveryFormData {
	cep: string;
	city: string;
	complement: string;
	houseNumber: number;
	neighbor: string;
	street: string;
	uf: string;
}

export const Checkout = () => {
	const [paymentMethod, setPaymentMethod] = useState('');

	const { register, handleSubmit } = useForm<DeliveryFormData>();

	const { cart, clearCart } = useCart();

	const navigate = useNavigate();

	const handleConfirmOrder = (data: DeliveryFormData) => {
		const { city, uf, street, houseNumber, neighbor } = data;

		if (paymentMethod.trim() === '') {
			toast('Selecione o método de pagamento', {
				type: 'error',
				position: 'top-center',
				autoClose: 3000,
				closeButton: true,
				pauseOnHover: false,
				theme: 'colored',
			});
			return;
		}

		if (data) {
			navigate('/checkout/success', {
				state: {
					city,
					uf,
					street,
					houseNumber,
					neighbor,
					paymentMethod,
				},
			});

			clearCart();

			localStorage.removeItem('@coffee-delivery');
		}
	};

	const formatPrice = (price: number) => {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(price);
	};

	// Delivery tax
	const deliveryTax = 3.5;

	// Sub total of the bill
	// *Typescript error on reduce method*
	const subTotal = cart.reduce((sumTotal: number, product: CartItem) => {
		const subTotal = product.quantity * product.price;
		sumTotal = sumTotal + subTotal;
		return sumTotal;
	}, 0) as number;

	// The total value of the bill
	const totalBill = subTotal + deliveryTax;

	return (
		<>
			<ToastContainer />
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
								{...register('cep', {
									required: true,
								})}
							/>
							<CheckoutInputComponent
								type='text'
								placeholder='RUA'
								{...register('street', {
									required: true,
								})}
							/>

							<div>
								<CheckoutInputComponent
									type='number'
									placeholder='NÚMERO'
									variant='sm'
									{...register('houseNumber', {
										required: true,
										valueAsNumber: true,
									})}
								/>

								<div className='complement'>
									<CheckoutInputComponent
										type='text'
										placeholder='COMPLEMENTO'
										{...register('complement')}
									/>
								</div>
							</div>

							<div>
								<CheckoutInputComponent
									type='text'
									placeholder='BAIRRO'
									variant='sm'
									{...register('neighbor', {
										required: true,
									})}
								/>
								<CheckoutInputComponent
									type='text'
									placeholder='CIDADE'
									{...register('city', {
										required: true,
									})}
								/>
								<CheckoutInputComponent
									type='text'
									placeholder='UF'
									variant='xs'
									{...register('uf', {
										required: true,
									})}
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
									O pagamento é feito na entrega. Escolha a forma que deseja
									pagar
								</span>
							</div>
						</div>

						<RadioGroup.Root onValueChange={value => setPaymentMethod(value)}>
							<div className='methods'>
								<div>
									<RadioGroup.Item value='credit-card'>
										<CreditCard size={16} color='#8047F8' />
										Cartão de crédito
									</RadioGroup.Item>
								</div>

								<div>
									<RadioGroup.Item value='debit-card'>
										<Bank size={16} color='#8047F8' />
										cartão de débito
									</RadioGroup.Item>
								</div>

								<div>
									<RadioGroup.Item value='cash'>
										<Money size={16} color='#8047F8' />
										dinheiro
									</RadioGroup.Item>
								</div>
								{/* 

*/}
							</div>
						</RadioGroup.Root>
					</CheckoutPaymentMethodContainer>
				</div>

				{/* Cart */}
				{cart.length >= 1 && (
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

								<button onClick={handleSubmit(handleConfirmOrder)}>
									Confirmar Pedido
								</button>
							</CheckoutPriceList>
						</SelectedItemsContainer>
					</div>
				)}
			</CheckoutContainer>
		</>
	);
};
