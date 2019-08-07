<template>
  <li>
    {{ todo.name }}
    <button @click="$emit('remove', todo._id)">
      x
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>
