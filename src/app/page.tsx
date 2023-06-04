"use client";
import { ITaskList } from "@/common/types/ITaskList";
import TaskCreateForm from "@/modules/TaskCreateForm/TaskCreateForm";
import TaskDashboard from "@/modules/TaskDashboard/TaskDashboard";
import TaskList from "@/modules/TaskList/TaskList";
import Head from "next/head";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

export default function Home() {
  const [tasks, setTasks] = useState<ITaskList[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/task`);
        const data = await response.json();
        setTasks(data.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id: number) => {
    const currentTasks = tasks.filter((task) => task.id !== id);
    setTasks(currentTasks);
  };

  const handleAdd = (newTask: ITaskList) => {
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };

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
        <TaskDashboard tasks={tasks} />
        <TaskCreateForm handleAdd={handleAdd} />
        <TaskList tasks={tasks} handleDelete={handleDelete} />
      </main>
    </div>
  );
}
