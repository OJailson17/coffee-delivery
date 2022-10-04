import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
} from 'phosphor-react';
import {
	CheckoutAddress,
	CheckoutContainer,
	CheckoutFormAddress,
	CheckoutInputComponent,
	CheckoutPaymentMethodContainer,
} from './styles';

export const Checkout = () => {
	return (
		<CheckoutContainer>
			<div>
				<p className='section-title'>Complete seu pedido</p>
				{/* Form */}
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
							<CheckoutInputComponent type='text' placeholder='COMPLEMENTO' />
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
			</div>
		</CheckoutContainer>
	);
};
