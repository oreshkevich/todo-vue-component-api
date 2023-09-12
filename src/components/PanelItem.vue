<template>
  <div class="panel">
    <div>{{ `${getNumberActive(todos)} items left` }}</div>
    <div class="panel__filter">
      <FilterButton :value="0">All</FilterButton>

      <FilterButton :value="1">Active</FilterButton>

      <FilterButton :value="2">Completed</FilterButton>
    </div>

    <button class="panel__btn" @click="handleClearCompleted">
      Clear completed
    </button>
  </div>
</template>

<script lang="ts">
import FilterButton from '@/components/FilterButton.vue';
import {computed, defineComponent} from 'vue';
import {useStore} from 'vuex';
import {Todo} from '@/types';

export default defineComponent({
  name: 'PanelItem',
  components: {
    FilterButton,
  },
  setup() {
    const store = useStore();
    const todos = computed(() => store.getters.todos);
    const getNumberActive = (todos: Todo[]) => {
      return todos.filter((item) => item.isActive === true).length;
    };

    const handleClearCompleted = () => {
      const newTodos = todos.value.filter(
        (item: Todo) => item.isActive === true
      );
      store.dispatch('setTodos', newTodos);
    };
    return {
      todos,
      getNumberActive,
      handleClearCompleted,
    };
  },
});
</script>

<style lang="scss">
.panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 1rem;
  color: #757575;
  font-weight: 300;

  @media (max-width: 541px) {
    display: block;

    &::after {
      content: '';
      clear: both;
      display: block;
    }
  }

  &__filter {
    display: flex;

    @media (max-width: 541px) {
      justify-content: center;
      margin: 20px 0;
    }
  }

  &__btn {
    background-color: transparent;
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    padding: 0;
    cursor: pointer;
    transition: 0.3s;

    @media (max-width: 541px) {
      float: right;
    }

    &:hover {
      color: var(--color-btn);
    }
  }
}
</style>
