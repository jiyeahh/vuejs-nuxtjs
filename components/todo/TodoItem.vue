<template>
  <v-layout class="mb-2 d-flex">
    <v-list-item>
      <input type="checkbox" :checked="todo.checked" @change="toggleCheckbox" />
      <v-spacer />
      <span
        class="ml-3 flex-grow-1"
        :class="{ 'text-muted': todo.checked }"
        :style="[todo.checked && 'text-decoration: line-through']"
      >
        {{ todo.text }}
      </span>
      <v-list-item-action>
        <v-btn small color="error" @click="CleckDelete(todo.id)">
          Delete
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleCheckbox(e) {
      this.$store.dispatch('todo/toggleTodo', {
        id: this.todo.id,
        checked: e.target.checked,
      })
    },
    ...mapActions({ CleckDelete: 'todo/deleteTodo' }),
    /* CleckDelete() {
      // this.$store.commit('todo/deleteTodo', this.todo.id)
      this.$store.dispatch('todo/deleteTodo', this.todo.id)
    }, */
  },
}
</script>

<style></style>
