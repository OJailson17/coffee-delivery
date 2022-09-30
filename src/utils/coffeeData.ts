interface ICoffeeProps {
	title: string;
	imageUrl: string;
	description: string;
	tags: string[];
}

const imagePathUrl = './src/assets';

export const coffeeData: ICoffeeProps[] = [
	{
		title: 'Expresso Tradicional',
		description: 'O tradicional café feito com água quente e grãos moídos',
		imageUrl: `${imagePathUrl}/coffee-1.png`,
		tags: ['Tradicional'],
	},
	{
		title: 'Expresso Americano',
		description: 'Expresso diluído, menos intenso que o tradicional',
		imageUrl: `${imagePathUrl}/coffee-2.png`,
		tags: ['Tradicional'],
	},
	{
		title: 'Expresso Cremoso',
		description: 'Café expresso tradicional com espuma cremosa',
		imageUrl: `${imagePathUrl}/coffee-3.png`,
		tags: ['Tradicional'],
	},

	{
		title: 'Expresso Gelado',
		description: 'Bebida preparada com café expresso e cubos de gelo',
		imageUrl: `${imagePathUrl}/coffee-4.png`,
		tags: ['Tradicional', 'Gelado'],
	},
	{
		title: 'Café com Leite',
		description: 'Meio a meio de expresso tradicional com leite vaporizado',
		imageUrl: `${imagePathUrl}/coffee-5.png`,
		tags: ['Tradicional', 'com leite'],
	},
	{
		title: 'Latte',
		description:
			'Uma dose de café expresso com o dobro de leite e espuma cremosa',
		imageUrl: `${imagePathUrl}/coffee-6.png`,
		tags: ['Tradicional', 'com leite'],
	},
	{
		title: 'Capuccino',
		description:
			'Bebida com canela feita de doses iguais de café, leite e espuma',
		imageUrl: `${imagePathUrl}/coffee-7.png`,
		tags: ['Tradicional', 'com leite'],
	},
	{
		title: 'Macchiato',
		description:
			'Café expresso misturado com um pouco de leite quente e espuma',
		imageUrl: `${imagePathUrl}/coffee-8.png`,
		tags: ['Tradicional', 'com leite'],
	},
	{
		title: 'Mocaccino',
		description: 'Café expresso com calda de chocolate, pouco leite e espuma',
		imageUrl: `${imagePathUrl}/coffee-9.png`,
		tags: ['Tradicional', 'com leite'],
	},
	{
		title: 'Chocolate Quente',
		description: 'Bebida feita com chocolate dissolvido no leite quente e café',
		imageUrl: `${imagePathUrl}/coffee-10.png`,
		tags: ['Tradicional', 'com leite'],
	},
	{
		title: 'Cubano',
		description:
			'Drink gelado de café expresso com rum, creme de leite e hortelã',
		imageUrl: `${imagePathUrl}/coffee-11.png`,
		tags: ['Especial', 'Alcoólico', 'Gelado'],
	},
	{
		title: 'Havaiano',
		description: 'Bebida adocicada preparada com café e leite de coco',
		imageUrl: `${imagePathUrl}/coffee-12.png`,
		tags: ['Especial'],
	},
	{
		title: 'Árabe',
		description: 'Bebida preparada com grãos de café árabe e especiarias',
		imageUrl: `${imagePathUrl}/coffee-13.png`,
		tags: ['Especial'],
	},
	{
		title: 'Irlandês',
		description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
		imageUrl: `${imagePathUrl}/coffee-14.png`,
		tags: ['Especial', 'Alcoólico'],
	},
];
