<template>
  <form className="input" @submit.prevent="onSubmit">
    <span class="input__icon">
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
            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          ></path>
        </g>
      </svg>
    </span>
    <input
      className="input__input"
      type="text"
      v-model="body"
      placeholder="What needs to be done?"
    />
  </form>
</template>

<script>
import {ref, defineComponent} from 'vue';

export default defineComponent({
  emits: ['onSubmit'],

  setup(_, {emit}) {
    const body = ref('');

    const onSubmit = () => {
      const todoText = body.value.trim();

      if (todoText === '') {
        body.value = '';
        return;
      }

      const newTodo = {
        id: Date.now(),
        title: todoText,
        isActive: true,
      };

      emit('onSubmit', newTodo);
      body.value = '';
    };

    return {body, onSubmit};
  },
});
</script>
<style lang="scss">
.input {
  display: flex;
  align-items: center;
  padding-left: 10px;

  &__icon {
    width: 30px;
    height: 30px;
    font-size: 2rem;
    color: var(--color-completed);
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: block;
    }
  }

  &__input {
    display: block;
    width: 100%;
    font-family: inherit;
    font-size: 1.5rem;
    padding: 20px 10px;
    border: none;
    outline: none;

    @media (max-width: 541px) {
      font-size: 1.2rem;
    }

    &::-webkit-input-placeholder {
      color: var(--color-completed);
      font-style: italic;
    }
    &::-moz-placeholder {
      color: var(--color-completed);
      font-style: italic;
    } /* Firefox 19+ */
    &:-moz-placeholder {
      color: var(--color-completed);
      font-style: italic;
    } /* Firefox 18- */
    &:-ms-input-placeholder {
      color: var(--color-completed);
      font-style: italic;
    }
  }
}
</style>
