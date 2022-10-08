import { Hero } from '../../components/Hero';
import { CoffeeCard } from './components/CoffeeCard';
import { CoffeeGridContainer, MainHomeContainer } from './styles';

import { coffeeData } from '../../utils/coffeeData';

export const Home = () => {
	return (
		<>
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
