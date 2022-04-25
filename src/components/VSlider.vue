<template>
  <div ref="slider">
    <slot />
  </div>
</template>

<script>
import $ from "jquery";
import "slick-carousel/slick/slick.min";

export default {
  name: "VSlider",
  data() {
    return {
      dots: true,
      speed: 300,
      fade: true,
      cssEase: "linear",
    };
  },
  beforeMount() {
    this.$nextTick(() => {
      $(this.$refs.slider).slick({
        dots: this.dots,
        speed: this.speed,
        fabe: this.fade,
        cssEase: this.cssEase,
      });
    });
  },
};
</script>

<style scoped></style>
