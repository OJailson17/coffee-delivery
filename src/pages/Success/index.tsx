import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import motoboyImg from '../../assets/motoboy.svg';
import {
	InfoLocation,
	InfoPaymentMethod,
	InfoTime,
	OrderInfo,
	OrderInfoWrapper,
	SuccessContainer,
	SuccessContent,
} from './styles';

export const Success = () => {
	return (
		<SuccessContainer>
			<h1>Uhu! Pedido confirmado</h1>
			<span>Agora é só aguardar que logo o café chegará até você</span>
			<SuccessContent>
				<OrderInfoWrapper>
					<OrderInfo>
						<InfoLocation>
							{/* Icon */}
							<div>
								<MapPin size={16} color='#FAFAFA' weight='fill' />
							</div>

							<div>
								<p>
									Entrega em <strong> Rua João Daniel Martinelli, 102</strong>
								</p>
								<p>Farrapos - Porto Alegre, RS</p>
							</div>
						</InfoLocation>

						<InfoTime>
							{/* Icon */}
							<div>
								<Timer size={16} color='#FAFAFA' weight='fill' />
							</div>

							<div>
								<p>Previsão de entrega</p>
								<strong>20 min - 30 min</strong>
							</div>
						</InfoTime>

						<InfoPaymentMethod>
							{/* Icon */}
							<div>
								<CurrencyDollar size={16} color='#FAFAFA' />
							</div>

							<div>
								<p>Pagamento na entrega</p>
								<strong>Cartão de Crédito</strong>
							</div>
						</InfoPaymentMethod>
					</OrderInfo>
				</OrderInfoWrapper>

				<img src={motoboyImg} alt='' />
			</SuccessContent>
		</SuccessContainer>
	);
};
