import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '@recoil/todoState';

// utility for creating unique Id
let id = 0;
function getId(): number {
  id += 1;
  return id;
}
interface TodoItemCreatorProps {}
const TodoItemCreator: React.FC<TodoItemCreatorProps> = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button type="button" onClick={addItem}>
        Add
      </button>
    </div>
  );
};

export default TodoItemCreator;
