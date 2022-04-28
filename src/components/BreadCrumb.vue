<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item" v-for="(crumb, ci) in crumbs" :key="ci">
        <router-link
          to="{{ crumb.path }}"
          class="btn btn-link"
          :class="{ disabled: isLast(ci) }"
          @click="selected(crumb)"
        >
          {{ crumb.title }}
        </router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "BreadCrumb",
  props: {
    crumbs: {
      type: Array,
      required: true,
    },
  },
  data: function () {
    return {};
  },
  methods: {
    isLast(index) {
      return index === this.crumbs.length - 1;
    },
    selected(crumb) {
      console.log(crumb);
    },
  },
};
</script>

<style scoped></style>
