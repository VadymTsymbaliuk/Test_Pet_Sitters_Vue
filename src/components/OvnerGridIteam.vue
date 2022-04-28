<template>
  <div class="card_wrapper">
    <div class="card_wrapper_img_info d-flex">
      <div class="info_img">
        <img src="../../public/img/cat_ovner.png" />
      </div>
      <div class="pl-3 d-flex flex-column">
        <h2>cat sister needed</h2>
        <span>cryctal millan</span>
        <span>looking for a dog walker</span>
        <div>
          <img src="../../public/img/map_point.png" />
          berlin
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OvnerGridIteam",
};
</script>

<style scoped>
.card_wrapper {
  padding-top: 35px;
  background: #e5e5e5;
}

.card_wrapper_img_info {
  background: #f3f5eb;
}
.info_img {
  border-radius: 50px;
}
</style>
