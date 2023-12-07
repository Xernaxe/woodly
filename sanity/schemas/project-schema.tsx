const tags = [
	{ title: 'New', value: 'new' },
	{ title: 'Popular', value: 'popular' },
	{ title: 'Trending', value: 'trending' },
];

const project = {
	name: 'project',
	title: 'Projects',
	type: 'document',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},
		{
			title: 'Tag',
			type: 'string',
			name: 'tag',
			options: {
				list: tags.map(({ title, value }) => ({ title, value })),
				layout: 'radio',
			},
		},
		{
			name: 'overview',
			type: 'string',
			title: 'News overview',
		},
		{
			name: 'image',
			type: 'image',
			title: 'Image',
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'slug',
			options: {
				source: 'title',
				maxLength: 40
			},
		},
	],
};
export default project;
