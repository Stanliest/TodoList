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
import fetch from "node-fetch";

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
  created: function() {
    this.fetchTodo();
  },
  methods: {
    async fetchTodo() {
      await fetch("http://localhost:4000/api/todolist").then(res => {
        res.json().then(json => {
          this.todos = json;
          // console.log(JSON.stringify(json));
        });
      });
    },

    async addTodo() {
      const trimmed = this.newTodoText.trim();
      if (trimmed) {
        await fetch("http://localhost:4000/api/todolist/post", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name: trimmed })
        }).then(response => {
          console.log(response);
        });
        this.todos.push({
          id: nextTodoId++,
          text: trimmed
        });
        this.newTodoText = "";
        this.fetchTodo();
      }
    },

    async removeTodo(id) {
      await fetch(`http://localhost:4000/api/todolist/${id}/delete`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(response => {
        console.log(response);
        this.fetchTodo();
      });
    }
  }
};
</script>

