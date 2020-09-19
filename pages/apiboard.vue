<template>
  <v-flex>
    <div id="tabel">
      <h1>Board</h1>
      <BoardList />
    </div>

    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" nuxt to="/todo">Continue</v-btn>
    </v-card-actions>
  </v-flex>
</template>

<script>
export default {
  components: {
    BoardList: () => import('~/components/board/BoardList'),
  },
}
</script>

<style></style>
