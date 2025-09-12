import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getPageData } from '@/utils/getPageData'
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {

    const { slug } = await params;
    const data = await getPageData(slug);
    const seo = data.meta.seo_meta;

    return {
        title: seo.seo_title || 'Default Title',
        description: seo.seo_description || 'Default Description',
        robots: seo.index === 'index' ? 'index,follow' : 'noindex,nofollow',
    };
}

const page = async ({ params }: { params: Params }) => {
    const { slug } = await params;

    const dynamicData = await getPageData(slug);

    if (!dynamicData.pageData || dynamicData.pageData.length === 0) return notFound();

    return (
        <>
            <Breadcrumbs title={ dynamicData.pageData[0].name } bgImage="/images/slider-bg-1.png" />
            <div className='container mx-auto px-4 py-12 md:py-15'>
                <div className='font-normal custom-font-style'>
                    <div className='font-normal custom-font-style' dangerouslySetInnerHTML={{ __html: dynamicData?.pageData[0]?.content }} />
                </div>
            </div>
        </>
    )
}

export default page