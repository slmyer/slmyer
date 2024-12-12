import type { Metadata } from "next";
import { Geist, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Icon from "@/components/Icon";

const geist = Geist({
  subsets: ["latin"], // 指定加载拉丁字符集
  weight: ["400", "700"], // 指定字体粗细
  variable: "--font-geist",
});

const open_sans = Open_Sans({
  subsets: ["latin"], // 指定加载拉丁字符集
  weight: ["400", "700"], // 指定字体粗细
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Slmyer Blog",
  description: "A minimalist personal blog with a touch of elegance",
  icons: "/slmyer.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh"
      className={`${geist.className} ${open_sans.variable} ${geist.variable}`}
    >
      <body className={` bg-gray-50 dark:bg-gray-900`}>
        <div className="fixed inset-0 bg-grid-gray-900/[0.04] -z-10 dark:bg-grid-gray-100/[0.03]" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <header className="py-8">
            <nav className="flex items-center justify-between">
              <Link
                href="/"
                className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                <div className="flex items-center">
                  <Icon width={20} height={20} className="mr-1"></Icon>
                  Slmyer
                </div>
              </Link>
              <div className="flex gap-6">
                <Link
                  href="/blog"
                  className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  博客
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  关于
                </Link>
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="py-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Slmyer. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
