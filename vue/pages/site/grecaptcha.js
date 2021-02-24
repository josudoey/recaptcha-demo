/* eslint-env browser */
// ref https://developers.google.com/recaptcha/docs/display
const Q = require('q')
const ready = Q.defer()

const recaptchaScript = document.createElement('script')
let grecaptcha

recaptchaScript.setAttribute(
  'src',
  'https://www.google.com/recaptcha/api.js?onload=recaptchaOnload&render=explicit'
)
recaptchaScript.setAttribute('async', '')
recaptchaScript.setAttribute('defer', '')
document.head.appendChild(recaptchaScript)
window.recaptchaOnload = () => {
  grecaptcha = window.grecaptcha
  ready.resolve()
}

module.exports = {
  ready: () => ready.promise,
  render (el, opts) {
    return grecaptcha.render(el, opts)
  }
}
