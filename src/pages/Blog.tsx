import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, TrendingUp, Target, BarChart3 } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "The Ultimate Guide to Performance-Based Promotional Campaigns in 2024",
    excerpt: "Discover the latest strategies and tactics for creating promotional campaigns that drive measurable ROI and sustainable business growth.",
    author: "Sarah Johnson",
    date: "December 15, 2023",
    category: "Strategy",
    readTime: "12 min read",
    link: "https://salescentri.com/resources/case-studies"
  };

  const blogPosts = [
    {
      title: "5 Key Metrics Every B2B Marketer Should Track",
      excerpt: "Learn which performance indicators matter most for promotional campaign success and how to optimize them.",
      author: "Michael Chen",
      date: "December 12, 2023",
      category: "Analytics",
      readTime: "8 min read",
      link: "https://salescentri.com/resources/whitepapers-ebooks"
    },
    {
      title: "ROI Calculator: Measuring Campaign Performance",
      excerpt: "A comprehensive guide to calculating and improving your promotional campaign ROI with practical examples.",
      author: "Lisa Rodriguez",
      date: "December 10, 2023",
      category: "Tools",
      readTime: "6 min read",
      link: "https://salescentri.com/resources/tutorials-webinars"
    },
    {
      title: "Advanced Targeting Strategies for B2B Campaigns",
      excerpt: "Master the art of audience segmentation and targeting to maximize your campaign effectiveness.",
      author: "David Park",
      date: "December 8, 2023",
      category: "Strategy",
      readTime: "10 min read",
      link: "https://salescentri.com/resources/case-studies"
    },
    {
      title: "Conversion Rate Optimization: Best Practices",
      excerpt: "Proven techniques to increase your conversion rates and get more value from your promotional campaigns.",
      author: "Sarah Johnson",
      date: "December 5, 2023",
      category: "Optimization",
      readTime: "9 min read",
      link: "https://salescentri.com/resources/tutorials-webinars"
    },
    {
      title: "A/B Testing Guide for Marketing Campaigns",
      excerpt: "Step-by-step instructions for running effective A/B tests that improve campaign performance.",
      author: "Michael Chen",
      date: "December 3, 2023",
      category: "Testing",
      readTime: "7 min read",
      link: "https://salescentri.com/resources/whitepapers-ebooks"
    },
    {
      title: "The Future of B2B Marketing Automation",
      excerpt: "Explore emerging trends and technologies that will shape the future of promotional campaigns.",
      author: "Lisa Rodriguez",
      date: "November 30, 2023",
      category: "Technology",
      readTime: "11 min read",
      link: "https://salescentri.com/resources/case-studies"
    }
  ];

  const categories = [
    { name: "Strategy", count: 12, icon: <Target className="w-4 h-4" /> },
    { name: "Analytics", count: 8, icon: <BarChart3 className="w-4 h-4" /> },
    { name: "Optimization", count: 15, icon: <TrendingUp className="w-4 h-4" /> },
    { name: "Tools", count: 6, icon: <ArrowRight className="w-4 h-4" /> },
    { name: "Technology", count: 9, icon: <ArrowRight className="w-4 h-4" /> },
    { name: "Testing", count: 7, icon: <ArrowRight className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-4">Blog</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Marketing Insights & Strategy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert insights, proven strategies, and actionable tips to help you create promotional campaigns that drive real results.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
          <Card className="border-border bg-card hover:shadow-card transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                  <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{featuredPost.date}</span>
                  </div>
                </div>
                <Button variant="default" asChild>
                  <a href={featuredPost.link} target="_blank" rel="noopener noreferrer">
                    Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
              <div className="bg-gradient-secondary rounded-lg p-6 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-primary mx-auto mb-4" />
                  <div className="text-sm text-muted-foreground">Featured Article</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-muted cursor-pointer">
                      <div className="flex items-center space-x-2">
                        {category.icon}
                        <span className="text-sm">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="border-border bg-card mt-8">
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
                <CardDescription>
                  Get the latest marketing insights delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="default" className="w-full" asChild>
                  <a href="https://salescentri.com/resources/whitepapers-ebooks" target="_blank" rel="noopener noreferrer">
                    Subscribe to Newsletter
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Posts Grid */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="border-border bg-card hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg hover:text-primary transition-colors">
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                        {post.title}
                      </a>
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={post.link} target="_blank" rel="noopener noreferrer">
                          Read More
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <a href="https://salescentri.com/resources/case-studies" target="_blank" rel="noopener noreferrer">
                  View All Articles
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white mt-20">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Apply These Insights?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your promotional campaigns with our proven strategies and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Book Strategy Session
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;