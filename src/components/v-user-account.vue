<template>
  <div class="user">
    <Loader v-if="userLoading" />
    <template v-else>
      <h2 class="user-name">{{ user.username }}</h2>
      <img class="user-avatar" :src="user.avatar" alt="Avatar" />
      <div class="user-info">
        <p>{{ user.first_name }} {{ user.last_name }}</p>
        <p>{{ userAge }} years</p>
        <p v-if="user.employment">{{ user.employment.title }}</p>
      </div>
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
    ...mapGetters(["userLoading"]),
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
  width: 200px;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & .loader {
    width: 80px;
    margin: auto;
  }

  & .user-name {
    width: 100%;
    height: 50px;
  }

  & .user-avatar {
    width: 200px;
    height: 200px;

    border: 10px solid rgb(107, 43, 1);
    border-radius: 20px;
  }

  & .user-info {
    width: 100%;
    height: 150px;
    text-align: left;
  }
}
</style>