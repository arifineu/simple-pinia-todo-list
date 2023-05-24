import { defineStore } from "pinia";

export interface Todo {
    id: number | undefined;
    title: string;
    completed: boolean;
}

export type Todos = Todo[] | undefined[];

export interface TodoAdd {
    title: string;
}

export interface TodoUpdate {
    completed?: boolean;
}

interface TodoState {
    items: Todos;
}

const state = (): TodoState => ({
    items: [
        {
            id: 1,
            title: 'Complete this project',
            completed: true
        }
    ],
});

const getters = {
    getTodoById: (state: TodoState) => {
        // @ts-ignore
        return (id: number): Todo | undefined => state.items.find((item: Todo | undefined) => item?.id === id);
    },
};

export const useTodoStore = defineStore("todoStore", {
    state,
    getters,
    actions: {
        async add(this: TodoState, todo: TodoAdd) {
            // @ts-ignore
            this.items.push({ id: Math.random(), ...todo });
        },
        async remove(this: TodoState, id: number) {
            // @ts-ignore
            this.items = this.items.filter((item) => item?.id !== id);
        },
        async update(this: TodoState, id: number, updatedTodo: TodoUpdate) {
            const items = this.items as Todos;
            const index = items.findIndex((item: Todo | undefined) => item?.id === id);

            if (index !== -1) {
                // @ts-ignore
                items[index] = { ...items[index], ...updatedTodo };
            }
        },
    },
});
