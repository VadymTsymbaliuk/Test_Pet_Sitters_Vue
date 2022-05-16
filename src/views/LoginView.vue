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
          <form @submit.prevent="onSubmit">
            <div class="d-flex flex-column">
              <input
                placeholder="Name"
                type="name"
                name="name"
                v-model="form.name"
              />
              <input
                placeholder="Last Name"
                type="text"
                v-model="form.lastName"
              />
              <input placeholder="Email" type="email" v-model="form.email" />
              <input placeholder="Phone" type="text" v-model="form.phone" />
              <input
                placeholder="Countries"
                type="text"
                v-model="form.countries"
              />
              <input placeholder="City" type="text" v-model="form.city" />
            </div>
            <button type="submit" class="d-block m-auto">Sing Up</button>
          </form>
          <div>
            <h2>Register</h2>
            <input
              type="email"
              placeholder="Email address..."
              v-model="authEmail"
            />
            <input
              type="password"
              placeholder="password..."
              v-model="authPassword"
            />
            <button @click="register">Register</button>
          </div>
          <div class="wrapper_text_info">
            <span class="text_info"
              >By creating an account, you agree to pet sitter </span
            ><a class="privacy_policy" href="">Terms Of Service</a>and
            <a class="privacy_policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createUser } from "@/db";
import { reactive } from "vue";
import firebase from "firebase/compat/app";
require("firebase/compat/auth");

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      authEmail: "",
      authPassword: "",
    };
  },
  setup() {
    const form = reactive({
      name: "",
      lastName: "",
      email: "",
      phone: null,
      countries: "",
      city: "",
    });
    const onSubmit = async () => {
      await createUser({ ...form });
      form.name = "";
      form.lastName = "";
      form.email = "";
      form.phone = null;
      form.countries = "";
      form.city = "";
    };

    return {
      form,
      onSubmit,
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.authEmail, this.authPassword)
        .then(() => {
          console.log(this.authEmail, this.authPassword);
          console.log("successfully registered");
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(this.authEmail, this.authPassword);
          console.log(e.message);
        });
    },
  },
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

.wrapper_text_info {
  margin: 20px 0;
  font-size: 11px;
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
  padding: 0 10px;
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

    input {
      width: 250px;
    }

    span {
      color: #000000;
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
