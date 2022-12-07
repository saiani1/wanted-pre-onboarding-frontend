import { basicRequest } from './base';

const SERVICE = '/todos';

export const createTodo = async (todo, token) => {
  const res = await basicRequest.post(
    SERVICE,
    { todo },
    {
      headers: {
        Authorization: token,
      },
    },
  );
  return res;
};

export const getTodos = async token => {
  const res = await basicRequest.get(SERVICE, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

export const updateTodo = async (id, todo, isCompleted, token) => {
  const res = await basicRequest.put(
    `${SERVICE}/${id}`,
    { todo, isCompleted },
    {
      headers: {
        Authorization: token,
      },
    },
  );
  return res;
};

export const deleteTodo = async (id, token) => {
  const res = await basicRequest.delete(`${SERVICE}/${id}`, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};
