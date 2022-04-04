<template>
  <header>
    <router-link to="/" class="header-link"><span>Home</span></router-link>
    <router-link to="/about" class="header-link"
      ><span>About</span></router-link
    >
    <router-link to="/contacts" class="header-link"
      ><span>Contacts</span></router-link
    >
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  height: 50px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-color: #d49c00;

  & .header-link {
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
    text-shadow: 4px 3px 0 #292929, 2px 2px 2px rgba(206,89,55,0);

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
</style>