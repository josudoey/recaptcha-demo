import template from './template.pug'
import grecaptcha from './grecaptcha'
export default {
  template,
  data: () => {
    return {
      gRecaptchaResponse: ''
    }
  },
  methods: {},
  async created () {
    await grecaptcha.ready()
    const self = this
    grecaptcha.render(this.$refs.recaptcha, {
      sitekey: this.key,
      callback: (gRecaptchaResponse) => {
        self.gRecaptchaResponse = gRecaptchaResponse
      }
    })
  },
  mounted: async () => {

  },
  destroyed: () => {
  },
  computed: {
    key () {
      return this.$route.params.key
    }
  }
}
