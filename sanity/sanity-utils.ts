import { groq } from 'next-sanity';
import { IFAQ } from '@/app/(main)/_types/IFAQ';
import { IPortfolioCard } from '@/app/(main)/_types/IPortfolioCard';
import { client } from './lib/client';

export async function getAllFAQs(): Promise<IFAQ[]> {
	return client.fetch(groq`*[_type=="FAQ"] {
            _id,
            question,
            answer
        }
    `);
}

export async function getAllProjects(): Promise<IPortfolioCard[]> {
	return client.fetch(
		groq`*[_type=="portfolioCard"] {
            _id,
            title,
            desc,
            "mainImg": {
                'imgSrc': mainImg.asset->url,
                'imgAlt': mainImg.alt
            },
            receptionDate,
            location,
            style,
            surface,
            "slug": postSlug.current,
            "images": images[] {
                'imgAlt': alt,
                'imgSrc': asset->url
            }
        }
	`
	);
}

export async function getAllProjectsImages(): Promise<
	Pick<IPortfolioCard, '_id' | 'slug' | 'title' | 'mainImg'>[]
> {
	return client.fetch(
		groq`*[_type=="portfolioCard"]  {
            _id,
            "slug": postSlug.current,
            title,
            "mainImg": {
                'imgSrc': mainImg.asset->url,
                'imgAlt': mainImg.alt
            }
        }
	`
	);
}

export async function getPortfolioCardBySlug(
	slug: string
): Promise<IPortfolioCard> {
	console.log(slug);
	return client.fetch(
		groq`*[_type=="portfolioCard" && postSlug.current == $slug][0] {
            _id,
            title,
            desc,
            "mainImg": {
                'imgSrc': mainImg.asset->url,
                'imgAlt': mainImg.alt
            },
            receptionDate,
            location,
            style,
            surface,
            "slug": postSlug.current,
            "images": images[] {
                'imgAlt': alt,
                'imgSrc': asset->url
            }
        }
	`,
		{ slug }
	);
}
