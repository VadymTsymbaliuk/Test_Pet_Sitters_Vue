<template>
  <nav>
    <VHeader />
    <!--    <router-link to="/">Home</router-link>-->
  </nav>
  <router-view />
  <VFooter />
</template>

<style lang="scss"></style>
<script>
import VHeader from "@/components/VHeader";
import VFooter from "@/components/VFooter";
export default {
  components: { VHeader, VFooter },
};
</script>
