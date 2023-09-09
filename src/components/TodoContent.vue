<template>
  <span className="todo__radio" @click="handleChangeActive">
    <span v-if="!todo.isActive" className="todo__check-mark">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
          ></path>
        </g>
      </svg>
    </span>
  </span>
  <span
    :className="
      todo.isActive ? 'todo__title' : 'todo__title todo__title_is_not-active'
    "
  >
    {{ todo.title }}
  </span>
</template>

<script lang="ts">
import {useStore} from 'vuex';
import {Todo} from '@/types';
import {defineComponent, PropType} from 'vue';

export default defineComponent({
  name: 'TodoContent',
  props: {
    todo: Object as PropType<Todo>,
  },
  setup({todo}) {
    const store = useStore();

    const handleChangeActive = () => {
      store.dispatch('changeActive', todo!.id);
    };
    return {
      handleChangeActive,
    };
  },
});
</script>

<style lang="scss">
.todo {
  position: relative;
  cursor: grab;
  padding: 20px 10px;
  background-color: #ffffff;
  border-top: var(--border);
  display: flex;
  align-items: center;

  &__radio {
    flex: 0 0 30px;
    display: block;
    height: 30px;
    border: var(--border);
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      border-color: #049004;
    }
  }

  &__check-mark {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: #049004;

    svg {
      display: block;
    }
  }

  &__title {
    font-size: 1.5rem;
    line-height: 1.4;

    @media (max-width: 541px) {
      font-size: 1.2rem;
    }

    &_is_not-active {
      color: var(--color-completed);
      text-decoration: line-through;
    }
  }
}
</style>
