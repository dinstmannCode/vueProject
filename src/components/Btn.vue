<template>
  <button :disabled="!available" @click="addProductCart()">{{ msg }}</button>
</template>

<style scoped>
button {
  height: 40px;
  background: #b6116e;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
}
button:disabled {
  background: #a0a0a0;
  cursor: auto;
}
@media only screen and (max-width: 800px) {
  button {
    position: absolute;
    bottom: -50px;
    width: 100%;
    left: 0;
  }
  button:disabled {
    background: #a0a0a0;
  }
}
</style>

<script>
export default {
  name: "Btn",
  props: {
    msg: String,
    available: Boolean,
    product: Object,
  },
  data() {
    return {
      cartList: [],
    };
  },
  methods: {
    addProductCart() {
      this.cartList = [];
      if (localStorage.cartList) {
        this.cartList = JSON.parse(localStorage.cartList);
        localStorage.removeItem("cartList");
      }
      let item = this.cartList.find((x) => x.id == this.product.id);
      if (item) {
        item.quantity = item.quantity + 1;
      } else {
        this.product.quantity = 1;
        this.cartList.push(this.product);
      }
      localStorage.setItem("cartList", JSON.stringify(this.cartList));
      window.dispatchEvent(
        new CustomEvent("cartList-changed", {
          detail: {
            storage: localStorage.getItem("cartList"),
          },
        })
      );
    },
  },
};
</script>
