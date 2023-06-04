"use client";
import { ITaskList } from "@/common/types/ITaskList";
import React, { useEffect, useState } from "react";
interface Props {
  tasks: ITaskList[];
}

function TaskDashboard({ tasks }: Props) {
  const totalTask = tasks.length;
  const totalTimeRequired = tasks.reduce(
    (total, item) => total + item.data.timeRequired,
    0
  );
  const totalDays = (totalTimeRequired / 8).toFixed(2);

  return (
    <div className="flex flex-row gap-16">
      <div className=" border border-black bg-white rounded-lg shadow-md p-4 w-64">
        <div className="text-center">
          <p className="text-xl text-base">Total Task</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-5xl">{totalTask}</p>
        </div>
      </div>
      <div className="border border-black bg-white rounded-lg shadow-md p-4 w-64">
        <div className="text-center">
          <p className="text-xl text-base">Total Days</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-5xl">{totalDays}</p>
        </div>
      </div>
      <div className="border border-black bg-white rounded-lg shadow-md p-4 w-64">
        <div className="text-center">
          <p className="text-xl text-base">Total Hours</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-5xl">{totalTimeRequired}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskDashboard;
