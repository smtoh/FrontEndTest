<template>
    <div class>
      <img :src="product.image_url" />
      <h1>{{ product.title }}</h1>
    </div>
  </template>
  
  <script>
    export default {
      props: ["product"]
    }
  </script>