<template lang="pug">
.container-fluid
  b-navbar(variant="primary", type="dark")
    b-navbar-brand recaptcha demo
  .d-flex
    .g-recaptcha(:data-sitekey="key")
  template(v-if="gRecaptchaResponse")
    h5 gRecaptchaResponse
    .alert.alert-success {{ gRecaptchaResponse }}
</template>
<script>
export default {
  data: () => {
    return {
      gRecaptchaResponse: "",
    };
  },
  methods: {},
  created: function () {
    const recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://www.google.com/recaptcha/api.js"
    );
    document.head.appendChild(recaptchaScript);

    recaptchaScript.onload = () => {
      const self = this;
      self.interval = setInterval(() => {
        const el = document.getElementById("g-recaptcha-response");
        if (el && self.gRecaptchaResponse !== el.value) {
          self.gRecaptchaResponse = el.value;
        }
      }, 500);
    };
  },
  mounted: () => {},
  destroyed: () => {
    clearInterval(self.interval);
  },
  computed: {
    key() {
      return this.$route.params.key;
    },
  },
};
</script>