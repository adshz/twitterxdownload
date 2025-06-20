import { getTranslation } from '@/lib/i18n';
import { Card, CardBody, CardHeader, Chip, Link } from "@heroui/react";

export default async function Blog({ params: { locale } }) {
  const t = function (key) {
    return getTranslation(locale, key);
  }

  // Sample blog posts - in a real app, these would come from a database or CMS
  const blogPosts = [
    {
      id: 1,
      title: "How to Download Twitter Videos: A Complete Guide",
      excerpt: "Learn the step-by-step process to download Twitter videos using our free tool. No registration required. This comprehensive guide covers everything from finding the right Twitter video to downloading it in the highest quality available. Perfect for content creators, researchers, and anyone who wants to save Twitter videos for offline viewing.",
      date: "2024-01-15",
      category: "Tutorial",
      readTime: "5 min read",
      slug: "how-to-download-twitter-videos"
    },
    {
      id: 2,
      title: "Twitter X Video Download: What's New in 2024",
      excerpt: "Discover the latest features and improvements in Twitter video downloading technology. As Twitter continues to evolve into X, we've been working hard to keep our video downloader up to date with the latest changes and improvements. Learn about enhanced video quality support, faster processing times, and mobile optimization.",
      date: "2024-01-10",
      category: "News",
      readTime: "3 min read",
      slug: "twitter-x-video-download-2024"
    },
    {
      id: 3,
      title: "Best Practices for Content Creators Using Twitter Videos",
      excerpt: "Tips and tricks for content creators who want to use Twitter videos in their projects. This guide covers legal considerations, ethical practices, and technical tips for incorporating Twitter videos into your content creation workflow. Learn how to find quality content, give proper attribution, and build relationships with original creators.",
      date: "2024-01-05",
      category: "Tips",
      readTime: "7 min read",
      slug: "content-creators-twitter-videos"
    }
  ];

  return (
    <div className="page-container">
      <div className="section">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">{t('Blog')}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('Latest insights, tutorials, and news about Twitter video downloading and content creation')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardBody className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Chip size="sm" color="primary" variant="flat">
                        {post.category}
                      </Chip>
                      <span className="text-sm text-muted-foreground">
                        {post.readTime}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString(locale, {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`} className="text-foreground hover:text-primary">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="inline-flex items-center text-primary hover:underline font-medium"
                    >
                      {t('Read More')} →
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t('More blog posts coming soon!')}
          </p>
          <Link href="/" className="text-primary hover:underline">
            {t('Back to Home')}
          </Link>
        </div>
      </div>
    </div>
  );
} 