<template>
  <main class="app">
    <h1 class="app__title">todos</h1>
    <div class="board">
      <FormItem @onSubmit="handleSubmit" />
      <ul class="todos">
        <li v-for="(todo, index) in filterTodo" :key="todo.id">
          <TodoContent
            @onDragStart="onDragStart"
            @onDragOver="onDragOver"
            :todo="todo"
            :index="index"
          />
        </li>
      </ul>

      <PanelItem />
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import FormItem from '@/components/FormItem.vue';
import TodoContent from '@/components/TodoContent.vue';
import PanelItem from '@/components/PanelItem.vue';
import {mapGetters, mapActions} from 'vuex';
import {Todo, DragItem} from '@/types';

export default defineComponent({
  name: 'TodoItem',
  components: {
    FormItem,
    PanelItem,
    TodoContent,
  },
  props: {
    msg: String,
  },

  data() {
    return {
      filterTodo: [] as Todo[],
      draggedItemIndex: null as number | null,
      draggedItem: null as Todo | null,
    };
  },
  computed: {
    ...mapGetters(['filter', 'todos']),
  },
  methods: {
    ...mapActions(['addTodo']),
    handleSubmit(item: Todo) {
      this.addTodo(item);
      this.filterTodo = this.todos;
    },
    onDragStart({e, index}: DragItem) {
      this.draggedItemIndex = index;
      if (this.draggedItemIndex !== null) {
        this.draggedItem = this.filterTodo[this.draggedItemIndex];
      }
      const target = (e.target as HTMLElement).closest('.settings-item');
      e.dataTransfer!.effectAllowed = 'move';
      e.dataTransfer!.setData('text/plain', target as unknown as string);
    },
    onDragOver(index: number) {
      if (this.draggedItem === this.filterTodo[index]) {
        return;
      }

      this.filterTodo = this.filterTodo.filter(
        (item: Todo): boolean => item !== this.draggedItem
      );
      this.filterTodo.splice(index, 0, this.draggedItem as Todo);
    },
  },
  mounted() {
    this.filterTodo = this.todos;
  },
  watch: {
    filter(value) {
      if (value === 0) {
        this.filterTodo = this.todos;
      } else if (value === 1) {
        this.filterTodo = this.todos.filter(
          (item: Todo) => item.isActive === true
        );
      } else if (value === 2) {
        this.filterTodo = this.todos.filter(
          (item: Todo) => item.isActive === false
        );
      }
    },
    todos() {
      this.filterTodo = this.todos;
    },
  },
});
</script>

<style lang="scss">
.todos {
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
  border-bottom: var(--border);
  box-shadow: 0 -1px 3px var(--color-shadow);
}

ul {
  position: relative;
  z-index: 1;
}
.board {
  position: relative;
  background-color: #ffffff;
  border: var(--border);
  box-shadow: 0 0 5px var(--color-shadow);

  &::before,
  &::after {
    position: absolute;
    content: '';
    border: var(--border);
    background-color: #f3f3f3;
    box-shadow: 0 0 5px var(--color-shadow);
    z-index: -1;
  }

  &::before {
    bottom: -14px;
    left: 10px;
    width: calc(100% - 20px);
    height: 15px;
  }

  &::after {
    bottom: -7px;
    left: 5px;
    width: calc(100% - 10px);
    height: 8px;
  }
}
</style>

