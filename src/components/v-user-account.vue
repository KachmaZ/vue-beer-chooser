// User info component
<template>
  <div class="user">
    <Loader v-if="userLoading" />
    <template v-else>
      <img
        class="user-avatar"
        :src="user.avatar"
        @error="setAltImage"
        alt="Avatar"
      />
      <div class="user-info">
        <template v-if="!mobile">
          <h2 class="user-name">{{ user.username }}</h2>
          <div class="user-info-wrapper">
            <span class="user-fullname">
              {{ user.first_name }} {{ user.last_name }}
            </span>
            <span class="user-age">{{ userAge }} years</span>
            <span class="user-employment" v-if="user.employment">
              {{ user.employment.title }}
            </span>
          </div>
        </template>
        <template v-else>
          <span class="user-name">{{ user.username }}</span>
          <span class="user-fullname"
            >{{ user.first_name }} {{ user.last_name }}, {{ userAge }}</span
          >
          <span class="user-employment" v-if="user.employment">{{
            user.employment.title
          }}</span>
        </template>
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

  data() {
    return {
      mobile: true,
      windowWidth: null,
    };
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

  methods: {
    setAltImage(e) {
      e.target.src = require("../assets/broken-robot.png");
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }

      this.mobile = false;
      return;
    },
  },

  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
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

  margin-right: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border: 2px solid #daa700;
  border-radius: 20px;

  & .loader {
    margin: auto;
  }

  & .user-avatar {
    width: 200px;
    height: 200px;

    background-color: #fff;

    border: 10px solid #6b2b01;
    border-radius: 20px;
  }

  & .user-info {
    width: 100%;
    height: 200px;

    padding: 10px;

    display: flex;
    flex-direction: column;

    text-align: left;

    & .user-info-wrapper {
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-around;

      font-size: 18px;
    }
  }
}

@media screen and (max-width: 750px) {
  .user {
    width: 300px;
    height: 50px;

    position: absolute;
    top: 0;
    right: 0;
    margin-right: auto;
    z-index: 5;

    flex-direction: row;

    & .loader {
      display: none;
    }

    & .user-avatar {
      width: 50px;
      height: 50px;

      margin-right: 20px;

      border: 2px solid #6b2b01;
      border-radius: 50%;
    }

    & .user-info {
      height: 100%;

      padding: 0;

      color: #fff;
      text-shadow: 2px 2px 0 #292929, 2px 2px 2px #ce593700;

      & .user-name {
        height: 20px;
        font-size: 18px;
      }

      & .user-fullname {
        font-size: 14px;
      }

      & .user-employment {
        color: #ffffffb4;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}
</style>