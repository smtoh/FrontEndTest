<template>
  <div>
    <input
    class="rounded-l-full w-full py-6 px-6 text-gray-700 leading-tight focus:outline-none"
    id="search"
    type="text"
    placeholder="Search"
    v-model="this.$store.state.query"
    >
    
    <button
      class="bg-blue-900 text-white rounded-full p-2 hover:bg-blue-700 focus:outline-none w-12 h-12 flex items-center justify-center"
      @click="this.$store.dispatch('getProductResults', this.$store.state.query)"
    >
    </button>

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
