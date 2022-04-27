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
      <div class="mb-3 section-header_container text-center">
        <h3>Pet Sitting Jobs</h3>
        <span>Main Features</span>
      </div>
      <div class="align-content-center border_pp_wrapper"></div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-xl-8 mb-3 mb-xl-0">
          <card />
          <card />
          <card />
          <card />
          <card />
          <card />
        </div>
        <div
          class="col d-flex flex-column justify-content-between align-items-center"
        >
          <div class="featured-jobs_container position-relative">
            <div>
              <img src="../../public/img/sec-3_row-2_img.png" alt="img" />
            </div>
            <div class="featured-jobs_user">
              <h3>Lincey horton</h3>
              <p class="mb-4">Looking for a dog walker</p>
              <div class="jobs-category_container">
                <p>Dog walker</p>
                <p>Denver US</p>
                <p>Posted 4 years ago</p>
              </div>
            </div>
          </div>
          <div class="job-request_container">
            <h3>Need a pet sitter?</h3>
            <p>Interdum et malesuada fames ac ante venenatis ipsum non.</p>
            <div>
              <button class="btn">Post a job</button>
            </div>
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
      <div class="section-header_container text-center">
        <h3>Why choose us</h3>
        <span>Main features</span>
      </div>
      <div class="align-content-center border_pp_wrapper"></div>
    </div>
    <div class="features-container d-flex justify-content-around">
      <div class="features-item d-flex flex-column text-center mt-4 mb-4">
        <div class="features-item_icon">
          <img
            src="../../public/img/icons/home-second/sec-3_icon-1.svg"
            alt="list"
          />
        </div>
        <h4>Create an account</h4>
        <p>
          Make your account better, go there every day to see all the offers.
        </p>
      </div>
      <div class="features-item d-flex flex-column text-center mt-4 mb-4">
        <div class="features-item_icon">
          <img
            src="../../public/img/icons/home-second/sec-3_icon-2.svg"
            alt="list"
          />
        </div>
        <h4>Sumbit your job/profile</h4>
        <p>
          Make your account better, go there every day to see all the offers.
        </p>
      </div>
      <div class="features-item d-flex flex-column text-center mt-4 mb-4">
        <div class="features-item_icon">
          <img
            src="../../public/img/icons/home-second/sec-3_icon-3.svg"
            alt="list"
          />
        </div>
        <h4>contact pet sitter/job owner</h4>
        <p>
          Make your account better, go there every day to see all the offers.
        </p>
      </div>
      <div class="features-item d-flex flex-column text-center mt-4 mb-4">
        <div class="features-item_icon">
          <img
            src="../../public/img/icons/home-second/sec-3_icon-4.svg"
            alt="list"
          />
        </div>
        <h4>Become a star</h4>
        <p>
          Make your account better, go there every day to see all the offers.
        </p>
      </div>
    </div>
  </section>
  <section class="py-4">
    <div class="d-flex justify-content-center">
      <div class="justify-content-center border_pp_wrapper"></div>
      <div class="section-header_container text-center">
        <h3>petsitter stats</h3>
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
  <section class="py-4">
    <div class="d-flex justify-content-center">
      <div class="justify-content-center border_pp_wrapper"></div>
      <div class="section-header_container text-center">
        <h3>what clients say</h3>
        <span>recent reviews</span>
      </div>
      <div class="align-content-center border_pp_wrapper"></div>
    </div>
    <div class="clients-comment_container">
      <div class="comment_item">
        <div class="card">
          <div class="card-body">
            <p class="card-text">
              lorem ipsum dolor sit amet, consectetur elit. donec ut looreat mi.
              integer vitae elit leo eiusimood. nullam blandit lectus sed
              sollicitudin.
            </p>
          </div>
          <div class="card-footer">
            <h4>john doe</h4>
            <p>Ceo, company name</p>
          </div>
        </div>
      </div>
      <div class="comment_item">
        <div class="card">
          <div class="card-body">
            <p class="card-text">
              lorem ipsum dolor sit amet, consectetur elit. donec ut looreat mi.
              integer vitae elit leo eiusimood. nullam blandit lectus sed
              sollicitudin.
            </p>
          </div>
          <div class="card-footer">
            <h4>john doe</h4>
            <p>Ceo, company name</p>
          </div>
        </div>
      </div>
      <div class="comment_item">
        <div class="card">
          <div class="card-body">
            <p class="card-text">
              lorem ipsum dolor sit amet, consectetur elit. donec ut looreat mi.
              integer vitae elit leo eiusimood. nullam blandit lectus sed
              sollicitudin.
            </p>
          </div>
          <div class="card-footer">
            <h4>john doe</h4>
            <p>Ceo, company name</p>
          </div>
        </div>
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
  //background: #f3f5eb;
  padding-top: 30px;
}

.features-item {
  max-width: 230px;

  .features-item_icon {
    border-radius: 50%;
    background-color: #a6ce39;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    margin: 0 auto 21px;

    img {
      align-self: center;
      max-width: 45px;
    }
  }

  h4 {
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-transform: capitalize;
    margin-bottom: 14px;
  }

  p {
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
  }
}

.clients-comment_container {
  display: flex;
  justify-content: center;
  gap: 80px;
  padding-top: 60px;
  padding-bottom: 100px;

  .comment_item {
    position: relative;

    .card {
      max-width: 210px;

      .card-body {
        p {
          font-size: 11px;
          line-height: 15px;
          color: #454545;
        }
      }

      .card-footer {
        background-color: #c4c4c4;

        h4 {
          font-weight: 700;
          font-size: 10px;
          line-height: 14px;
          text-transform: capitalize;
        }

        p {
          margin: 0;
          font-family: "Nunito";
          font-style: normal;
          font-weight: 700;
          font-size: 9px;
          line-height: 12px;
          text-transform: capitalize;
          color: #ffffff;
        }
      }
    }
  }

  .comment_item:before {
    content: "";
    position: absolute;
    top: 0;
    left: -60px;
    width: 47px;
    height: 47px;
    border-radius: 50%;
    background-color: #c4c4c4;
  }
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

main {
  section {
    .section-header_container {
      h3 {
        font-weight: 700;
        font-size: 25px;
        line-height: 29px;
        color: #000000;
        text-transform: capitalize;
      }
      span {
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        text-transform: capitalize;
      }
    }
  }

  section:nth-child(even) {
    background-color: #fff;
  }

  section:nth-child(odd) {
    background-color: #f3f5eb;
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
      background-image: url("../../public/img/icons/home-second/sec-2_row-2_icon-1.svg");
    }

    p:nth-child(2):before {
      background-image: url("../../public/img/icons/home-second/sec-2_row-2_icon-2.svg");
    }

    p:nth-child(3):before {
      background-image: url("../../public/img/icons/home-second/sec-2_row-2_icon-3.svg");
    }
  }
}

.job-request_container {
  max-width: 350px;
  height: 40%;
  max-height: 295px;
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 50px;
  font-family: "Roboto", sans-serif;
  font-style: normal;

  h3 {
    font-weight: 700;
    font-size: 25px;
    line-height: 29px;
  }

  p {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.05em;
  }

  button {
    color: #ffffff;
    background: #39b3ce;
    border-radius: 10px;
    border: none;
    padding: 5px 50px;
  }
}

.wrapper_support {
  .align-content-center {
    z-index: 1;
  }
  button {
    border: none;
    background: #39b3ce;
    color: #f3f5eb;
    border-radius: 10px;
    padding: 5px 45px;
  }
  h3 {
    font-weight: 700;
    font-size: 25px;
    line-height: 29px;
    text-transform: capitalize;
    color: #ffffff;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.05em;
  }

  color: #f3f5eb;
  padding-bottom: 80px;
  padding-top: 80px;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;
}
.wrapper_support:before {
  content: "";
  height: 40%;
  width: 100%;
  top: 0;
  position: absolute;
  background-color: #a6ce39;
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
