import template from './template.pug'
export default {
  template,
  data: () => {
    return {
      siteKey: ''
    }
  },
  methods: {
    go: function () {
      this.$router.push({
        name: 'site',
        params: {
          key: this.siteKey
        }
      })
    }
  }
}
