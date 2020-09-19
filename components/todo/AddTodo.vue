<template>
  <div>
    <v-row class="my-1" align="center">
      <strong class="mx-4 info--text text--darken-2">
        Remaining: {{ numberOfRemainingTodo }}
      </strong>

      <v-divider vertical></v-divider>

      <strong class="mx-4 success--text text--darken-2">
        Completed: {{ numberOfCompletedTodo }}
      </strong>

      <v-spacer></v-spacer>

      <v-progress-circular :value="progress" class="mr-2"></v-progress-circular>
    </v-row>
    <br />
    <v-text-field
      v-model="todoText"
      type="text"
      solo
      label="Type todo List"
      @keyup.enter="addTodo"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoText: '',
    }
  },
  computed: {
    todos() {
      return this.$store.state.todo.todos
    },
    numberOfCompletedTodo() {
      return this.$store.getters['todo/numberOfCompletedTodo']
    },
    numberOfRemainingTodo() {
      return this.todos.length - this.numberOfCompletedTodo
    },
    progress() {
      return (this.numberOfCompletedTodo / this.todos.length) * 100
    },
  },
  methods: {
    addTodo(e) {
      this.$store.dispatch('todo/addTodo', e.target.value)
      // this.$store.commit('todo/ADD_TODO', e.target.value)
      this.todoText = ''
    },
  },
}
</script>

<style></style>
