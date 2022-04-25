<template>
  <footer class="footer-bg">
    <div class="row">
      <div class="d-flex col-3">
        <div>information</div>
        <a href="">faqs</a>
        <a href="">our events</a>
        <a href="">about us</a>
        <a href="">our team</a>
        <a href="">contact us</a>
      </div>
      <div class="d-flex col-3">
        <div>categories</div>
        <a href="">cat sitting</a>
        <a href="">cats</a>
        <a href="">dogs</a>
        <a href="">mammals</a>
        <a href="">pet sitting</a>
        <a href="">uncategorized</a>
      </div>
      <div>
        <div>recent posts</div>
      </div>
      <div></div>
    </div>
    <div class="footer_bottom">
      <div>2022. all rights reserved. done by dan fisher.</div>
      <div>keep in touch</div>
      <div></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "VFooter",
};
</script>

<style scoped>
.footer-bg {
  background: #575757;
}

.footer_bottom {
  color: white;
  background: #020202;
}
</style>
