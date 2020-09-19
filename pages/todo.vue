<template>
  <v-layout column justify-center>
    <v-flex>
      <v-row>
        <v-col cols="7">
          <div id="main">
            <h1>Todo App</h1>
            <br />
            <AddTodo />
            <hr />
            <TodoList />
          </div>
        </v-col>

        <v-spacer />
        <v-col cols="4">
          <Weather />
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {
    AddTodo: () => import('~/components/todo/AddTodo'),
    TodoList: () => import('~/components/todo/TodoList'),
    Weather: () => import('~/components/todo/Weather'),
  },
  data() {
    return {
      todoText: '',
    }
  },
}
</script>
<style scoped></style>
