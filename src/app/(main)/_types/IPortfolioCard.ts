type IImg = {
    imgAlt: string;
	imgSrc: string;
}

export type IPortfolioCard = {
    title: string;
	desc: string;
	location: string;
	style: string;
	receptionDate: string;
	surface: number;
	mainImg: IImg
	images: IImg[]
	_id: number;
    slug: {
		current: string;
		_type: string;
	}
};
