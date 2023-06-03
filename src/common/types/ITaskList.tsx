export interface ITaskList {
  id: number;
  data: {
    taskTitle: string;
    timeRequired: number;
    createdAt?: number;
  };
}
