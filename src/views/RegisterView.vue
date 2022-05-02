<template>
  <div>
    <div
      class="wrapper_support bg_support_2 d-flex align-content-center justify-content-center"
    >
      <div class="my-5 align-content-center justify-content-center">
        <div class="d-flex">
          <h3 class="text-color_white">LOGIN TO PET</h3>
          <h3 class="text-color_green ml-2">SITTER</h3>
        </div>
      </div>
    </div>
    <div class="d-flex form-wrapper justify-content-around">
      <div class="w-100 h-100 align-self-center">
        <div class="align-items-center flex-column d-flex">
          <div class="d-flex">
            <a class="mr-2 bg_a" href="">
              <img src="../assets/img/facebook.png" /> Log in with Facebook</a
            >
            <a href=""
              ><img src="../assets/img/google-plus.png" /> Log in with Google</a
            >
          </div>

          <input placeholder="login" type="text" />
          <input placeholder="Password" type="text" />
          <button>login</button>
          <div class="">
            <span class="text_info">Don’t have an Account?</span
            ><a class="crate_account">Create an Account</a>
          </div>
        </div>
      </div>

      <div class="img-wrapper">
        <img src="../assets/img/cat_register.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
<style scoped lang="scss">
.form-wrapper {
  background: #f3f5eb;

  a {
    padding: 10px 20px 10px 50px;
    background: #ffffff;
    border-radius: 10px;
  }

  input {
    margin: 23px;
    width: 400px;
    height: 35px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    padding-left: 15px;
  }

  button {
    width: 140px;
    background: #39b3ce;
    border: none;
    padding: 15px 50px;
    border-radius: 10px;
    margin-bottom: 25px;
    color: #ffffff;
  }
}

a.bg_a {
  background: #367cbd;
  color: #ffffff;
}

a.bg_a:hover {
  background: #ffffff;
  color: #367cbd;
}

a.crate_account {
  background: none;
  border-radius: 0;
  color: #a6ce39;
  cursor: pointer;
  font-size: 11px;
  padding-left: 10px;
}

.text_info {
  font-size: 10px;
}

.bg_support_2 {
  background-image: url("../assets/img/bg_suport_2.png");
}

.text-color_white {
  color: #ffffff;
}

.text-color_green {
  color: #a6ce39;
}

@media screen and (max-width: 968px) {
  .form-wrapper {
    padding: 20px 0;
    background-image: url("../assets/img/cat_register.png");
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;

    span {
      color: #ffffff;
    }

    a {
      padding: 5px 5px 5px 10px;
      background: #ffffff;
      border-radius: 10px;
      color: #000000;
    }
  }
  .img-wrapper {
    display: none;
  }
}
</style>
