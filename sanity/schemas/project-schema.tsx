import { Rule } from 'sanity';

const imageObj = {
	title: 'imageObj',
	type: 'document',
	fields: [
		{
			title: 'Image Source',
			name: 'imgSrc',
			type: 'string',
			validation: (Rule: Rule) => Rule.required(),
		},
		{
			title: 'Image Alt Text',
			name: 'imgAlt',
			type: 'string',
			validation: (Rule: Rule) => Rule.required(),
		},
	],
};

const project = {
	title: 'Proiecte portofoliu',
	name: 'portfolioCard',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (Rule: Rule) => Rule.required(),
		},
		{
			title: 'Description',
			name: 'desc',
			type: 'text',
			validation: (Rule: Rule) => Rule.required(),
		},
		{
			title: 'Main Image',
			name: 'mainImg',
			type: 'image',
			fields: [{ name: 'alt', type: 'string' }],
		},

		{
			title: 'Images',
			name: 'images',
			type: 'array',
			of: [
				{
					type: 'image',
					fields: [
						{
							name: 'alt',
							type: 'string',
						},
					],
				},
			],
			validation: (Rule: Rule) => Rule.required(),
		},
		{
			title: 'Reception Date',
			name: 'receptionDate',
			type: 'date',
			validation: (Rule: Rule) => Rule.required(),
		},
		{
			title: 'Location',
			name: 'location',
			type: 'string',
			validation: (Rule: Rule) => Rule.required(),
		},
		{
			title: 'Style',
			name: 'style',
			type: 'string',
			validation: (Rule: Rule) => Rule.required(),
		},
		{
			title: 'Surface',
			name: 'surface',
			type: 'number',
			validation: (Rule: Rule) => Rule.required(),
		},
		{
			name: 'postSlug',
			type: 'slug',
			title: 'postSlug',
			options: {
				source: 'title',
				maxLength: 40
			},
		},
	],
};

export default project;
