<template>
  <div class="card">
    <div class="card-body">
      <img class="sitter_avatar" :src="sitterAvatar" alt="avatar" />
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

<style scoped lang="scss">
.card {
  min-width: 188px;
  .card-body {
    background-color: #f3f5eb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 27px;
    padding-bottom: 14px;
    .sitter_avatar {
      border-radius: 50%;
      margin-bottom: 21px;
    }
    .sitter_name {
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.05em;
      text-transform: capitalize;
      color: #a6ce39;
    }
    .sitter_skill {
      font-size: 11px;
      line-height: 15px;
      letter-spacing: 0.05em;
      text-transform: capitalize;
      color: #000000;
    }
    .sitter_address {
      position: relative;
      font-size: 8px;
      line-height: 11px;
      letter-spacing: 0.05em;
      text-transform: capitalize;
      color: #454545;
      margin-bottom: 0;
      &:before {
        content: "";
        position: absolute;
        left: -15px;
        width: 10px;
        height: 10px;
        background-image: url("../assets/img/icons/sitter-card_icon-address.svg");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }
    }
  }
  .card-footer {
    background-color: #e5e5e5;
    padding: 15px 29px;
    p {
      font-weight: 400;
      font-size: 8px;
      line-height: 11px;
      letter-spacing: 0.05em;
      text-transform: capitalize;
    }
    .sitter_profession {
      position: relative;
      &:before {
        position: absolute;
        top: 0px;
        left: -16px;
        content: "";
        width: 10px;
        height: 10px;
        background-image: url("../assets/img/icons/sitter-card_icon-1.svg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
      }
    }
    .date-post {
      position: relative;
      &:before {
        position: absolute;
        top: 0px;
        left: -16px;
        content: "";
        width: 10px;
        height: 10px;
        background-image: url("../assets/img/icons/sitter-card_icon-2.svg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
      }
    }
  }
}
</style>
