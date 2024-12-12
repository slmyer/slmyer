import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">抱歉，页面未找到。</p>
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800"
      >
        返回首页
      </Link>
    </div>
  );
}
