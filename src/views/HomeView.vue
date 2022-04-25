<template>
  <div class="home">
    <hr />
    <section class="bg_slider">
      <div class="container">
        <div class="form_slide d-flex flex-column align-items-center">
          <h4>Want a Pet Sitting Job?</h4>
          <input placeholder="keywords" type="text" />
          <input placeholder="any location" type="text" />
          <select class="select-css">
            <option>Any Category</option>
            <option>Apples</option>
            <option>Bananas</option>
            <option>Grapes</option>
            <option>Oranges</option>
          </select>
          <button>Search</button>
        </div>
        <v-slider>
          <div><img src="../../public/img/slide.png" alt="" /></div>
          <div><img src="../../public/img/slide.png" alt="" /></div>
          <div><img src="../../public/img/slide.png" alt="" /></div>
        </v-slider>
      </div>
    </section>
    <hr />
    <card />
    <card />
    <card />
    <card />
    <hr />
  </div>
</template>
<style scoped lang="scss">
.bg_slider {
  position: relative;
  background-image: url("../../public/img/bg_slider.png");
  background-size: contain;
  padding: 60px 0;
}
.form_slide {
  border-radius: 10px;
  h4 {
    margin-top: 40px;
    margin-bottom: 20px;
    color: white;
  }
  background: #686868;
  position: absolute;
  top: 20%;
  right: 20%;
  bottom: 0;
  margin: 0;
  width: 340px;
  height: 300px;
  z-index: 2;
  input {
    width: 80%;
    margin-bottom: 20px;
    border-radius: 10px;
    border: none;
  }
  button {
    background: #a6ce39;
    border: none;
    color: #f3f5eb;
    width: 80%;
    border-radius: 10px;
  }
}
.select-css {
  width: 80%;
  margin-bottom: 20px;
  border-radius: 10px;
  border: none;
  padding: 5px;
}
</style>
<script>
import VSlider from "@/components/VSlider";
import Card from "@/components/Card";
export default {
  name: "HomeView",
  components: { VSlider, Card },
};
</script>
