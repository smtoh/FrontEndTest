<template>
  <div class = "col">
      <div class="card text-bg-dark mb-3 h-100">
        <img :src="product.image_url" class="card-img-top" />
        <div class ="card-body">
          <h5 class="card-title" style="text-align: center">{{ product.title }}</h5>
        </div>
        <div class="card-footer d-grid gap-2 col-6 mx-auto">
          <h6 class="card-text" style="text-align: center">From £{{ product.price.min }}</h6>
          <a :href=product.link class="mx-auto"><button class="btn btn-primary btn-light btn-block" type="button" style="width: 100px">View</button></a>
        </div>
      </div>
    </div>
</template>
  
  <script>
    export default {
      props: ["product"]
    }
  </script>