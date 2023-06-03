import React from "react";

function TaskDashboard() {
  return (
    <div className="flex flex-row gap-16">
      <div className=" border border-black bg-white rounded-lg shadow-md p-4 w-64">
        <div className="text-center">
          <p className="text-xl text-base">Total Task</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-5xl">003</p>
        </div>
      </div>
      <div className="border border-black bg-white rounded-lg shadow-md p-4 w-64">
        <div className="text-center">
          <p className="text-xl text-base">Total Days</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-5xl">003</p>
        </div>
      </div>
      <div className="border border-black bg-white rounded-lg shadow-md p-4 w-64">
        <div className="text-center">
          <p className="text-xl text-base">Total Hours</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-5xl">003</p>
        </div>
      </div>
    </div>
  );
}

export default TaskDashboard;
