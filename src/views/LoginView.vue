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
            <a class="mr-4 bg_a" href="">
              <img src="../assets/img/facebook.png" /> Log in with Facebook</a
            >
            <a href=""
              ><img src="../assets/img/google-plus.png" /> Log in with Google</a
            >
          </div>

          <input placeholder="Name" type="" />
          <input placeholder="Last Name" type="text" />
          <input placeholder="Email" type="email" />
          <input placeholder="Phone" type="text" />
          <input placeholder="Countries" type="text" />
          <input placeholder="City" type="text" />
          <button>Sing Up</button>
          <div class="">
            <span class="text_info"
              >By cREATing AN ACCOUNT, you agree to pet sitter terms of service
              and </span
            ><a class="privacy_policy">privacy policy</a>
          </div>
        </div>
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

<style lang="scss" scoped>
.form-wrapper {
  padding: 30px 0;
  background: #f3f5eb;

  a {
    padding: 10px 20px 10px 50px;
    background: #ffffff;
    border-radius: 10px;
  }

  input {
    margin: 15px;
    width: 400px;
    height: 35px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    padding-left: 15px;
  }

  button {
    background: #39b3ce;
    border: none;
    padding: 15px 50px;
    border-radius: 10px;
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

a.privacy_policy {
  background: none;
  border-radius: 0;
  color: #ce5d39;
  cursor: pointer;
  font-size: 11px;
  padding-left: 10px;
}

.bg_support_2 {
  background-image: url("../assets/img/bg_suport_2.png");
}

.text_info {
  font-size: 10px;
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
}
</style>
