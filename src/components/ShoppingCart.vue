<template>
  <section v-show="open" class="shopping">
    <div class="shopping-box fade">
      <div class="wine-box">
        <h1 @click="closeShoppingCart()">WineBox ({{ productList.length }})</h1>
      </div>

      <div
        class="shopping-box-content"
        v-for="(wine, index) in productList"
        :key="index"
      >
        <button class="close" @click="removeProduct(wine)"></button>
        <img :src="wine.image" :alt="wine.name" />

        <div class="shopping-box-text">
          <p>{{ wine.name }}</p>
          <span>
            <button @click="btnCartMinus(wine)">-</button>
            <p>{{ wine.quantity }}</p>
            <button @click="btnCartPlus(wine)">+</button>
          </span>
        </div>

        <p class="shopping-box-price">
          {{ wine.pricePromotional | numeroPreco }}
        </p>
      </div>

      <div class="shopping-box-footer">
        <span class="shopping-box-footer-text"
          ><p>subtotal</p>
          <p class="shopping-box-price">
            {{ cartListTotal | numeroPreco }}
          </p>
        </span>
        <button>Finalizar pedido</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.shopping {
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem 0 0 0;
  z-index: 999;
}

.shopping-box {
  position: absolute;
  height: 100vh;
  width: 26%;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  right: 0;
  top: 0;

  .wine-box h1 {
    font: normal normal normal 20px Lato;
    color: #000000;
    text-align: left;
    background: #ffffff;
    padding: 1rem;
  }
  .wine-box h1::before {
    content: url("../assets/arrow.png");
    left: 20px;
    padding: 0 0.5rem 0 0;
  }

  .shopping-box-content {
    display: flex;
    align-items: flex-end;
    border-bottom: 0.5px solid #d5d5d5;
    box-sizing: content-box;
    padding: 1rem 0 0 0;
    margin: 0 0.5rem;
    position: relative;

    p {
      font: normal normal bold 14px Lato;
      text-align: left;
      color: #1d1d1b;
      padding: 0 0 1rem;
    }
    .shopping-box-text {
      height: 100%;
      width: 45%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;

      span {
        width: 50%;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border: 0.5px solid #888888;
        box-sizing: border-box;
        border-radius: 3px;

        p {
          padding: unset;
        }

        button {
          background: #f5f5f5;
          font: normal normal normal 20px "Open Sans";
          color: #888888;
        }
      }
    }
    .shopping-box-price {
      display: flex;
      justify-content: flex-end;
      width: 21%;
      font: normal normal bold 14px Lato;
      color: #c81a78;
    }
  }
  .close::after {
    content: url("../assets/close.png");
    position: absolute;
    right: 10px;
    top: 35px;
  }

  .shopping-box-footer {
    background: #ffffff;
    position: fixed;
    bottom: 0;
    padding: 1rem;
    width: 24%;
    height: 141px;

    .shopping-box-footer-text {
      display: flex;
      justify-content: space-between;
      padding: 1.5rem 0;

      p {
        font: normal normal bold 10px Lato;
        text-transform: uppercase;
        color: #666666;
      }

      .shopping-box-price {
        width: 23%;
        font: normal normal bold 14px Lato;
        color: #c81a78;
      }
    }
    button {
      width: 100%;
      height: 48px;
      background: #7fbc44;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      font: normal normal bold 14px Lato;
      color: #ffffff;
    }
  }
}

@media only screen and (max-width: 800px) {
  .shopping-box {
    width: 100vw;
  }

  .shopping-box-footer {
    width: 90vw !important;
  }
}
</style>

<script>
// import WineService from "../shared/services/WineService.js";

export default {
  name: "Shopping",

  data() {
    return {
      productList: [],
      open: false,
    };
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString("pr-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  computed: {
    cartListTotal: function () {
      return this.productList.reduce(function (accumulator, item) {
        return accumulator + item.pricePromotional * item.quantity;
      }, 0);
    },
  },
  methods: {
    btnCartPlus(wine) {
      wine.quantity++;
    },
    btnCartMinus(wine) {
      wine.quantity > 0 ? wine.quantity-- : wine.quantity;
    },
    removeProduct(wine) {
      this.productList = this.productList.filter((x) => x.id != wine.id);
      localStorage.removeItem("cartList");
      if (this.productList.length > 0) {
        localStorage.setItem("cartList", JSON.stringify(this.productList));
      }
    },
    openShoppingCart: function () {
      this.open = true;
    },
    closeShoppingCart() {
      this.open = false;
    },
  },
  mounted() {
    window.addEventListener("cartList-changed", (event) => {
      this.productList = JSON.parse(event.detail.storage);
    });
  },
};
</script>
