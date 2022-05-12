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

          <input placeholder="Name" type="name" name="name" />
          <input placeholder="Last Name" type="text" />
          <input placeholder="Email" type="email" />
          <input placeholder="Phone" type="text" />
          <input placeholder="Countries" type="text" />
          <input placeholder="City" type="text" />

          <button>Sing Up</button>
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label>Name</label>
              <input
                v-model="form.name"
                class="form-control"
                type="text"
                required
              />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input
                v-model="form.email"
                class="form-control mt-3"
                type="email"
                required
              />
            </div>
            <button type="submit" class="btn btn-success mt-3">
              Create User
            </button>
          </form>

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
// import { createUser } from "@/db";
import db from "@/db";
import { reactive } from "vue";

export default {
  name: "HomeView",
  components: {},
  methods: {},
  setup() {
    const form = reactive({ name: "a", email: "aaa@mmm.mmm" });
    const onSubmit = () => {
      db.collection("cities")
        .add({
          name: "Tokyo",
          country: "Japan",
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      // createUser({
      //   name: "Tokyo",
      //   country: "Japan",
      // });
      // .then(() => {
      // form.name = "";
      // form.email = "";
      // });
    };
    return { form, onSubmit };
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
