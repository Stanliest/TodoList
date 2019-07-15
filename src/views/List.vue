<template>
  <div>
    <InputBox 
      v-model="newTodoText"
			placeholder="New todo item"
			@keydown.enter="addTodo"
    />
    
    <ul v-if="todos.length">
      <ListItem
        v-for="todo in todos"
        :key="todo.id"
				:todo="todo"
        @remove="removeTodo"
      />
    </ul>
  </div>
</template>

<script>
import InputBox from "../components/InputBox.vue";
import ListItem from "../components/ListItem.vue";

let nextTodoId = 1;

export default {
  name: "list",
  components: { InputBox, ListItem },
  data() {
    return {
      newTodoText: "",
      todos: []
    };
  },
  methods: {
    addTodo() {
      const trimmed = this.newTodoText.trim();
      if (trimmed) {
        this.todos.push({
          id: nextTodoId++,
          text: trimmed
        });
        this.newTodoText = "";
      }
    },
    removeTodo(idToRemove) {
      this.todos = this.todos.filter(todo => {
				return todo.id !== idToRemove
			})
    }
  }
};
</script>

