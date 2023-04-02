import { atom, selector } from 'recoil';

interface TodoItem {
  id: number;
  text: string;
  isComplete: boolean;
}
const todoListState = atom<TodoItem[]>({
  key: 'todoListState',
  default: [],
});

const todoListFilterState = atom<string>({
  key: 'todoListFilterState',
  default: 'Show All',
});

const filteredTodoListState = selector<TodoItem[]>({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

interface TodoListStats {
  totalNum: number;
  totalCompletedNum: number;
  totalUncompletedNum: number;
  percentCompleted: number;
  allText: string;
}
const todoListStatsState = selector<TodoListStats>({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    let allText = '';
    todoList
      .filter((item) => !item.isComplete)
      .map((item) => (allText = allText + ' ' + item.text));
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
      allText,
    };
  },
});

export { todoListState, todoListFilterState, filteredTodoListState, todoListStatsState };
