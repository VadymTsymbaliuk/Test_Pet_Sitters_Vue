<template>
  <VHeader />
  <main class="page_content">
    <router-view />
    <card />
    <card />
    <card />
    <card />
  </main>
  <VFooter />
</template>

<style lang="scss"></style>
<script>
import VHeader from "@/components/VHeader";
import VFooter from "@/components/VFooter";
import Card from "@/components/Card";

export default {
  components: { VHeader, VFooter, Card },
};
</script>
