"use client";
import React, { useEffect, useState } from "react";
import { ITaskList } from "../../common/types/ITaskList";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  // const router = useRouter();

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

  const setTableRow = (item: ITaskList) => {
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
          <p
            onClick={() => deleteTableRow(id)}
            className="text-red-500 underline cursor-pointer"
          >
            Delete
          </p>
        </td>
      </tr>
    );
  };

  const handleDeleteFile = async (id: number) => {
    try {
      const response = await fetch(`/api/task/delete?fileName=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("File deleted successfully");
        // Perform any additional actions or update the UI as needed
      } else {
        const errorData = await response.json();
        console.log("Error deleting file:", errorData.error);
        // Handle the error or show an error message to the user
      }
    } catch (error) {
      console.log("An error occurred while deleting the file:", error);
      // Handle the error or show an error message to the user
    }
  };

  const deleteTableRow = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        handleDeleteFile(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
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
                {tasks.map((item) => setTableRow(item))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default TaskList;
