<template>
  <div class="my-4 container">
    <form-search />
    <card />
    <card />
    <card />
    <card />
  </div>
</template>

<script>
import Card from "@/components/Card";
import FormSearch from "@/components/FormSearch";

export default {
  name: "VJobs",
  components: { Card, FormSearch },
};
</script>

<style scoped></style>
