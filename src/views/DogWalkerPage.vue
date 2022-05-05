<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <div class="row sitter-container">
          <div class="col">
            <img src="../assets/img/sitter_avatar_1.png" alt="sitter avatar" />
          </div>
          <div class="col">
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
        <div class="description-container">
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
        <div class="location-container">
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
        <div class="sitter-characteristics">
          <div>
            <h3>Skils</h3>
            <ul>
              <li>Skil</li>
              <li>Skil</li>
              <li>Skil</li>
              <li>Skil</li>
              <li>Skil</li>
            </ul>
          </div>
          <div>
            <h3>Experiense</h3>
            <ul>
              <li>Experiense</li>
              <li>Experiense</li>
              <li>Experiense</li>
              <li>Experiense</li>
              <li>Experiense</li>
            </ul>
          </div>
          <div>
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
        <div class="user-comments">
          <h2>What people say?</h2>
          <div class="sort-container">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Button
                </button>
              </div>
            </div>
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
      </div>
      <div class="col-3"></div>
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

export default {
  name: "DogWalkerPage",
  components: {
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
};
</script>

<style lang="scss">
@import "~mapbox-gl/dist/mapbox-gl.css";
@import "~v-mapbox/dist/v-mapbox.css";

.location-container {
  width: 667px;
  height: 255px;
}

.map {
  width: 100%;
  height: 100%;
}

.sitter-container {
  img {
    width: 100%;
  }
}
.sitter-characteristics {
  display: flex;
  justify-content: space-between;
  ul {
    list-style: none;
  }
}

.comment-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

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
</style>
