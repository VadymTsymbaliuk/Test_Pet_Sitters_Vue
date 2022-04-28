<template>
  <div>
    <div class="container">
      <section></section>
      <section class="section section-2">
        <SitterCard
          sitter-avatar="@/assets/img/sitter_avatar_1.png"
          sitter-name="niki belk"
          sitter-skill="walk, play and care"
          sitter-address="denver us"
          sitter-profession="dog walker"
          date-post="posted 4 years ago"
        />
        <SitterCard
          sitter-avatar="../../public/img/sitter_avatar_1.png"
          sitter-name="bren femiano"
          sitter-skill="walk, play and care"
          sitter-address="denver us"
          sitter-profession="dog walker"
          date-post="posted 4 years ago"
        />
        <SitterCard
          sitter-avatar="../../public/img/sitter_avatar_2.png"
          sitter-name="niki belk"
          sitter-skill="walk, play and care"
          sitter-address="denver us"
          sitter-profession="dog walker"
          date-post="posted 4 years ago"
        />
        <SitterCard
          sitter-avatar="../../public/img/sitter_avatar_1.png"
          sitter-name="bren femiano"
          sitter-skill="walk, play and care"
          sitter-address="denver us"
          sitter-profession="dog walker"
          date-post="posted 4 years ago"
        />
        <SitterCard
          sitter-avatar="../../public/img/sitter_avatar_2.png"
          sitter-name="niki belk"
          sitter-skill="walk, play and care"
          sitter-address="denver us"
          sitter-profession="dog walker"
          date-post="posted 4 years ago"
        />
        <SitterCard
          sitter-avatar="../../public/img/sitter_avatar_1.png"
          sitter-name="bren femiano"
          sitter-skill="walk, play and care"
          sitter-address="denver us"
          sitter-profession="dog walker"
          date-post="posted 4 years ago"
        />
      </section>
    </div>
  </div>
</template>

<script>
import SitterCard from "@/components/SitterCard";
export default {
  name: "SittersList",
  components: { SitterCard },
};
</script>

<style scoped>
.section-2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px 90px;
}
</style>
