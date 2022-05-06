<template>
  <BreadCrumb :crumbs="crumbs" :page-title="pageTitle" />
  <div class="container">
    <div class="row">
      <div class="col-7">
        <div class="row sitter-container">
          <div class="col img-container">
            <img src="../assets/img/sitter_avatar_1.png" alt="sitter avatar" />
          </div>
          <div class="col ml-5 d-flex flex-column justify-content-center">
            <div class="sitter-info">
              <h2>niki belk</h2>
              <p>walk, play and care</p>
            </div>
            <div class="all-info">
              <p>dog walker</p>
              <p>denver uS</p>
              <p>posted 4 years ago</p>
            </div>
            <div class="contact-info">
              <p>webcite</p>
              <p>denfiser_dev</p>
            </div>
          </div>
        </div>
        <div class="row description-container">
          <div class="col">
            <h2>Description</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              animi asperiores atque consectetur debitis dolorum eligendi est et
              mollitia nam natus nihil obcaecati, praesentium quia quod sed
              tempore ullam vero.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              adipisci alias, cumque deserunt dolorem eum explicabo fugit hic
              magnam nobis quaerat quasi quis, quisquam saepe sapiente tempora
              velit. Nemo, sed!
            </p>
          </div>
        </div>
        <div class="row location-container">
          <div class="col">
            <h2>Location</h2>
            <v-map class="map" :options="state.map">
              <MglAttributionControl />
              <MglNavigationControl position="top-right" />
              <MglGeolocateControl position="top-right" />
              <MglNavigationControl position="top-right" />
              <MglGeolocateControl position="top-right" />
              <MglScaleControl />
              <MglFullscreenControl />
            </v-map>
          </div>
        </div>
        <div class="sitter-characteristics">
          <div class="row">
            <div class="col">
              <h3>Skils</h3>
              <ul>
                <li>Skil</li>
                <li>Skil</li>
                <li>Skil</li>
                <li>Skil</li>
                <li>Skil</li>
              </ul>
            </div>
            <div class="col">
              <h3>Experiense</h3>
              <ul>
                <li>Experiense</li>
                <li>Experiense</li>
                <li>Experiense</li>
                <li>Experiense</li>
                <li>Experiense</li>
              </ul>
            </div>
            <div class="col">
              <h3>Education</h3>
              <ul>
                <li>Education</li>
                <li>Education</li>
                <li>Education</li>
                <li>Education</li>
                <li>Education</li>
              </ul>
            </div>
          </div>
          <button class="btn btn-info">contact</button>
        </div>
        <div class="row user-comments">
          <div class="col">
            <h2>What people say?</h2>
            <div class="select-container">
              <p>Sort by:</p>
              <select>
                <option value="anyCategory" label selected>Any category</option>
                <option value="cat">Cat sitter</option>
                <option value="dog">Dog sitter</option>
                <option value="bird">Bird sitter</option>
              </select>
            </div>

            <div class="comments-container">
              <div class="comment-item">
                <img
                  src="https://img.icons8.com/plasticine/100/000000/user.png"
                />
                <div class="d-flex flex-row">
                  <div>
                    <div class="stars-container">1111</div>
                    <p>cool</p>
                    <p>test</p>
                    <p>june 23, 2022, 12:45 pm</p>
                  </div>
                </div>
                <div class="rating-container">
                  <div class="like">
                    <button class="btn">
                      <img
                        src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-like-feedback-those-icons-fill-those-icons.png"
                      />
                    </button>
                  </div>
                  <div class="dislike">
                    <button class="btn">
                      <img
                        src="https://img.icons8.com/glyph-neue/64/000000/poor-quality.png"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div class="comment-item">
                <img
                  src="https://img.icons8.com/plasticine/100/000000/user.png"
                />
                <div class="d-flex flex-row">
                  <div>
                    <div class="stars-container">1111</div>
                    <p>cool</p>
                    <p>test</p>
                    <p>june 23, 2022, 12:45 pm</p>
                  </div>
                </div>
                <div class="rating-container">
                  <div class="like">
                    <button class="btn">
                      <img
                        src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-like-feedback-those-icons-fill-those-icons.png"
                      />
                    </button>
                  </div>
                  <div class="dislike">
                    <button class="btn">
                      <img
                        src="https://img.icons8.com/glyph-neue/64/000000/poor-quality.png"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div class="comment-item">
                <img
                  src="https://img.icons8.com/plasticine/100/000000/user.png"
                />
                <div class="d-flex flex-row">
                  <div>
                    <div class="stars-container">1111</div>
                    <p>cool</p>
                    <p>test</p>
                    <p>june 23, 2022, 12:45 pm</p>
                  </div>
                </div>
                <div class="rating-container">
                  <div class="like">
                    <button class="btn">
                      <img
                        src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-like-feedback-those-icons-fill-those-icons.png"
                      />
                    </button>
                  </div>
                  <div class="dislike">
                    <button class="btn">
                      <img
                        src="https://img.icons8.com/glyph-neue/64/000000/poor-quality.png"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col text-center mt-5 pt-3">
            <button class="btn text-uppercase font-weight-bold">
              show more
            </button>
          </div>
        </div>
      </div>
      <div class="col-4">
        <h2>Recent Resumes</h2>
        <div class="row row-cols-1 resume-container">
          <div
            class="col resume-item"
            v-for="(id, sitter) of sitters"
            :key="id"
          >
            <div class="img-container">
              <img
                src="../assets/img/sitter_avatar_1.png"
                alt="sitter-avatar"
              />
            </div>
            <div>
              <p>{{ sitter }}</p>
              <p>walk, play and care</p>
            </div>
            <div>
              <p>{{ sitter.address[city] }}</p>
            </div>
          </div>
          <!--          <div class="col resume-item">-->
          <!--            <div class="img-container">-->
          <!--              <img-->
          <!--                src="../assets/img/sitter_avatar_1.png"-->
          <!--                alt="sitter-avatar"-->
          <!--              />-->
          <!--            </div>-->
          <!--            <div>-->
          <!--              <p>niki belk</p>-->
          <!--              <p>walk, play and care</p>-->
          <!--            </div>-->
          <!--            <div>-->
          <!--              <p>new york</p>-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div class="col resume-item">-->
          <!--            <div class="img-container">-->
          <!--              <img-->
          <!--                src="../assets/img/sitter_avatar_1.png"-->
          <!--                alt="sitter-avatar"-->
          <!--              />-->
          <!--            </div>-->
          <!--            <div>-->
          <!--              <p>niki belk</p>-->
          <!--              <p>walk, play and care</p>-->
          <!--            </div>-->
          <!--            <div>-->
          <!--              <p>new york</p>-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div class="col resume-item">-->
          <!--            <div class="img-container">-->
          <!--              <img-->
          <!--                src="../assets/img/sitter_avatar_1.png"-->
          <!--                alt="sitter-avatar"-->
          <!--              />-->
          <!--            </div>-->
          <!--            <div>-->
          <!--              <p>niki belk</p>-->
          <!--              <p>walk, play and care</p>-->
          <!--            </div>-->
          <!--            <div>-->
          <!--              <p>new york</p>-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div class="col resume-item">-->
          <!--            <div class="img-container">-->
          <!--              <img-->
          <!--                src="../assets/img/sitter_avatar_1.png"-->
          <!--                alt="sitter-avatar"-->
          <!--              />-->
          <!--            </div>-->
          <!--            <div>-->
          <!--              <p>{{ sitter.name }}</p>-->
          <!--              <p>walk, play and care</p>-->
          <!--            </div>-->
          <!--            <div>-->
          <!--              <p>new york</p>-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div class="col resume-item active">-->
          <!--            <div class="img-container">-->
          <!--              <img-->
          <!--                src="../assets/img/sitter_avatar_1.png"-->
          <!--                alt="sitter-avatar"-->
          <!--              />-->
          <!--            </div>-->
          <!--            <div>-->
          <!--              <h3>niki belk</h3>-->
          <!--              <div>-->
          <!--                <p>walk, play and care</p>-->
          <!--                <p>new york</p>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "mapbox-gl/dist/mapbox-gl.css";
import "v-mapbox/dist/v-mapbox.css";
import mapbox from "mapbox-gl";
import {
  VMap,
  MglAttributionControl,
  MglNavigationControl,
  MglGeolocateControl,
  MglFullscreenControl,
  MglScaleControl,
} from "v-mapbox";
import { reactive } from "vue";

import BreadCrumb from "@/components/BreadCrumb";

export default {
  name: "DogWalkerPage",
  components: {
    BreadCrumb,
    VMap,
    MglAttributionControl,
    MglNavigationControl,
    MglGeolocateControl,
    MglFullscreenControl,
    MglScaleControl,
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoidmFkeW10c3ltYmFsaXVrIiwiYSI6ImNsMHFyY3psczI3cGozanB3M3I0dGY0bnUifQ.3tBov4aH3A1qe69cnat-0w",
      style: "mapbox://styles/mapbox/streets-v11",
      crumbs: [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "Dog walker",
          path: "dog-walker",
        },
      ],
      pageTitle: {
        title: "Looking for a dog walker ",
      },
      sitters: [],
    };
  },
  setup() {
    const state = reactive({
      map: {
        accessToken:
          "pk.eyJ1IjoidmFkeW10c3ltYmFsaXVrIiwiYSI6ImNsMHFyY3psczI3cGozanB3M3I0dGY0bnUifQ.3tBov4aH3A1qe69cnat-0w",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [73.8567, 18.5204],
        zoom: 11,
        maxZoom: 22,
        crossSourceCollisions: false,
        failIfMajorPerformanceCaveat: false,
        attributionControl: true,
        preserveDrawingBuffer: true,
        hash: false,
        minPitch: 0,
        maxPitch: 60,
      },
    });

    return {
      state,
    };
  },
  created() {
    this.mapbox = mapbox;
  },
  mounted() {
    this.getSitters();
    console.log(this.sitters);
  },
  methods: {
    featuredResumes() {},
    getSitters() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          this.sitters = response.data;
          console.log(this.sitters);
          console.log(response.data);
        });
    },
  },
};
</script>

<style lang="scss">
@import "~mapbox-gl/dist/mapbox-gl.css";
@import "~v-mapbox/dist/v-mapbox.css";

.container > .row {
  gap: 30px;

  > .col-4 {
    margin-top: 100px;

    .resume-container {
      margin-top: 42px;

      .resume-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f3f5eb;
        border: 1px solid #e5e5e5;
        padding: 16px 20px;
        cursor: pointer;

        .img-container {
          border-radius: 50%;
          background-color: #fff;
          overflow: hidden;
        }

        div {
          height: 100%;
        }
      }

      .active {
        background-color: #ffc107;
        border: 1px solid #e5e5e5;
      }
    }
  }
}

.location-container {
  .map {
    width: 100%;
    height: 265px;
    margin-top: 60px;
  }
}

.sitter-container,
.description-container,
.location-container {
  position: relative;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: calc((100vw - 740px) + 100%);
    height: 100%;
    background-color: #f3f5eb;
  }
}

.description-container {
  padding-top: 26px;
  padding-bottom: 64px;
}

.location-container {
  padding-top: 100px;
  padding-bottom: 110px;
}

.sitter-container {
  padding-top: 120px;
  padding-bottom: 26px;

  .img-container {
    padding: 32px 14px;
    background-color: #fff;

    img {
      width: 100%;
    }
  }
}

.sitter-characteristics {
  padding-top: 24px;
  padding-bottom: 100px;

  .col {
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .btn {
    display: block;
    margin: 0 auto;
    text-transform: capitalize;

    &-info {
      background-color: #39b3ce;
      width: 160px;
      padding: 10px;
    }
  }
}

.user-comments {
  position: relative;
  padding: 100px 0;
  flex-direction: column;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: calc((100vw - 740px) + 100%);
    height: 100%;
    background-color: #ececec;
  }

  .col {
    padding: 0;

    .select-container {
      display: flex;
      align-items: center;
      margin-top: 32px;

      select {
        padding: 10px;
        width: 230px;
      }

      p {
        margin-right: 20px;
        margin-bottom: 0;
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.05em;
        text-transform: capitalize;
      }
    }

    .comments-container {
      display: flex;
      flex-direction: column;
      margin-top: 87px;

      .comment-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        background-color: white;
        padding: 38px 31px 43px 55px;
        border: 2px solid #c4c4c4;

        .rating-container {
          display: flex;
          align-items: end;

          .btn {
            width: 15px;
            height: 15px;

            img {
              width: 15px;
            }
          }
        }
      }
    }
  }
}
</style>
