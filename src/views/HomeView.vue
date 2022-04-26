<template>
  <div class="home">
    <hr />

    <section class="bg_slider">
      <div class="container">
        <div class="wrapper_slider_form">
          <div class="form_slide d-flex flex-column align-items-center">
            <h4>Want a Pet Sitting Job?</h4>
            <input placeholder="Keywords" type="text" />
            <input placeholder="Any Location" type="text" />
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
      </div>
    </section>

    <hr />
    <card />
    <card />
    <card />
    <card />
    <hr />
  </div>
  <section class="petsitter_partners_wrapper">
    <div class="d-flex justify-content-center">
      <div class="justify-content-center border_pp_wrapper"></div>
      <div class="text-center">
        <h3>PETSITTER IN NUMBERS</h3>
        <span>Site Stats</span>
      </div>
      <div class="align-content-center border_pp_wrapper"></div>
    </div>
  </section>
  <hr />
  <div
    class="wrapper_support bg_support_2 d-flex align-content-center justify-content-center"
  >
    <div class="align-content-center justify-content-center">
      <h3>best professional care?</h3>
      <p>iinterdum et malesuada fames ac ante venenatis ipsum non.</p>
      <button>read more</button>
    </div>
  </div>
  <hr />
  <card />
  <card />
  <card />
  <card />
  <hr />
  <div
    class="wrapper_support bg_support d-flex align-content-center justify-content-center"
  >
    <div class="align-content-center justify-content-center">
      <h3>Need Support?</h3>
      <p>interdum et malesuada fames ac ante venenatis ipsum non.</p>
      <button>Contact Us</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.bg_slider {
  background-image: url("../../public/img/bg_slider.png");
  background-size: contain;
  background-repeat: no-repeat;
  padding: 60px 0;
}

.border_pp_wrapper {
  border-bottom: 1px solid #c4c4c4;
  flex-grow: 1;
  height: 0;
  margin: auto;
}

.wrapper_slider_form {
  position: relative;
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
  right: 20px;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 340px;
  height: 300px;
  z-index: 2;

  input {
    padding: 5px;
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

.wrapper_support {
  button {
    border: none;
    background: #39b3ce;
    color: #f3f5eb;
    border-radius: 10px;
    padding: 5px 45px;
  }

  color: #f3f5eb;
  padding-bottom: 80px;
  padding-top: 80px;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.bg_support {
  background-image: url("../../public/img/bg_suport.png");
}

.bg_support_2 {
  background-image: url("../../public/img/bg_suport_2.png");
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
