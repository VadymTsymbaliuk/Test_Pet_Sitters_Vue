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
        <div>
          <img src="../../public/img/pet_sitter_logo.png" alt="" />
          <div><i>Find an Awesome Aet Sitter</i></div>
        </div>
        <div class="d-flex flex-column">
          <div class="pb-2">
            <a class="p-2" href=""> <b>call us</b> : + 1(234)567890</a>
            <a class="p-2" href=""><b>Email: </b>petsitter@dan-fisher.com</a>
          </div>
          <div class="d-flex justify-content-center">
            <img class="pr-2" src="../../public/img/google-plus.png" alt="" />
            <img class="pr-2" src="../../public/img/instagram.png" alt="" />
            <img class="pr-2" src="../../public/img/facebook.png" alt="" />
            <img class="pr-2" src="../../public/img/twitter.png" alt="" />
          </div>
        </div>
      </div>
      <div class="header_wrapper_white_down mb-4">
        <div>HOME</div>
        <div>PAGES</div>
        <div>SHORTCODES</div>
        <div>JOBS</div>
        <div>SITTERS</div>
        <div>BLOG</div>
        <div>PORTFOLIO</div>
        <div>CONTACTS</div>
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
  padding-left: 30px;
  padding-right: 30px;
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

  & a {
    color: white;
  }
}

.header_wrapper_white_down {
  display: flex;
  justify-content: space-around;
}

.header_wrapper_white_up {
  padding-top: 80px;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-around;
}

.header_wrapper_white {
  display: flex;
  flex-direction: column;
}
</style>
