# [Install dependency](https://developer.okta.com/code/react/okta_react_sign-in_widget)
```
npm i react-router-dom @okta/okta-react @okta/okta-signin-widget
```

> Create `config.js` in root directory and add your credential from okta.

config.js
```js
module.exports = {
  clientId: 'xxxxxxxxxxxx'
  ,issuer:'https://dev-555555.oktapreview.com/oauth2/default'
  ,baseUrl:'https://dev-555555.oktapreview.com'

}
```