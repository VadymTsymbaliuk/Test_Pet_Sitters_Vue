<template>
  <VHeader />
  <main class="page_content">
    <router-view />
  </main>
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
