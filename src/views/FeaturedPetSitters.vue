<template>
  <div>
    <hr />
    <section class="bg_slider">
      <div class="container">
        <v-slider>
          <div><img src="../assets/img/slide.png" alt="" /></div>
          <div><img src="../assets/img/slide.png" alt="" /></div>
          <div><img src="../assets/img/slide.png" alt="" /></div>
        </v-slider>
      </div>
    </section>
    <div class="container">
      <div class="d-flex justify-content-around">
        <div><h3>Featured Pet Sitters</h3></div>
        <div><h3>Featured Pet Jobs</h3></div>
      </div>
      <div class="row">
        <div class="card-container d-flex">
          <SitterCard
            :sitter-avatar="require(`../assets/img/sitter_avatar_2.png`)"
            sitter-name="bren femiano"
            sitter-skill="walk, play and care"
            sitter-address="denver us"
            sitter-profession="dog walker"
            date-post="posted 4 years ago"
          />
          <SitterCard
            :sitter-avatar="require(`../assets/img/sitter_avatar_1.png`)"
            sitter-name="bren femiano"
            sitter-skill="walk, play and care"
            sitter-address="denver us"
            sitter-profession="dog walker"
            date-post="posted 4 years ago"
          />
          <SitterCard
            :sitter-avatar="require(`../assets/img/sitter_avatar_1.png`)"
            sitter-name="bren femiano"
            sitter-skill="walk, play and care"
            sitter-address="denver us"
            sitter-profession="dog walker"
            date-post="posted 4 years ago"
          />
          <div class="featured-jobs_container position-relative">
            <div>
              <img src="../assets/img/sec-3_row-2_img.png" alt="img" />
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
        </div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
    </div>
    <div class="container">
      <div class="row featured-pet">
        <div
          class="col-12 col-sm-6 my-5 d-flex justify-content-center align-content-center"
        >
          <img src="../assets/img/owners-1.png" alt="" />
        </div>
        <div
          class="sitter-avatar-info col-12 col-sm-6 my-5 d-flex flex-column justify-content-between"
        >
          <div>
            <h2>For Pet Owners</h2>
            <div class="d-flex">
              <div class="search-img-wrapper">
                <img src="../assets/img/search.svg" alt="" />
              </div>

              <div>
                <h3>Find Your Perfect Pet Sitter</h3>
                <span
                  >interdum et malesuada fames ac ante venenatis ipsum
                  non.</span
                >
              </div>
            </div>
          </div>
          <div class="d-flex flex-wrap">
            <button>View All Pet Sitters</button>
            <span>or</span>
            <button class="color-bnt">Post a Job</button>
          </div>
        </div>
        <!--        <div class="col-6">1</div>-->
        <div
          class="sitter-avatar-info col-12 col-sm-6 my-5 d-flex flex-column justify-content-between"
        >
          <div>
            <h2>For Pet Owners</h2>
            <div class="d-flex">
              <div class="search-img-wrapper">
                <img src="../assets/img/search.svg" alt="" />
              </div>

              <div>
                <h3>Find Your Perfect Pet Sitter</h3>
                <span
                  >interdum et malesuada fames ac ante venenatis ipsum
                  non.</span
                >
              </div>
            </div>
          </div>
          <div class="d-flex flex-wrap">
            <button class="my-3">View All Pet Sitters</button>
            <span>or</span>
            <button class="color-bnt">Post a Job</button>
          </div>
        </div>
        <div
          class="col-12 col-sm-6 my-5 d-flex justify-content-center align-content-center"
        >
          <img src="../assets/img/owners-2.png" alt="" />
        </div>
      </div>
    </div>
    <section class="py-4 bg-sec">
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
              src="../assets/img/icons/home-second/sec-3_icon-1.svg"
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
              src="../assets/img/icons/home-second/sec-3_icon-2.svg"
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
              src="../assets/img/icons/home-second/sec-3_icon-3.svg"
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
              src="../assets/img/icons/home-second/sec-3_icon-4.svg"
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

    <section class="bg-sec py-4">
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
                lorem ipsum dolor sit amet, consectetur elit. donec ut looreat
                mi. integer vitae elit leo eiusimood. nullam blandit lectus sed
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
                lorem ipsum dolor sit amet, consectetur elit. donec ut looreat
                mi. integer vitae elit leo eiusimood. nullam blandit lectus sed
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
                lorem ipsum dolor sit amet, consectetur elit. donec ut looreat
                mi. integer vitae elit leo eiusimood. nullam blandit lectus sed
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
  </div>
</template>

<script>
import VSlider from "@/components/VSlider";
import SitterCard from "@/components/SitterCard";

export default {
  name: "FeaturedPetSitters",
  components: { VSlider, SitterCard },
};
</script>

<style scoped lang="scss">
.bg-sec {
  background-color: #f3f5eb;
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
      background-image: url("../assets/img/icons/home-second/sec-2_row-2_icon-1.svg");
    }

    p:nth-child(2):before {
      background-image: url("../assets/img/icons/home-second/sec-2_row-2_icon-2.svg");
    }

    p:nth-child(3):before {
      background-image: url("../assets/img/icons/home-second/sec-2_row-2_icon-3.svg");
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
  background-image: url("../assets/img/bg_suport_2.png");
}

.bg_support_2 {
  background-image: url("../assets/img/bg_suport_2.png");
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
.featured-pet {
  margin-top: 100px;
}

.search-img-wrapper {
  display: flex;
  padding: 20px;
  justify-content: center;
  align-content: center;
  margin-top: 20px;
  margin-right: 35px;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 3px solid #a6ce39;

  img {
    width: 100%;
  }
}

.sitter-avatar-info {
  button {
    color: #ffffff;
    background: #39b3ce;
    border-radius: 10px;
    border: none;
    padding: 5px 50px;
    margin-right: 50px;
  }

  button.color-bnt {
    margin-left: 25px;
    background: #c4c4c4;
    color: #000000;
    max-height: 40px;
  }
}

.card-container {
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px 90px;
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
    background-image: url("../assets/img/icons/home-second/sec-2_row-2_icon-1.svg");
  }

  p:nth-child(2):before {
    background-image: url("../assets/img/icons/home-second/sec-2_row-2_icon-2.svg");
  }

  p:nth-child(3):before {
    background-image: url("../assets/img/icons/home-second/sec-2_row-2_icon-3.svg");
  }
}
</style>
