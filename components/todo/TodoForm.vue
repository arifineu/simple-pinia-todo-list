<template>
    <div>
        <form @submit.prevent="addTodo()">
            <div class="shadow-sm">
                <div>
                    <input v-model="todoTitle" type="text" autocomplete="text" required class="relative block w-full appearance-none rounded-t-md rounded-b-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter todo">
                </div>
            </div>
            <div>
                <button type="submit"
                        class="group relative flex w-full justify-center rounded-b-md rounded-t-none border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Create TODO
                </button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTodoStore } from '@/store/todo'

export default defineComponent({
    setup() {
        const todoStore = useTodoStore()
        const todoTitle = ref('')

        const addTodo = () => {
            if (!todoTitle.value) {
                return alert('Please  enter the title')
            }

            todoStore.add({
                title: todoTitle.value
            })

            todoTitle.value = ''
        }

        return {
            addTodo,
            todoTitle
        }
    },
})
</script>