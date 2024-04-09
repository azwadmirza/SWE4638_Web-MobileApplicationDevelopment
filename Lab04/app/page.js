import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Quiz Application</h1>
      <p className="text-lg">Welcome to the Quiz Application</p>
      <div className="flex gap-4">
        <Link href="/create" className="bg-black text-white py-2 px-4 rounded">Create Quiz</Link>
        <Link href="/take" className="bg-black text-white py-2 px-4 rounded">Take Quiz</Link>
      </div>
    </main>
  );
}
