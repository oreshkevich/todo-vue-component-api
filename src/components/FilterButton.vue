<template>
  <button
    :className="
      $store.state.filter === value
        ? 'filter-btn filter-btn_is_active'
        : 'filter-btn'
    "
    @click="handleChangeFilter"
  >
    <slot></slot>
  </button>
</template>

<script>
import {defineComponent} from 'vue';
import {useStore} from 'vuex';

export default defineComponent({
  name: 'FilterButton',
  props: {
    value: Number,
  },
  setup({value}) {
    const store = useStore();

    const handleChangeFilter = () => {
      store.dispatch('setFilter', value);
    };

    return {
      handleChangeFilter,
    };
  },
});
</script>

<style lang="scss">
.filter-btn {
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 5px;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: var(--color-btn);
  }

  &_is_active {
    border-color: var(--color-btn);
  }
}
</style>
