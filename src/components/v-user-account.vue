<template>
  <div class="user">
    <h2>{{ user.username }}</h2>
    <img class="user-avatar" :src="user.avatar" alt="avatar" />
    <p>{{ user.first_name }} {{ user.last_name }}</p>
    <p>{{ userAge }}</p>
    <p>{{user.employment.title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },

  computed: {
    userAge: function () {
      return (
        ((new Date().getTime() - new Date(this.user.date_of_birth)) /
          (24 * 3600 * 365.25 * 1000)) |
        0
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.user-avatar {
  width: 150px;
  height: 150px;

  border: 10px solid rgb(107, 43, 1);
  border-radius: 20px;
}
</style>