import React from "react";

function TaskList() {
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="border border-gray-300">
          <h3 className="font-bold p-4">Column 1</h3>
          <p className="border-t border-b border-gray-300 p-4">Data 1</p>
          <p className="border-b border-gray-300 p-4">Data 2</p>
          <p className="border-b border-gray-300 p-4">Data 3</p>
        </div>
        <div className="border border-gray-300">
          <h3 className="font-bold p-4">Column 2</h3>
          <p className="border-t border-b border-gray-300 p-4">Data 4</p>
          <p className="border-b border-gray-300 p-4">Data 5</p>
          <p className="border-b border-gray-300 p-4">Data 6</p>
        </div>
        <div className="border border-gray-300">
          <h3 className="font-bold p-4">Column 3</h3>
          <p className="border-t border-b border-gray-300 p-4">Data 7</p>
          <p className="border-b border-gray-300 p-4">Data 8</p>
          <p className="border-b border-gray-300 p-4">Data 9</p>
        </div>
      </div>
    </>
  );
}

export default TaskList;
