<template>
  <header>
    <div class="header_wrapper_black">
      <div class="header_wrapper_black_left">
        <a href="">pricing</a>
        <a href="">about us</a>
        <a href="">faqs</a>
      </div>
      <div class="header_wrapper_black_right">
        <a href="">register</a>
        <a href="">Login</a>
      </div>
    </div>
    <div class="header_wrapper_white">
      <div class="header_wrapper_white_up">
        <div>1</div>
        <div>2</div>
      </div>
      <div class="header_wrapper_white_down">
        <div>home</div>
        <div>home</div>
        <div>home</div>
        <div>home</div>
        <div>home</div>
        <div>home</div>
        <div>home</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "V-Header",
};
</script>

<style scoped lang="scss">
.header_wrapper_black {
  background: #020202;
  display: flex;
  color: white;
  justify-content: space-between;

  &-right {
    display: flex;
  }

  &-left {
    display: flex;
  }
}

.header_wrapper_white_down {
  display: flex;
  justify-content: space-around;
}
.header_wrapper_white_up {
  display: flex;
  justify-content: space-around;
}

.header_wrapper_white {
  display: flex;
  flex-direction: column;
}
</style>
