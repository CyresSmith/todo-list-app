import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addTask = createAction('tasks/addTask', text => {
  return {
    payload: {
      text,
      id: nanoid(),
      complited: false,
    },
  };
});

export const deleteTask = createAction('tasks/deleteTask');

export const toggleComplited = createAction('tasks/toggleComplited');

export const setStatusFilter = createAction('filters/setStatusFilter');
