import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";

Vue.config.productionTip = false;
Vue.use(VueApollo);

const httpLink = new HttpLink({
  uri: `http://localhost:4000/`
});

const link = httpLink;

// Create the apollo client
const apolloClient = new ApolloClient({
  // Tells Apollo to use the link chain with the http link we set up.
  link,
  // Handles caching of results and mutations.
  cache: new InMemoryCache(),
  // Useful if you have the Apollo DevTools installed in your browser.
  connectToDevTools: true
});

const apolloProvider = new VueApollo({
  // Apollo 2.0 allows multiple clients to be enabled at once.
  // Here we select the default (and only) client.
  defaultClient: apolloClient
});

new Vue({
  router,
  // Inject apolloProvider for components to use.
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
