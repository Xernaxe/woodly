import { createClient, groq } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from './env';
import { IFAQ } from '@/app/(main)/_types/IFAQ';
import { IPortfolioCard } from '@/app/(main)/_types/IPortfolioCard';

export async function getAllFAQs(): Promise<IFAQ[]> {
	return createClient({
		apiVersion,
		dataset,
		projectId,
		useCdn,
	}).fetch(groq`*[_type=="FAQ"] {
            _id,
            question,
            answer
        }
    `);
}

export async function getAllProjects(): Promise<IPortfolioCard[]> {
	return createClient({ apiVersion, dataset, projectId, useCdn }).fetch(
		groq`*[_type=="portfolioCard"] {
            _id,
            title,
            desc,
            "mainImg": {
                'imgSrc': mainImg.asset->url,
                'alt': mainImg.alt
            },
            receptionDate,
            location,
            style,
            surface,
            slug,
            "images": images[] {
                'imgAlt': alt,
                'imgSrc': asset->url
            }
        }
	`
	);
}

export async function getAllProjectsImages() {
	return createClient({ apiVersion, dataset, projectId, useCdn }).fetch(
		groq`*[_type=="portfolioCard"]  {
            _id,
            "slug": postSlug.current,
            "mainImg": {
                'imgSrc': mainImg.asset->url,
                'alt': mainImg.alt
            }
        }
	`
	);
}

export async function getPortfolioCardBySlug(
	slug: string
): Promise<IPortfolioCard> {
	console.log(slug);
	return createClient({ apiVersion, dataset, projectId, useCdn }).fetch(
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
            slug,
            "images": images[] {
                'imgAlt': alt,
                'imgSrc': asset->url
            }
        }
	`,
		{ slug }
	);
}
