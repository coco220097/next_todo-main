// TodoService.ts

import { Todo } from "../models/Todo";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch(`${API_URL}/api/todo/get`);
  if (!response.ok) {
    throw new Error('APIからデータを取得できませんでした。');
  }
  return response.json();
};

export const postTodo = async (todo: Todo): Promise<void> => {
  const response = await fetch(`${API_URL}/api/todo/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    throw new Error('APIにデータを送信できませんでした。');
  }
};


// import { Todo } from "../models/Todo";

// const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

// export const getTodos = async () => {
//     //TODO: API URL設定
//     const url = API_URL + "";
//     try {
//         const response = await fetch(url);
//         if (response.ok) {
//             return await response.json();
//         }
//     } catch (error) {
//         console.error(error)
//     }
// }

// export const postTodos = async (todos: Todo[]) => {
//     if (!todos) return;
//     //TODO: API URL設定
//     const url = API_URL + "";
//     const data = JSON.stringify(todos);
//     //TODO: APIで保存し、データを返す
// }
