<template>
  <div class="card">
    <div class="card-body">
      <img src="{{sitterAvatar}}" alt="avatar" />
      <p class="sitter_name">{{ sitterName }}</p>
      <p class="sitter_skill">{{ sitterSkill }}</p>
      <p class="sitter_address">{{ sitterAddress }}</p>
    </div>
    <div class="card-footer">
      <p class="sitter_profession">{{ sitterProfession }}</p>
      <p class="date-post">{{ datePost }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SitterCard",
  props: [
    "sitterAvatar",
    "sitterName",
    "sitterSkill",
    "sitterAddress",
    "sitterProfession",
    "datePost",
  ],
  data: function () {
    return {};
  },
};
</script>

<style scoped></style>
