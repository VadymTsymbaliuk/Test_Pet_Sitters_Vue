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
    };
  },
  beforeMount() {
    this.$nextTick(() => {
      $(this.$refs.slider).slick({
        dots: this.dots,
      });
    });
  },
};
</script>

<style scoped></style>
