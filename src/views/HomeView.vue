<template>
  <div class="home">
    <TodoItem />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TodoItem from '@/components/TodoItem.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    TodoItem,
  },
});
</script>

