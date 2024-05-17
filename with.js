const todos = [
  {
    id: 1,
    todo: "Buy food",
    completed: false,
  },
  {
    id: 2,
    todo: "Watch movie",
    completed: true,
  },
];

// let do some mutate - for understanding ~
theTodo = todos.find((todo) => todo.id === 1);
theTodoIndex = todos.findIndex((todo) => todo.id === 1);

// const newTheTodo = theTodo.with(theTodoIndex, { ...theTodo, completed: true });
const newTodos = todos.with(theTodoIndex, {
  ...todos.at(theTodoIndex),
  completed: true,
});
console.log(newTodos.at(0), todos.at(0)); // this is immutable approach because newTodos.at(0) didn't overwrite todos.at(0)'s completed value, both values are different ~
