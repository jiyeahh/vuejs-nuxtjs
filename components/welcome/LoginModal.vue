<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon large v-bind="attrs" v-on="on" @click.stop="dialog = true">
          <v-icon>mdi-account-question</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          This is admin page!
        </v-card-title>

        <v-card-text style="padding-top: 20px">
          미리 가입된 사용자만 들어갈 수 있습니다. 이 페이지는
          josnplaceholder에서 제공된 가상의 user들의 정보로 로그인할 수
          있습니다. 가상의 users의 email과 username을 확인해주세요!
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
}
</script>
