<template lang="pug">
.container-fluid
  b-navbar(variant="primary", type="dark")
    b-navbar-brand recaptcha demo
  .d-flex
    b-input-group(style="width: 400px", prepend="site-key")
      b-form-input(v-model="siteKey")
      b-input-group-append(v-if="siteKey")
        b-btn(variant="primary", @click="go") link
</template>
<script>
export default {
  data: () => {
    return {
      siteKey: "",
    };
  },
  methods: {
    go: function () {
      this.$router.push({
        name: "site",
        params: {
          key: this.siteKey,
        },
      });
    },
  },
};
</script>