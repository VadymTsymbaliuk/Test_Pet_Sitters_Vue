<template>
  <div>
    sdfg
    <main class="w-screen h-screen">
      <v-map class="w-full h-full" :options="state.map">
        <MglAttributionControl />
        <MglNavigationControl position="top-right" />
        <MglGeolocateControl position="top-right" />
        <MglNavigationControl position="top-right" />
        <MglGeolocateControl position="top-right" />
        <MglScaleControl />
        <MglFullscreenControl />
      </v-map>
    </main>
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

html,
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.w-screen {
  width: 100vw;
}

.h-screen {
  height: 100vh;
}

.h-full {
  height: 100%;
}

.w-full {
  width: 100%;
}
</style>
