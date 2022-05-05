<template>
  <div class="breadcrumb-container container-fluid">
    <div class="row">
      <div class="col">
        <h2 class="page-title">{{ pageTitle.title }}</h2>
      </div>
      <div class="col">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  props: {
    pageTitle: {
      type: String,
      title: "",
    },
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

<style scoped lang="scss">
.breadcrumb-container {
  background-image: url("../assets/img/breadcrumb_bg.png");
  .page-title {
    font-weight: 400;
    font-size: 25px;
    line-height: 29px;
    text-transform: uppercase;
    color: #ffffff;
  }
  .row {
    max-width: 980px;
    margin: 0 auto;
    .col {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .breadcrumb {
      justify-content: end;
      background: none;
      padding-bottom: 0;
      .btn-link {
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        text-transform: uppercase;
        color: #ffffff;
      }
    }
  }
}
</style>
