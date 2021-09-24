export const UpdateCompletedTask = (task) => {
  return {
    type: "UPDATE COMPLETED TASK",
    payload: task,
  };
};
