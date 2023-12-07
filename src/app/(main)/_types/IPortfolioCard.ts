type IDetailsPortfolio = {
    date: string;
    location: string;
    style: string;
    surface: number;
}

export type IPortfolioCard = {
    title: string;
	contents: {
		desc: string;
		details: IDetailsPortfolio
	};
	alt: string;
	imgSrc: string;
	id: number;
    slug: string
};
