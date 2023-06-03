"use client";
import React, { use } from "react";
import { useFormik } from "formik";
import { IFormValues } from "./type/ITaskCreate";
import { formValidationSchema } from "@/schemas";
import Swal from "sweetalert2";

function TaskCreateForm() {
  const formInitialValues: IFormValues = {
    taskTitle: "",
    timeRequired: "",
  };

  const submitFormData = async () => {
    if (!values) {
      return;
    }
    const response = await fetch("api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (!response.ok) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong",
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Done!",
      text: "Task has been submitted",
    });
  };

  const { handleSubmit, values, handleBlur, handleChange, errors, touched } =
    useFormik({
      initialValues: formInitialValues,
      onSubmit: submitFormData,
      validationSchema: formValidationSchema,
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row gap-16 my-14">
        <div className="w-full max-w-xs">
          <label className="label">
            <span className="label-text">Task Title</span>
          </label>
          <input
            type="text"
            id="taskTitle"
            placeholder="Type here"
            className={
              errors.taskTitle && touched.taskTitle
                ? "input input-bordered input-secondary w-full max-w-full"
                : "input input-bordered w-full max-w-full"
            }
            value={values.taskTitle}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.taskTitle && touched.taskTitle && (
            <p className="text-red-500">{errors.taskTitle}</p>
          )}
        </div>

        <div className="w-full max-w-xs">
          <label className="label">
            <span className="label-text">Time Required (in Hrs)</span>
          </label>
          <input
            type="number"
            id="timeRequired"
            placeholder="Type here"
            className={
              errors.timeRequired && touched.timeRequired
                ? "input input-bordered input-secondary w-full max-w-full"
                : "input input-bordered w-full max-w-full"
            }
            value={values.timeRequired}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.timeRequired && touched.timeRequired && (
            <p className="text-red-500">{errors.timeRequired}</p>
          )}
        </div>

        <div className="w-full max-w-xs self-end">
          <button
            type="submit"
            disabled={errors.timeRequired || errors.taskTitle ? true : false}
            className="btn btn-primary w-full max-w-xs"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskCreateForm;
