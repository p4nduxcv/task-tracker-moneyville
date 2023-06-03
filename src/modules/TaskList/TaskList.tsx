"use client";
import React, { useEffect, useState } from "react";
import { Task } from "./type/ITaskList";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`/api/damage`).then((res) =>
      res.json().then((data) => setTasks(data.data))
    );
  }, []);

  const getTableRow = (item: Task) => {
    const {
      id,
      data: { taskTitle, timeRequired },
    } = item;
    return (
      <tr key={id} className="text-gray-700">
        <td className="px-4 py-3 border">
          <div className="flex items-center text-md">
            <p>{taskTitle}</p>
          </div>
        </td>
        <td className="px-4 py-3 border text-md">{timeRequired}</td>
        <td className="px-4 py-3 border text-md">
          <a href="" className="text-red-500 underline">
            Delete
          </a>
        </td>
      </tr>
    );
  };

  return (
    <>
      <section className="container mx-auto">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 border-b border-gray-600">
                  <th className="px-4 py-3">Task Title</th>
                  <th className="px-4 py-3">Time Required (in Hrs)</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {tasks.map((item, index) => getTableRow(item))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default TaskList;
