import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const recentPosts = [
    {
      title: "使用Next.js构建极简博客",
      excerpt:
        "本指南介绍如何使用Next.js和现代Web技术创建一个简洁的极简主义博客。",
      date: "2024-01-10",
      slug: "building-minimalist-blog",
      category: "Web开发",
      tags: ["Next.js", "React", "设计"],
    },
    {
      title: "设计中简约的力量",
      excerpt: "探索极简主义设计原则如何提升用户体验和内容可读性。",
      date: "2024-01-05",
      slug: "power-of-simplicity",
      category: "设计",
      tags: ["用户体验", "极简主义", "网页设计"],
    },
    {
      title: "现代Web开发实践",
      excerpt: "概述当前Web开发的最佳实践及其实施方法。",
      date: "2024-01-01",
      slug: "modern-web-development",
      category: "Web开发",
      tags: ["最佳实践", "前端", "后端"],
    },
  ];

  return (
    <div className="space-y-12 py-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold leading-tight bg-clip-text  bg-gradient-to-r from-primary to-purple-600">
          欢迎来到我的网络角落。
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          我写关于Web开发、设计和技术的文章。 这里是我分享思想和经验的空间。
        </p>
        <div>
          <button className="flex flex-row items-center">
            浏览所有文章
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">最新文章</h2>
        <div className="space-y-8">
          {recentPosts.map((post) => (
            <article
              key={post.slug}
              className="group space-y-3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Link href={`/blog/${post.slug}`} className="block space-y-2">
                <div className="flex items-center space-x-2 mb-2">
                  {/* <Badge variant="secondary">{post.category}</Badge>
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge> */}
                  {/* ))} */}
                </div>
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("zh-CN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
