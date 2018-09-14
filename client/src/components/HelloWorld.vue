
<template>
  <p v-if="alligatorGraphQL">From GraphQL: {{alligatorGraphQL[0].shortUrl}}</p>
</template>

<script>
import { GET_SHORT_URL } from "../utils/graphql_tags";

export default {
  data() {
    return {
      alligatorGraphQL: null
    };
  },

  apollo: {
    // They key is the name of the data property
    // on the component that you intend to populate.
    alligatorGraphQL: {
      // Yes, this looks confusing.
      // It's just normal GraphQL.
      query: GET_SHORT_URL,

      variables: {},

      // Apollo maps results to the name of the query, for caching.
      // So to update the right property on the component, you need to
      // select the property of the result with the name of the query.
      update: result => result.getUrls
    }
  }
};
</script>