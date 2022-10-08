interface ICoffeeProps {
	id: number;
	title: string;
	imageUrl: string;
	description: string;
	tags: string[];
	price: number;
}

const imagePathUrl = '/assets';

export const coffeeData: ICoffeeProps[] = [
	{
		id: 1,
		title: 'Expresso Tradicional',
		description: 'O tradicional café feito com água quente e grãos moídos',
		imageUrl: `${imagePathUrl}/coffee-1.png`,
		tags: ['Tradicional'],
		price: 9.9,
	},
	{
		id: 2,
		title: 'Expresso Americano',
		description: 'Expresso diluído, menos intenso que o tradicional',
		imageUrl: `${imagePathUrl}/coffee-2.png`,
		tags: ['Tradicional'],
		price: 13.9,
	},
	{
		id: 3,
		title: 'Expresso Cremoso',
		description: 'Café expresso tradicional com espuma cremosa',
		imageUrl: `${imagePathUrl}/coffee-3.png`,
		tags: ['Tradicional'],
		price: 13.9,
	},

	{
		id: 4,
		title: 'Expresso Gelado',
		description: 'Bebida preparada com café expresso e cubos de gelo',
		imageUrl: `${imagePathUrl}/coffee-4.png`,
		tags: ['Tradicional', 'Gelado'],
		price: 9.9,
	},
	{
		id: 5,
		title: 'Café com Leite',
		description: 'Meio a meio de expresso tradicional com leite vaporizado',
		imageUrl: `${imagePathUrl}/coffee-5.png`,
		tags: ['Tradicional', 'com leite'],
		price: 9.9,
	},
	{
		id: 6,
		title: 'Latte',
		description:
			'Uma dose de café expresso com o dobro de leite e espuma cremosa',
		imageUrl: `${imagePathUrl}/coffee-6.png`,
		tags: ['Tradicional', 'com leite'],
		price: 5.9,
	},
	{
		id: 7,
		title: 'Capuccino',
		description:
			'Bebida com canela feita de doses iguais de café, leite e espuma',
		imageUrl: `${imagePathUrl}/coffee-7.png`,
		tags: ['Tradicional', 'com leite'],
		price: 14.9,
	},
	{
		id: 8,
		title: 'Macchiato',
		description:
			'Café expresso misturado com um pouco de leite quente e espuma',
		imageUrl: `${imagePathUrl}/coffee-8.png`,
		tags: ['Tradicional', 'com leite'],
		price: 11.9,
	},
	{
		id: 9,
		title: 'Mocaccino',
		description: 'Café expresso com calda de chocolate, pouco leite e espuma',
		imageUrl: `${imagePathUrl}/coffee-9.png`,
		tags: ['Tradicional', 'com leite'],
		price: 9.9,
	},
	{
		id: 10,
		title: 'Chocolate Quente',
		description: 'Bebida feita com chocolate dissolvido no leite quente e café',
		imageUrl: `${imagePathUrl}/coffee-10.png`,
		tags: ['Tradicional', 'com leite'],
		price: 8.9,
	},
	{
		id: 11,
		title: 'Cubano',
		description:
			'Drink gelado de café expresso com rum, creme de leite e hortelã',
		imageUrl: `${imagePathUrl}/coffee-11.png`,
		tags: ['Especial', 'Alcoólico', 'Gelado'],
		price: 9.9,
	},
	{
		id: 12,
		title: 'Havaiano',
		description: 'Bebida adocicada preparada com café e leite de coco',
		imageUrl: `${imagePathUrl}/coffee-12.png`,
		tags: ['Especial'],
		price: 9.9,
	},
	{
		id: 13,
		title: 'Árabe',
		description: 'Bebida preparada com grãos de café árabe e especiarias',
		imageUrl: `${imagePathUrl}/coffee-13.png`,
		tags: ['Especial'],
		price: 14.9,
	},
	{
		id: 14,
		title: 'Irlandês',
		description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
		imageUrl: `${imagePathUrl}/coffee-14.png`,
		tags: ['Especial', 'Alcoólico'],
		price: 14.9,
	},
];
