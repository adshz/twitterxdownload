import { getTranslation } from '@/lib/i18n';
import { Card, CardBody, Chip, Link, Button } from "@heroui/react";
import { ArrowLeft } from "lucide-react";

export default async function BlogPost({ params: { locale, slug } }) {
  const t = function (key) {
    return getTranslation(locale, key);
  }

  // Sample blog post data - in a real app, this would come from a database or CMS
  const blogPosts = {
    "how-to-download-twitter-videos": {
      title: "How to Download Twitter Videos: A Complete Guide",
      excerpt: "Learn the step-by-step process to download Twitter videos using our free tool. No registration required.",
      content: `
        <h2>Introduction</h2>
        <p>Twitter (now X) is a treasure trove of video content, from breaking news to viral moments. But what if you want to save these videos for offline viewing or content creation? That's where our Twitter video downloader comes in.</p>
        
        <h2>Step-by-Step Guide</h2>
        <h3>Step 1: Find the Twitter Video</h3>
        <p>Navigate to the Twitter post containing the video you want to download. Make sure the post is public and accessible.</p>
        
        <h3>Step 2: Copy the URL</h3>
        <p>Click on the tweet to open it in a new tab, then copy the URL from your browser's address bar. The URL should look something like: <code>https://twitter.com/username/status/123456789</code></p>
        
        <h3>Step 3: Use Our Downloader</h3>
        <p>Visit our <Link href="/downloader">video downloader page</Link> and paste the Twitter URL into the input field. Click the download button and wait for the processing to complete.</p>
        
        <h3>Step 4: Download Your Video</h3>
        <p>Once processing is complete, you'll see download options for different quality versions. Choose your preferred quality and click download.</p>
        
        <h2>Tips for Best Results</h2>
        <ul>
          <li>Ensure the tweet is public and not from a private account</li>
          <li>Check that the video is still available on Twitter</li>
          <li>Use a stable internet connection for faster processing</li>
          <li>Consider the video quality - higher quality means larger file sizes</li>
        </ul>
        
        <h2>Common Issues and Solutions</h2>
        <h3>Video Not Found</h3>
        <p>If you get a "video not found" error, the tweet may have been deleted or made private. Try finding an alternative source or contacting the original poster.</p>
        
        <h3>Processing Takes Too Long</h3>
        <p>Large videos or high traffic periods may cause longer processing times. Be patient, or try again during off-peak hours.</p>
        
        <h2>Legal Considerations</h2>
        <p>Always respect copyright and intellectual property rights. Only download videos you have permission to use, and give proper attribution when sharing content.</p>
        
        <h2>Conclusion</h2>
        <p>Downloading Twitter videos is now easier than ever with our free tool. Whether you're a content creator, researcher, or just want to save memorable moments, our service provides a reliable solution for accessing Twitter video content.</p>
      `,
      date: "2024-01-15",
      category: "Tutorial",
      readTime: "5 min read",
      author: "TwitterXDownload Team"
    },
    "twitter-x-video-download-2024": {
      title: "Twitter X Video Download: What's New in 2024",
      excerpt: "Discover the latest features and improvements in Twitter video downloading technology.",
      content: `
        <h2>What's New in 2024</h2>
        <p>As Twitter continues to evolve into X, we've been working hard to keep our video downloader up to date with the latest changes and improvements.</p>
        
        <h2>Enhanced Video Quality Support</h2>
        <p>We now support higher resolution video downloads, including 4K content where available. Our improved processing engine ensures you get the best possible quality for your downloads.</p>
        
        <h2>Faster Processing Times</h2>
        <p>Thanks to our optimized backend infrastructure, video processing is now up to 50% faster than before. You can download your favorite Twitter videos in record time.</p>
        
        <h2>Improved Error Handling</h2>
        <p>We've enhanced our error detection and reporting system to provide clearer feedback when issues occur. This helps users understand what went wrong and how to resolve it.</p>
        
        <h2>Mobile Optimization</h2>
        <p>Our downloader now works seamlessly on mobile devices, with a responsive design that adapts to any screen size. Download videos on the go with ease.</p>
        
        <h2>Future Plans</h2>
        <p>We're constantly working on new features and improvements. Stay tuned for batch downloading, playlist support, and more advanced filtering options.</p>
      `,
      date: "2024-01-10",
      category: "News",
      readTime: "3 min read",
      author: "TwitterXDownload Team"
    },
    "content-creators-twitter-videos": {
      title: "Best Practices for Content Creators Using Twitter Videos",
      excerpt: "Tips and tricks for content creators who want to use Twitter videos in their projects.",
      content: `
        <h2>Content Creation with Twitter Videos</h2>
        <p>Twitter videos can be a valuable resource for content creators across various platforms. Here's how to use them effectively and ethically.</p>
        
        <h2>Finding Quality Content</h2>
        <p>Look for videos that are:</p>
        <ul>
          <li>High quality and well-produced</li>
          <li>Relevant to your audience</li>
          <li>From reputable sources</li>
          <li>Properly attributed</li>
        </ul>
        
        <h2>Legal and Ethical Considerations</h2>
        <h3>Copyright and Fair Use</h3>
        <p>Always respect copyright laws and fair use guidelines. Consider reaching out to content creators for permission when using their work.</p>
        
        <h3>Attribution</h3>
        <p>When using Twitter videos in your content, always credit the original creator. Include their username and a link to the original tweet when possible.</p>
        
        <h2>Content Creation Tips</h2>
        <h3>Video Editing</h3>
        <p>Use professional editing software to enhance downloaded videos. Add your own commentary, graphics, or effects to make the content your own.</p>
        
        <h3>Cross-Platform Sharing</h3>
        <p>Adapt Twitter videos for different platforms by adjusting aspect ratios, adding captions, and optimizing for each platform's requirements.</p>
        
        <h2>Building Relationships</h2>
        <p>Engage with the original creators whose content you use. This can lead to collaborations and mutually beneficial relationships.</p>
        
        <h2>Conclusion</h2>
        <p>Twitter videos can enhance your content creation when used responsibly and ethically. Always prioritize respect for original creators and their work.</p>
      `,
      date: "2024-01-05",
      category: "Tips",
      readTime: "7 min read",
      author: "TwitterXDownload Team"
    }
  };

  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="page-container">
        <div className="section text-center">
          <h1 className="text-4xl font-bold mb-4">{t('Blog Post Not Found')}</h1>
          <p className="text-lg text-muted-foreground mb-8">
            {t('The blog post you are looking for does not exist.')}
          </p>
          <Button as={Link} href="/blog" color="primary">
            {t('Back to Blog')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="section">
        <div className="mb-6">
          <Button 
            as={Link} 
            href="/blog" 
            variant="light" 
            startContent={<ArrowLeft size={16} />}
            className="mb-4"
          >
            {t('Back to Blog')}
          </Button>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardBody className="p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Chip size="sm" color="primary" variant="flat">
                  {post.category}
                </Chip>
                <span className="text-sm text-muted-foreground">
                  {post.readTime}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span>{t('By')} {post.author}</span>
                <span>•</span>
                <span>{new Date(post.date).toLocaleDateString(locale, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8">
                {post.excerpt}
              </p>
            </div>

            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t">
              <div className="flex justify-between items-center">
                <Button 
                  as={Link} 
                  href="/blog" 
                  variant="light"
                  startContent={<ArrowLeft size={16} />}
                >
                  {t('Back to Blog')}
                </Button>
                
                <div className="flex gap-2">
                  <Button 
                    as={Link} 
                    href="/downloader" 
                    color="primary"
                  >
                    {t('Try Our Downloader')}
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
} 