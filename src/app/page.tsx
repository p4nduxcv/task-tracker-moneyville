import Head from "next/head";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Task Management App</title>
      </Head>
      <main className="max-w-4xl mx-auto mt-2">
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold my-3 text-gray-50">
            Task Management App
          </h1>
        </div>
      </main>
    </div>
  );
}
