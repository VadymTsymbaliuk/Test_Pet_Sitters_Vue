<template>
  <div class="card_wrapper">
    <div class="card_wrapper_img_info d-flex">
      <div class="info_img">
        <img src="../assets/img/cat.png" />
      </div>
      <div class="pl-3 d-flex flex-column">
        <h5>Cat Sister Needed</h5>
        <span class="py-2">Cryctal Millan</span>
        <span class="py-2">Looking for a dog walker</span>
        <div>
          <img src="../assets/img/map_point.png" />
          berlin
        </div>
      </div>
    </div>
    <div>
      <div>Cat Sitter</div>
      <div>Posted 4 Years Ago</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OvnerGridIteam",
};
</script>

<style scoped lang="scss">
.card_wrapper {
  background: #f3f5eb;
  box-shadow: 5px 5px 15px -9px #000000;
  padding: 20px;
  border: 1px #000000 solid;
  margin-bottom: 20px;
}

.card_wrapper:hover {
  cursor: pointer;
  background: #ffde7c;
}

.info_img {
  display: flex;

  img {
    border-radius: 40%;
    align-self: center;
  }
}
</style>
