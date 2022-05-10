<template>
  <div class="container-fluid">
    <BreadCrumb :crumbs="crumbs" :page-title="pageTitle" />
    <section class="section section-1">
      <FormSearch />
    </section>
    <section class="section section-2">
      <div class="card-container">
        <SitterCard
          v-for="sitter of sitters"
          :key="sitter.id"
          :sitter-avatar="require(`../assets/img/sitter_avatar_2.png`)"
          :sitter-name="sitter.name"
          sitter-skill="walk, play and care"
          :sitter-address="sitter.address.city"
          sitter-profession="dog walker"
          date-post="posted 4 years ago"
          @click="showUserRCV()"
        />
      </div>
    </section>
  </div>
</template>

<script>
import SitterCard from "@/components/SitterCard";
import FormSearch from "@/components/FormSearch";
import BreadCrumb from "@/components/BreadCrumb";
export default {
  name: "SittersList",
  components: { BreadCrumb, FormSearch, SitterCard },
  data: function () {
    return {
      crumbs: [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "Sitter list",
          path: "sitters-list",
        },
      ],
      pageTitle: {
        title: "Title",
      },
      sitters: [],
    };
  },
  mounted() {
    this.getSitters();
  },
  methods: {
    selected(crumb) {
      console.log(crumb);
    },
    getSitters() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          this.sitters = response.data;
          console.log(this.sitters);
        });
    },
    showUserRCV() {
      this.$router.push("/dog-walker");
    },
  },
};
</script>

<style scoped lang="scss">
.container-fluid {
  padding: 0;
}
.section {
  padding-top: 100px;
}
.section-1 {
  max-width: 1080px;
  margin: 0 auto;
}
.section-2 {
  background-color: #c4c4c4;
  padding: 100px 10px;
  .card-container {
    max-width: 1080px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px 90px;
  }
}
@media screen and (max-width: 1024px) {
  .section-2 {
    padding: 0 10px;
    .card-container {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 30px 70px;
      .card {
        max-width: 188px;
        margin: 0 auto;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .section-2 .card-container {
    grid-template-columns: 1fr 1fr;
    gap: 30px 50px;
  }
}
@media screen and (max-width: 425px) {
  .section-2 .card-container {
    grid-template-columns: 1fr;
  }
}
</style>
