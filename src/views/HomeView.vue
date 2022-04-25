<template>
  <div class="home">
    <card />
    <card />
    <card />
    <card />
    <hr />
    <v-slider>
      <div><img src="" alt="" /></div>
      <div>2</div>
    </v-slider>
  </div>
</template>
<style scoped lang="scss"></style>
<script>
import VSlider from "@/components/VSlider";
export default {
  name: "HomeView",
  components: { VSlider },
};
</script>
