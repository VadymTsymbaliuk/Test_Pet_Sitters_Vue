<template>
  <section class="mt-4 mb-4 container">
    <form-search />
    <div class="row">
      <div class="col-12 col-sm-6">
        <OvnerGridIteam />
        <OvnerGridIteam />
        <OvnerGridIteam />
      </div>
      <div class="col-12 col-sm-6">
        <OvnerGridIteam />
        <OvnerGridIteam />
        <OvnerGridIteam />
      </div>
    </div>
  </section>
</template>

<script>
import OvnerGridIteam from "@/components/OvnerGridIteam";
import FormSearch from "@/components/FormSearch";

export default {
  name: "AllJobs",
  components: { OvnerGridIteam, FormSearch },
};
</script>

<style scoped></style>
