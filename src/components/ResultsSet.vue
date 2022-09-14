<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <product-card v-for="product in products" :key="product.id" :product="product" />

  </div>


</template>

<script>
  import ProductCard from './ProductCard.vue'

  export default {
    props: ['ResultsSet'],
    
    components: {
      ProductCard,
    },

    computed: {
      products() {
        return this.$store.getters.searchProduct
      },
    },

    mounted() {
      this.$store.dispatch('getProductResults', this.$store.state.query)
    }
  };
</script>