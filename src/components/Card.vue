<template>
  <div class="card">
    <div class="d-flex">
      <img class="img_border" src="../../public/img/toy_terer.png" alt="a" />
      <div class="d-flex flex-column justify-content-center pl-2">
        <div>Dog Dister Needed</div>
        <p>Brenna Femiano</p>
      </div>
    </div>
    <div><img src="../../public/img/map_point.png" alt="" /> New York</div>
    <div>
      Pet Sitter
      <p>posted 4 years ago</p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Card",
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #f3f5eb;
  padding: 15px 10px 10px 35px;
  align-items: center;
  border-radius: initial;
}

.card:hover {
  cursor: pointer;
  background: #ffde7c;
}

.img_border {
  border-radius: 50%;
}
</style>
