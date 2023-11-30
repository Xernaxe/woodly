export type ISubCategory = {
	title: string;
	description: string;
};

export type IAboutCard = {
	contents: {
		descriptions: string[];
		subCategory: ISubCategory[];
	};
	alt: string;
	imgSrc: string;
	id: number;
};
