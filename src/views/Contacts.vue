// Contacts view component

<template>
   <h1 class="contacts-title">App made by Arthur Kachmazov</h1> 
   <SocLinks />
</template>

<script>
import SocLinks from "@/components/v-soc-links.vue"
export default {
   components: {
      SocLinks,
   }
}
</script>

<style lang="scss">
.contacts-title {
   margin-top: 50px;

   font-size: 52px;
}

</style>