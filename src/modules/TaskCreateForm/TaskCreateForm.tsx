import React from "react";

function TaskCreateForm() {
  return (
    <div className="flex flex-row gap-16 my-14">
      <div className="w-full max-w-xs">
        <label className="label">
          <span className="label-text">Task Title</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <div className="w-full max-w-xs">
        <label className="label">
          <span className="label-text">Time Required (in Hrs)</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <div className="w-full max-w-xs">
        <button className="btn w-full max-w-xs">Add</button>
      </div>
    </div>
  );
}

export default TaskCreateForm;
