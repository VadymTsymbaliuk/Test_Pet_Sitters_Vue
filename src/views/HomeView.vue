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
  </div>
  <section class="mt-4 mb-4">
    <div class="d-flex justify-content-center">
      <div class="justify-content-center border_pp_wrapper"></div>
      <div class="text-center">
        <h3>PETSITTER IN NUMBERS</h3>
        <span>Site Stats</span>
      </div>
      <div class="align-content-center border_pp_wrapper"></div>
    </div>
    <div class="d-flex justify-content-around">
      <div class="wrapper_icon d-flex flex-column text-center mt-4 mb-4">
        <img src="../../public/img/pawprint_icon.png" alt="" />
        <span class="icon_number">8</span>
        <span>All Jobs</span>
      </div>
      <div class="wrapper_icon d-flex flex-column text-center mt-4 mb-4">
        <img src="../../public/img/checked_icon.png" alt="" />
        <span class="icon_number">0</span>
        <span>Jobs Filled</span>
      </div>
      <div class="wrapper_icon d-flex flex-column text-center mt-4 mb-4">
        <img src="../../public/img/user_icon.png" alt="" />
        <span class="icon_number">8</span>
        <span>Pet Sitters</span>
      </div>
      <div class="wrapper_icon d-flex flex-column text-center mt-4 mb-4">
        <img src="../../public/img/users_icon.png" alt="" />
        <span class="icon_number">231</span>
        <span>Users</span>
      </div>
    </div>
  </section>
  <section class="petsitter_partners_wrapper">
    <div class="mb-4 d-flex justify-content-center">
      <div class="justify-content-center border_pp_wrapper"></div>
      <div class="mb-3 text-center">
        <h3>Pet Sitting Jobs</h3>
        <span>Main Features</span>
      </div>
      <div class="align-content-center border_pp_wrapper"></div>
    </div>
    <div class="container">
      <card />
      <card />
      <card />
      <card />
    </div>
    <div class="card_btm_wrapper">
      <button>load more listings</button>
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
  <section class="petsitter_partners_wrapper">
    <div class="mb-4 d-flex justify-content-center">
      <div class="justify-content-center border_pp_wrapper"></div>
      <div class="mb-3 text-center">
        <h3>ALL PET SITTERS</h3>
        <span>Main Features</span>
      </div>
      <div class="align-content-center border_pp_wrapper"></div>
    </div>
    <div class="container">
      <FormSearch />
      <card />
      <card />
      <card />
      <card />
    </div>
    <div class="card_btm_wrapper">
      <button>load more Resume</button>
    </div>
  </section>
  <section class="mt-4 mb-4 container">
    <div class="d-flex justify-content-center">
      <div class="justify-content-center border_pp_wrapper"></div>
      <div class="text-center">
        <h3 class="ml-5 mr-5">OUR PARTNERS</h3>
      </div>
      <div class="align-content-center border_pp_wrapper"></div>
    </div>
    <div class="row text-center">
      <div class="col">
        <div>tresdiohg</div>
        <div>tresdiohg</div>
      </div>
      <div class="col">
        <div>tresdiohg</div>
        <div>tresdiohg</div>
      </div>
      <div class="col">
        <div>tresdiohg</div>
        <div>tresdiohg</div>
      </div>
      <div class="col">
        <div>tresdiohg</div>
        <div>tresdiohg</div>
      </div>
    </div>
  </section>
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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
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

.card_btm_wrapper {
  display: flex;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;

  button {
    color: #ffffff;
    background: #39b3ce;
    border-radius: 10px;
    border: none;
    padding: 5px 50px;
  }
}

.petsitter_partners_wrapper {
  background: #f3f5eb;
  padding-top: 30px;
}

.wrapper_icon {
  img {
    align-self: center;
    max-width: 40px;
  }
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

.icon_number {
  font-size: 25px;
  font-weight: 700;
  color: #000000;
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
  background-image: url("../../public/img/bg_suport_2.png");
}

.bg_support_2 {
  background-image: url("../../public/img/bg_suport_2.png");
}

@media screen and (max-width: 768px) {
  .bg_slider {
    background-size: cover;
  }
  //.form_slide {
  //  width: 200px;
  //  height: 300px;
  //}
}
</style>
<script>
import VSlider from "@/components/VSlider";
import Card from "@/components/Card";
import FormSearch from "@/components/FormSearch";

export default {
  name: "HomeView",
  components: { VSlider, Card, FormSearch },
};
</script>
