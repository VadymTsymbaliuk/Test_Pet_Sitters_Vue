<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="d-flex align-self-center navbar-brand" href="#"
        ><img src="../../public/img/pet_sitter_logo.png" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >PRICING <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ABOUT US</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">FAQS</a>
          </li>
          <!--          <li class="nav-item dropdown">-->
          <!--            <a-->
          <!--              class="nav-link dropdown-toggle"-->
          <!--              href="#"-->
          <!--              id="navbarDropdown"-->
          <!--              role="button"-->
          <!--              data-toggle="dropdown"-->
          <!--              aria-expanded="false"-->
          <!--            >-->
          <!--              MENU-->
          <!--            </a>-->
          <!--            <div class="dropdown-menu" aria-labelledby="navbarDropdown">-->
          <!--              <a class="dropdown-item" href="#">Action</a>-->
          <!--              <a class="dropdown-item" href="#">Another action</a>-->
          <!--              <div class="dropdown-divider"></div>-->
          <!--              <a class="dropdown-item" href="#">Something else here</a>-->
          <!--            </div>-->
          <!--          </li>-->
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <div class="header_wrapper_black_right">
            <a class="pr-2" href=""> REGISTER</a>
            <a href=""><span class="icon-icons8-youtube"></span> LOGIN</a>
          </div>
        </form>
      </div>
    </nav>
    <div class="header_wrapper_black">
      <a href="#">HOME</a>
      <a href="#">PAGES</a>
      <a href="#">SHORTCODES</a>
      <a href="#">JOBS</a>
      <a href="#">SITTERS</a>
      <a href="#">BLOG</a>
      <a href="#">PORTFOLIO</a>
      <a href="#">CONTACTS</a>
    </div>
    <!--    <div class="header_wrapper_white">-->
    <!--      <div class="header_wrapper_white_up">-->
    <!--        <div class="d-flex flex-column">-->
    <!--          <div>-->
    <!--            <a class="" href=""> <b>call us</b> : + 1(234)567890</a>-->
    <!--            <a class="p-2" href=""><b>Email: </b>petsitter@dan-fisher.com</a>-->
    <!--          </div>-->
    <!--          <div class="d-flex mt-1 justify-content-around">-->
    <!--            <img class="pr-2" src="../../public/img/google-plus.png" alt="" />-->
    <!--            <img class="pr-2" src="../../public/img/instagram.png" alt="" />-->
    <!--            <img class="pr-2" src="../../public/img/facebook.png" alt="" />-->
    <!--            <img class="pr-2" src="../../public/img/twitter.png" alt="" />-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </header>
</template>

<script>
export default {
  name: "V-Header",
};
</script>

<style scoped lang="scss">
.header_wrapper_black {
  background: #686868;
  display: flex;
  color: white;
  min-height: 40px;
  justify-content: space-around;
  align-items: center;

  & a {
    color: white;
  }
}

.header_wrapper_white_down {
  display: flex;
  justify-content: space-around;
}

.header_wrapper_white_up {
  padding-top: 10px;
  padding-bottom: 10px;
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
  .header_wrapper_black {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
  }
  .header_wrapper_white_down {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
