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
      <div class="row">
        <div class="col">
          <card />
          <card />
          <card />
          <card />
          <card />
          <card />
        </div>
        <div class="col">
          <div class="featured-jobs_container position-relative">
            <div>
              <img src="../../public/img/sec-3_row-2_img.png" alt="img" />
            </div>
            <div class="featured-jobs_user">
              <h3>Lincey horton</h3>
              <p>looking for a dog walker</p>
              <div class="jobs-category_container">
                <p>Dog walker</p>
                <p>Denver US</p>
                <p>Posted 4 years ago</p>
              </div>
            </div>
          </div>
          <div>
            <h3>Need a pet sitter?</h3>
            <p>Interdum et malesuada fames ac ante venenatis ipsum non.</p>
            <button class="btn">Post a job</button>
          </div>
        </div>
      </div>
    </div>
    <div class="card_btm_wrapper">
      <button>load more listings</button>
    </div>
  </section>
  <section class="py-4">
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
      <card />
      <card />
      <card />
      <card />
    </div>
    <div class="card_btm_wrapper">
      <button>load more Resume</button>
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
.featured-jobs_container {
  position: relative;
  max-width: 350px;
}
.featured-jobs_user {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(104, 104, 104, 0.67);
  padding: 14px 17px;
  color: #fff;
  h3 {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.05em;
  }
  p {
    margin: 0;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.05em;
  }
  .jobs-category_container {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 8px;
      line-height: 11px;
      position: relative;
    }
    p:before {
      position: absolute;
      content: "";
      width: 10px;
      height: 10px;
      left: -13px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
    }
    p:nth-child(1):before {
      background-image: url("../../public/img/icons/sec-3_row-2_icon-1.svg");
    }
    p:nth-child(2):before {
      background-image: url("../../public/img/icons/sec-3_row-2_icon-2.svg");
    }
    p:nth-child(3):before {
      background-image: url("../../public/img/icons/sec-3_row-2_icon-3.svg");
    }
  }
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

export default {
  name: "HomeSecond",
  components: { VSlider, Card },
};
</script>
