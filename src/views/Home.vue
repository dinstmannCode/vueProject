<template>
  <div>
    <div @click="open()">
      <span class="bag"></span>
    </div>
    <div class="content">
      <img class="img-desk" alt="Vue logo" src="../assets/banner.png" />
      <img
        class="img-mobile"
        alt="Vue logo"
        src="../assets/banner-mobile.png"
      />
      <ProductList />
      <ShoppingCart ref="cart" />
    </div>
  </div>
</template>

<style scoped>
.bag {
  background: #f6b554;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: inline;
  position: absolute;
  right: 5%;
  top: 10px;
}
.bag::after {
  content: url("../assets/bitmap.png");
}

.content {
  max-width: 1200px;
  padding: 5rem 0 0;
  margin: 0 auto;
  background: #f5f5f5;
}

.img-mobile {
  display: none;
}

@media only screen and (max-width: 1180px) {
  .content {
    width: 100vw;
    padding: 2rem 0;
    overflow: hidden;
  }

  .img-mobile {
    display: block;
    margin: 0 auto;
  }

  .img-desk {
    display: none;
  }
}
</style>

<script>
import ProductList from "@/components/ProductList.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";

export default {
  name: "Home",
  components: {
    ProductList,
    ShoppingCart,
  },
  data() {
    return {
      openCart: { type: Boolean, default: true },
    };
  },
  methods: {
    open() {
      this.$refs.cart.openShoppingCart();
    },
  },
};
</script>
