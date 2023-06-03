import * as yup from "yup";

export const formValidationSchema = yup.object().shape({
    taskTitle: yup.string()
        .required('Title is required')
        .max(128, 'Title shouldnt exceed 128 chars'),
    timeRequired: yup.number()
        .required('Time is required')
        .min(0, 'Time should be at least 0')
        .max(24, 'Time should not exceed 24')
        .typeError('Time must be a number'),
});