<template>
  <header>
    <nav>
      <div
        class="ham-icon"
        :class="{ active: mobileNav }"
        @click="toggleMobileNav"
        v-show="mobile"
      >
        <svg
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30px"
          height="30px"
        >
          <path
            d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"
          />
        </svg>
      </div>
      <ul v-show="!mobile">
        <li>
          <router-link to="/about" class="link"><span>About</span></router-link>
        </li>
        <li>
          <router-link to="/" class="link"><span>Home</span></router-link>
        </li>
        <li>
          <router-link to="/contacts" class="link">
            <span>Contacts</span>
          </router-link>
        </li>
      </ul>
      <transition>
        <ul class="mobile-nav" v-show="mobileNav">
          <li>
            <router-link to="/about" class="link"
              ><span>About</span></router-link
            >
          </li>
          <li>
            <router-link to="/" class="link"><span>Home</span></router-link>
          </li>
          <li>
            <router-link to="/contacts" class="link">
              <span>Contacts</span>
            </router-link>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobile: true,
      mobileNav: false,
      windowWidth: null,
    };
  },

  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }

      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },

  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 50px;

  position: fixed;
  top: 0;
  z-index: 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-color: #d49c00;

  & nav {
    width: 90%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;

    & .ham-icon {
      height: 30px;
      z-index: 20;

      justify-self: start;

      transition: 250ms ease-in;

      cursor: pointer;

      &.active {
        transform: rotate(180deg);
        transition: 250ms ease-in;

        & svg {
          fill: #d49c00;
          transition: 250ms linear;
        }
      }
    }

    & ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;

      & li {
        height: 100%;
        list-style-type: none;

        & .link {
          width: 150px;
          height: 100%;

          display: flex;
          justify-content: center;
          align-items: center;

          overflow: hidden;
          position: relative;

          color: #fff;
          font-size: 24px;
          text-decoration: none;
          text-shadow: 4px 3px 0 #292929, 2px 2px 2px #ce593700;

          & span {
            z-index: 20;
          }

          &:after {
            background: #fff;
            content: "";
            height: 155px;
            left: -75px;
            opacity: 0.2;
            position: absolute;
            top: -50px;
            transform: rotate(35deg);
            transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
            width: 50px;
            z-index: 10;
          }

          &:hover:after {
            left: 120%;
            transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
          }
        }
      }
    }

    & .mobile-nav {
      width: 100%;
      max-width: 250px;
      height: 100%;

      padding-left: 40px;

      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      background-color: #fff;
      box-shadow: 5px 3px #292929;

      transition: 300ms ease-in;

      & li .link {
        width: 100%;

        color: #000000;
        text-align: left;
        text-shadow: none;
      }
    }
  }
}
</style>