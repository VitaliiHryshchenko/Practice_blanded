export const onTaskFormSubmit = event => {
  event.preventDefault();
  const inputValue = event.target.elements.taskName.value.trim();
};
