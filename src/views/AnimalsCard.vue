<template>
  <div class="animal_wrapper">
    <div class="d-flex">
      <div class="img-wrapper">
        <img src="../assets/img/sec-3_row-2_img.png" />
      </div>
      <div class="animal_card_info d-flex flex-column justify-content-around">
        <h3>Lincey Horton</h3>
        <span>Looking for a Dog Walker</span>
        <button>Dog Walker</button>
        <span><img src="../assets/img/map_point.png" /> Denver US</span>
        <span>Posted 4 Years Ago</span>
        <div class="d-flex justify-content-around">
          <a href="">denfiser_dev</a><a href="">webcite</a>
        </div>
      </div>
    </div>
    <div>
      <h1>description</h1>
      <span
        >Make your account better, go there every day to see all the offers.Make
        your account better, go there every day to see all the offers.Make your
        account better, go there every day to see all the offers.Make your
        account better, go there every day to see all the offers. Make your
        account better, go there every day to see all the offers.Make your
        account better, go there every day to see all the offers.Make your
        account better, go there every day to see all the offers.</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimalsCard",
};
</script>

<style scoped lang="scss">
.img-wrapper {
  margin: 10px;
}

.animal_wrapper {
  background: #f3f5eb;
  padding-left: 240px;
  padding-right: 70px;
}

.animal_card_info {
  padding: 30px;
  button {
    border-radius: 10px;
    padding: 5px;
    width: 90px;
    border: none;
    background: #ffc107;
    color: #ffff;
  }
}
</style>
