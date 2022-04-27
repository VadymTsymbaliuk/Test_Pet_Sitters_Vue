<template>
  <footer>
    <div class="d-flex justify-content-around footer-bg">
      <div class="d-flex flex-column">
        <div>INFORMATION</div>
        <a href="">Faqs</a>
        <a href="">Our events</a>
        <a href="">About us</a>
        <a href="">Our team</a>
        <a href="">Contact us</a>
      </div>
      <div class="d-flex flex-column">
        <div>CATEGORIES</div>
        <a href="">Cat sitting</a>
        <a href="">Cats</a>
        <a href="">Dogs</a>
        <a href="">Mammals</a>
        <a href="">Pet sitting</a>
        <a href="">Uncategorized</a>
      </div>
      <div>
        <div>RECENT POST</div>
        <div class="d-flex">
          <img class="mb-3 mr-4" src="../../public/img/cat.png" alt="" />
          <div>
            <p class="text_grey">september 19, 2014</p>
            <div>Standart post format(with image)</div>
          </div>
        </div>
        <div class="d-flex">
          <img class="mr-4" src="../../public/img/dog.png" alt="" />
          <div>
            <p class="text_grey">may 23, 2014</p>
            <div>gallery post format(slider based)</div>
          </div>
        </div>
      </div>
      <div>
        <div class="mb-3">GET OUR NEWSLETTER</div>
        <div>Interdum et malesuada fames ac ante venenatis ipsum non.</div>
        <div class="form_email">
          <input type="email" placeholder="E-mail" />
          <button>subscribe</button>
        </div>
      </div>
    </div>
    <div class="footer_bottom d-flex justify-content-around">
      <div class="d-flex align-items-center">
        2022. All Rights Reserved. Done By Dan Fisher.
      </div>
      <div class="d-flex">
        <div class="d-flex align-items-center mr-3">Keep in Touch</div>
        <div class="social_icons_wrapper">
          <img
            class="pl-4 pr-4"
            src="../../public/img/google-plus.png"
            alt=""
          />
          <img class="pr-4" src="../../public/img/instagram.png" alt="" />
          <img class="pr-4" src="../../public/img/facebook.png" alt="" />
          <img class="pr-4" src="../../public/img/twitter.png" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "VFooter",
};
</script>

<style scoped lang="scss">
footer {
  color: #ffffff;
}

.form_email {
  & button {
    border: none;
    background: #a6ce39;
    border-radius: 10px;
    padding: 9px 15px;
    color: #ffffff;
  }

  & input {
    color: #f3f5eb;
    background: #000000;
    border: 1px solid #686868;
    border-radius: 5px;
    margin-right: 10px;
  }
}

input::placeholder {
  color: #c6c6c6;
  padding-left: 10px;
}

footer a {
  text-decoration: none;
  color: #f3f5eb;
}

.footer-bg {
  background: #575757;
  padding: 100px 0 80px 0;
}

.footer_bottom {
  color: white;
  background: #020202;
}

.text_grey {
  color: #c4c4c4;
}

.social_icons_wrapper {
  background: #686868;
  padding: 3px 7px 3px 7px;
  border-radius: 5px;
  margin: 18px 0;
}
@media screen and (max-width: 768px) {
  .footer-bg {
    display: flex;
    flex-wrap: wrap;
  }
  .footer_bottom {
    display: flex;
    flex-wrap: wrap;
  }
  .form_email {
    display: flex;
    justify-content: center;
  }
}
</style>
