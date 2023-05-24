<template>
    <div class="rounded-md bg-white shadow-md py-3 px-8 grid align-middle cursor-pointer relative">
        <div class="flex justify-between" @click="toggleComplete()">
            <template v-if="todo.completed">
                <TickSolid class="text-green-600" />
            </template>
            <template v-else>
                <TickOutlined />
            </template>

            <h3>{{ todo.title }}</h3>
        </div>

        <span @click="removeTodo()" class="absolute bottom-0 right-0 transform translate-y-full bg-red-100 text-red-800 shadow-sm text-xs mr-2 px-2.5 py-0.5 rounded-b-md rounded-t-none dark:bg-red-200 dark:text-red-900">Remove</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Todo } from '~/store/todo'
import { PropType } from 'vue'
import TickSolid from '../icons/TickSolid.vue';
import TickOutlined from '../icons/TickOutlined.vue';
import { useTodoStore } from '~/store/todo'

export default defineComponent({
    props: {
        todo: {
            type: Object as PropType<Todo>,
            required: true
        }
    },
    setup(props) {
        const todoStore = useTodoStore()
        const toggleComplete = () => {
            todoStore.update(props.todo.id, {completed: !props.todo.completed})
        }
        const removeTodo = () => {
            todoStore.remove(props.todo.id)
        }
        return {
            toggleComplete,
            removeTodo
        }
    },
    components: { TickSolid, TickOutlined }
})
</script>