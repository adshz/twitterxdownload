import { getTranslation } from '@/lib/i18n';
import HotTweets from '@/app/components/ui/HotTweets';
import FAQ from '@/app/components/ui/FAQ';
import HotCreators from '@/app/components/ui/HotCreators';
import Hero from '@/app/components/ui/Hero';
import { redirect } from 'next/navigation';

// set to true to enable home listing
const enableHomeListing = false;

export default async function Home({ params: { locale } }) {
  const t = function (key) {
    return getTranslation(locale, key);
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const remainApiResp = await fetch(`${baseUrl}/api/remains`,{
    cache: 'no-store'
  });
  const remainApiCountData = await remainApiResp.json();
  const remainApiCount = remainApiCountData.data;

  return (
    <>
      <div className="page-container">
        <div className="section">
          <Hero locale={locale} remainApiCount={remainApiCount} onDownload={async (url) => {
            'use server';
            redirect(`/downloader?url=${url}`);
          }} />
        </div>
        {enableHomeListing && (
        <>
          <div className="section">
            <h3 className="text-2xl font-bold px-2 py-4">{t('Hot Creators')}</h3>
            <HotCreators locale={locale} />
          </div>
          <div className="section">
            <HotTweets locale={locale} />
          </div>
        </>
        )}
        <div className="section">
          <h3 className="text-2xl font-bold px-2 py-4">{t('Download Twitter video and all content')}</h3>
          <div className="px-2">
            <p>
              {t('BestContentLab is a web application for content creators to browse and download popular videos on social media. Downloaded content can be used for further creation on your computer directly. X (formerly Twitter) videos and X GIFs are embedded in the posts, so to download twitter videos, please copy the specific URL/link and paste it in the above box. Our BestContentLab service will provide the video for you to download')}
            </p>
          </div>
        </div>
        <div className="section">
          <h3 className="text-2xl font-bold px-2 py-4">{t('FAQ')}</h3>
          <FAQ locale={locale} />
        </div>
      </div>
    </>
  );
}
