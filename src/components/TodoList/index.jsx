import { useRecoilValue } from 'recoil';
import { todoListState } from '../../Atom/TodoListState';
import { TodoItemCreator } from './TodoItemCreator';
import { TodoItem } from './TodoItem';
import { TodoListFilters } from './TodoListFilters';
import { TodoListStats } from './TodoListStats';
import { filteredTodoListState } from '../../Selector/FilteredTodoListState';

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};
