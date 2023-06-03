import TaskCreateForm from "@/modules/TaskCreateForm/TaskCreateForm";
import TaskDashboard from "@/modules/TaskDashboard/TaskDashboard";
import TaskList from "@/modules/TaskList/TaskList";
import Head from "next/head";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div className="flex">
      <Head>
        <title>Task Management App</title>
      </Head>
      <main className="max-w-4xl mx-auto mt-2">
        <div className="text-left my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold my-3 text-black">
            Task Management App
          </h1>
        </div>
        <TaskDashboard />
        <TaskCreateForm />
        <TaskList />
      </main>
    </div>
  );
}
