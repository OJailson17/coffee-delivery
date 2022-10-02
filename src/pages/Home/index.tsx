import { CoffeeCard } from '../../components/CoffeeCard';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { CoffeeGridContainer, MainHomeContainer } from './styles';

import { coffeeData } from '../../utils/coffeeData';

export const Home = () => {
	return (
		<>
			<Header />
			<Hero />

			<MainHomeContainer>
				<h2>Nossos cafés</h2>

				<CoffeeGridContainer>
					{coffeeData.map(coffee => (
						<CoffeeCard key={coffee.title} coffee={coffee} />
					))}
				</CoffeeGridContainer>
			</MainHomeContainer>
		</>
	);
};
