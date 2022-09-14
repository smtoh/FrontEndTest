<template>
  <div>
    <input
    class=""
    id="search"
    type="text"
    placeholder="Search"
    v-model="this.$store.state.query"
    @keyup="this.$store.dispatch('getProductResults', this.$store.state.query)"
    style="height: 30px; width: 1000px; margin: 24px"
    
    />


    <results-set />
  </div>
</template>

<script>
import { getProductResults } from '../store/actions';
import ResultsSet from './ResultsSet.vue'

  export default {
    props: ['SearchBar'],

    components: {
      ResultsSet
    },

    computed: {
      query() {
        return this.$store.state.query
      }
    }
  }
</script>
