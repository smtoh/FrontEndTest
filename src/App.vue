<template>
  <router-view />
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import ResultsSet from './components/ResultsSet.vue'

export default {
  name: "Results",
  components: {
    SearchBar,
    ResultsSet
  }
}
</script>


<style></style>
