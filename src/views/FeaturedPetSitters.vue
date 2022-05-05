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
    <hr />
    <div class="container">
      <div class="row featured-pet">
        <div class="col-6"><img src="../assets/img/owners-1.png" alt="" /></div>
        <div
          class="sitter-avatar-info col-6 d-flex flex-column justify-content-between"
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
          <div class="d-flex">
            <button>view all pet sitters</button>
            <span>or</span>
            <button class="color-bnt">post a job</button>
          </div>
        </div>
        <!--        <div class="col-6">1</div>-->
        <!--        <div class="col-6"><img src="../assets/img/owners-2.png" alt="" /></div>-->
        <div class="col-6"><img src="../assets/img/owners-1.png" alt="" /></div>
        <div
          class="sitter-avatar-info col-6 d-flex flex-column justify-content-between"
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
          <div class="d-flex">
            <button>view all pet sitters</button>
            <span>or</span>
            <button class="color-bnt">post a job</button>
          </div>
        </div>
      </div>
    </div>
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
.featured-pet {
  margin-top: 200px;
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
