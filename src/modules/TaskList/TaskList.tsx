"use client";
import React, { useEffect, useState } from "react";
import { ITaskList } from "../../common/types/ITaskList";
import Swal from "sweetalert2";
interface Props {
  tasks: ITaskList[];
  handleDelete: Function;
}

function TaskList({ tasks, handleDelete }: Props) {
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
    if (!id) {
      return;
    }
    try {
      const response = await fetch(`/api/task/delete?fileName=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        handleDelete(id);
        Swal.fire("Deleted!", "Task has been deleted.", "success");
      } else {
        const errorData = await response.json();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Delete request is failed",
        });
      }
    } catch (error) {
      console.log("An error occurred while deleting the file:", error);
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
        handleDeleteFile(id);
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
