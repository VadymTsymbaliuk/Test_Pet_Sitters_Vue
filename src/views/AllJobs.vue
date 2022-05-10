<template>
  <div>
    <BreadCrumb :crumbs="crumbs" :page-title="pageTitle" />
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
  </div>
</template>

<script>
import OvnerGridIteam from "@/components/OvnerGridIteam";
import FormSearch from "@/components/FormSearch";
import BreadCrumb from "@/components/BreadCrumb";

export default {
  name: "AllJobs",
  components: { OvnerGridIteam, FormSearch, BreadCrumb },
  data() {
    return {
      crumbs: [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "All Jobs",
          path: "",
        },
      ],
      pageTitle: {
        title: "All jobs",
      },
    };
  },
};
</script>

<style scoped></style>
