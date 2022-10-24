import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import {
	HeroContainer,
	HeroContent,
	HeroOptionsCart,
	HeroOptionsClock,
	HeroOptionsCoffee,
	HeroOptionsPackage,
	ImageHero,
} from './styles';
import coffeeHeroImg from '/assets/coffee-hero.png';

export const Hero = () => {
	return (
		<HeroContainer>
			<HeroContent>
				<h1>Encontre o café perfeito para qualquer hora do dia</h1>
				<p>
					Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
					hora
				</p>

				<div>
					<HeroOptionsCart>
						<div>
							<ShoppingCart size={13} color='#fff' weight='fill' />
						</div>
						<span>Compra simples e segura</span>
					</HeroOptionsCart>
					<HeroOptionsPackage>
						<div>
							<Package size={13} color='#fff' weight='fill' />
						</div>
						<span>Embalagem mantém o café intacto</span>
					</HeroOptionsPackage>
					<HeroOptionsClock>
						<div>
							<Timer size={13} color='#fff' weight='fill' />
						</div>
						<span>Entrega rápida e rastreada</span>
					</HeroOptionsClock>
					<HeroOptionsCoffee>
						<div>
							<Coffee size={13} color='#fff' weight='fill' />
						</div>
						<span>O café chega fresquinho até você</span>
					</HeroOptionsCoffee>
				</div>
			</HeroContent>

			<ImageHero>
				<img src={coffeeHeroImg} alt='' />
			</ImageHero>
		</HeroContainer>
	);
};
