import { createClient, groq } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from './env';
import { IFAQ } from '@/app/(main)/_types/IFAQ';

export async function getAllFAQs(): Promise<IFAQ[]> {
    return createClient({
        apiVersion,
        dataset,
        projectId,
        useCdn
    }).fetch(groq`*[_type=="FAQ"] {
            _id,
            question,
            answer
        }
    `)
}