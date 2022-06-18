export type Idea = {
	name: string
	emoji: string
	description: string
}

class IdeasRepo {
	getAll = async () => [
		{
			name: 'Ground to perfection',
			emoji: '☕️',
			description:
				'Simple coffee grinding game, time your grinding for how coarse or fine is appropriate for your coffee-making process. Inspired by seeing https://play.date/ promos, would be amazing with crank controls!',
		},
		{
			name: 'Good up!',
			emoji: '🏐',
			description:
				'Personal Beach Volleyball game tracker, see insights for your own matches, group them by your various partners, see trends over seasons!',
		},
		{
			name: 'Wardrobe Theory',
			emoji: '👔',
			description: 'Categorise your clothes in looks, get insights!',
		},
	]
}

export const ideasRepo = new IdeasRepo()
