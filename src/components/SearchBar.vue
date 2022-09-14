<template>
  <div>
    <input
    class="rounded-l-full w-full py-6 px-6 text-gray-700 leading-tight focus:outline-none"
    id="search"
    type="text"
    placeholder="Search"
    v-model="this.$store.state.query"
    @keyup="this.$store.dispatch('getProductResults', this.$store.state.query)"
    >
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
