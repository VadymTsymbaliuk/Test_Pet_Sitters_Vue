<template>
  <div>
    <BreadCrumb :crumbs="crumbs" :page-title="pageTitle" />
    <div class="my-4 container">
      <form-search />
      <card />
      <card />
      <card />
      <card />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import FormSearch from "@/components/FormSearch";
import BreadCrumb from "@/components/BreadCrumb";

export default {
  name: "VJobs",
  components: { Card, FormSearch, BreadCrumb },
  data() {
    return {
      crumbs: [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "Jobs",
          path: "all-jobs",
        },
      ],
      pageTitle: {
        title: "Jobs",
      },
    };
  },
};
</script>

<style scoped></style>
