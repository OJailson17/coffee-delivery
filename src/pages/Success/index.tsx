import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	InfoLocation,
	InfoPaymentMethod,
	InfoTime,
	OrderInfo,
	OrderInfoWrapper,
	SuccessContainer,
	SuccessContent,
} from './styles';
import motoboyImg from '/assets/motoboy.svg';

interface IStateReturn {
	state: {
		city: string;
		houseNumber: number;
		neighbor: string;
		street: string;
		uf: string;
		paymentMethod: 'credit-card' | 'debit-card' | 'cash';
	};
}

export const Success = () => {
	const navigate = useNavigate();
	const { state } = useLocation() as IStateReturn;

	const paymentMethod = {
		'credit-card': 'Cartão de Crédito',
		'debit-card': 'Cartão de Débito',
		cash: 'Dinheiro',
	};

	useEffect(() => {
		console.log(state);

		if (!state) {
			navigate('/', {
				replace: true,
			});
		}
	}, []);

	return (
		<SuccessContainer>
			<h1>Uhu! Pedido confirmado</h1>
			<span>Agora é só aguardar que logo o café chegará até você</span>
			<SuccessContent>
				<OrderInfoWrapper>
					<OrderInfo>
						<InfoLocation>
							<div>
								<MapPin size={16} color='#FAFAFA' weight='fill' />
							</div>

							<div>
								<p>
									Entrega em{' '}
									<strong>
										{' '}
										Rua {state?.street}, {state?.houseNumber}
									</strong>
								</p>
								<p>
									{state?.neighbor} - {state?.city}, {state?.uf}
								</p>
							</div>
						</InfoLocation>

						<InfoTime>
							<div>
								<Timer size={16} color='#FAFAFA' weight='fill' />
							</div>

							<div>
								<p>Previsão de entrega</p>
								<strong>20 min - 30 min</strong>
							</div>
						</InfoTime>

						<InfoPaymentMethod>
							<div>
								<CurrencyDollar size={16} color='#FAFAFA' />
							</div>

							<div>
								<p>Pagamento na entrega</p>
								<strong>{paymentMethod[state?.paymentMethod]}</strong>
							</div>
						</InfoPaymentMethod>
					</OrderInfo>
				</OrderInfoWrapper>

				<img src={motoboyImg} alt='' />
			</SuccessContent>
		</SuccessContainer>
	);
};
