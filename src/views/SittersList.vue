<template>
  <div class="container-fluid">
    <BreadCrumb :crumbs="crumbs" />
    <section class="section section-1">
      <FormSearch />
    </section>
    <section class="section section-2">
      <div class="card-container">
        <SitterCard
          :sitter-avatar="require(`../assets/img/sitter_avatar_2.png`)"
          sitter-name="niki belk"
          sitter-skill="walk, play and care"
          sitter-address="denver us"
          sitter-profession="dog walker"
          date-post="posted 4 years ago"
        />
        <SitterCard
          :sitter-avatar="require(`../assets/img/sitter_avatar_1.png`)"
          sitter-name="bren femiano"
          sitter-skill="walk, play and care"
          sitter-address="denver us"
          sitter-profession="dog walker"
          date-post="posted 4 years ago"
        />
        <SitterCard
          :sitter-avatar="require(`../assets/img/sitter_avatar_2.png`)"
          sitter-name="niki belk"
          sitter-skill="walk, play and care"
          sitter-address="denver us"
          sitter-profession="dog walker"
          date-post="posted 4 years ago"
        />
        <SitterCard
          :sitter-avatar="require(`../assets/img/sitter_avatar_1.png`)"
          sitter-name="bren femiano"
          sitter-skill="walk, play and care"
          sitter-address="denver us"
          sitter-profession="dog walker"
          date-post="posted 4 years ago"
        />
        <SitterCard
          :sitter-avatar="require(`../assets/img/sitter_avatar_2.png`)"
          sitter-name="niki belk"
          sitter-skill="walk, play and care"
          sitter-address="denver us"
          sitter-profession="dog walker"
          date-post="posted 4 years ago"
        />
        <SitterCard
          :sitter-avatar="require(`../assets/img/sitter_avatar_1.png`)"
          sitter-name="bren femiano"
          sitter-skill="walk, play and care"
          sitter-address="denver us"
          sitter-profession="dog walker"
          date-post="posted 4 years ago"
        />
        <SitterCard
          :sitter-avatar="require(`../assets/img/sitter_avatar_1.png`)"
          sitter-name="bren femiano"
          sitter-skill="walk, play and care"
          sitter-address="denver us"
          sitter-profession="dog walker"
          date-post="posted 4 years ago"
        />
        <SitterCard
          :sitter-avatar="require(`../assets/img/sitter_avatar_1.png`)"
          sitter-name="bren femiano"
          sitter-skill="walk, play and care"
          sitter-address="denver us"
          sitter-profession="dog walker"
          date-post="posted 4 years ago"
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
          path: "",
        },
        {
          title: "Sitter list",
          path: "sitters-list",
        },
      ],
    };
  },
  methods: {
    selected(crumb) {
      console.log(crumb);
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
  padding-bottom: 100px;
  .card-container {
    max-width: 1080px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px 90px;
  }
}
</style>
