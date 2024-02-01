
import { getPortfolioCardBySlug } from '../../../../../sanity/sanity-utils';
import { IPortfolioCard } from '../../_types/IPortfolioCard';
import { SingleDetails } from './_components/SingleDetails';
import { SingleHero } from './_components/SingleHero';
import { SingleImages } from './_components/SingleImages';

type Props = {
	params: { post: string };
};

export default async function Page({ params }: Props) {
	const slug = params.post;
	const portfolioCard: IPortfolioCard = await getPortfolioCardBySlug(slug);
	return (
		<>
			<SingleHero {...portfolioCard}/>
			<div className='desktopL:flex flex-col items-center'>
				<SingleDetails {...portfolioCard}/>
				<SingleImages {...portfolioCard}/>
			</div>
		</>
	);
}
