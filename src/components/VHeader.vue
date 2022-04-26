<template>
  <header>
    <div class="header_wrapper_black">
      <div class="header_wrapper_black_left">
        <a href=""> PRICING</a>
        <a href="">ABOUT US</a>
        <a href="">FAQS</a>
      </div>
      <div class="header_wrapper_black_right">
        <a href=""> REGISTER</a>
        <a href=""><span class="icon-icons8-youtube"></span> LOGIN</a>
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
  background: #020202;
  display: flex;
  color: white;
  height: 60px;
  justify-content: space-around;
  align-items: center;

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
.header_wrapper_black_left {
  a {
    padding: 10px;
  }
}
.header_wrapper_black_right {
  a {
    padding: 10px;
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
@media screen and (max-width: 768px) {
  .header_wrapper_white_up {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 5px;
    display: flex;
    flex-wrap: wrap;
  }
  .header_wrapper_white_down {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
