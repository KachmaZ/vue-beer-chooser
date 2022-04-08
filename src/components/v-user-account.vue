<template>
  <div class="user">
    <Loader v-if="loading" />
    <template v-else>
      <h2>{{ user.username }}</h2>
      <img class="user-avatar" :src="user.avatar" alt="avatar" />
      <p>{{ user.first_name }} {{ user.last_name }}</p>
      <p>{{ userAge }}</p>
      <!-- <p>{{ user.employment.title }}</p> -->
    </template>
  </div>
</template>

<script>
import Loader from "@/components/v-loader.vue";

import { mapGetters } from "vuex";

export default {
  props: {
    user: Object,
  },

  computed: {
    ...mapGetters(["loading"]),
    userAge: function () {
      return (
        ((new Date().getTime() - new Date(this.user.date_of_birth)) /
          (24 * 3600 * 365.25 * 1000)) |
        0
      );
    },
  },

  components: {
    Loader,
  },
};
</script>

<style lang="scss" scoped>
.user {
  width: 170px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .loader {
    justify-self: center;
    align-self: center;
  }
}
.user-avatar {
  width: 150px;
  height: 150px;

  border: 10px solid rgb(107, 43, 1);
  border-radius: 20px;
}
</style>