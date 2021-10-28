<template>
  <section>
    <div v-for="(wine, index) in wineCatalog" :key="index" class="white-box">
      <img :src="wine.image" :alt="wine.name" />
      <div class="wine-details">
        <p>{{ wine.name }}</p>
        <p class="wine-price">{{ wine.pricePromotional | numeroPreco }}</p>

        <div class="wine-text-price">
          <p class="wine-text">Sócio Wine</p>
          <p class="wine-price-pink">
            {{ wine.priceMember | numeroPreco }}
          </p>
        </div>
        <p class="wineTextMobile">
          Não sócio {{ wine.pricePromotional | numeroPreco }}
        </p>

        <Btn :available="wine.available" :product="wine" msg="Adicionar" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2.5rem 0;

  .white-box {
    display: grid;
    grid-template-columns: 2fr 2fr;
    background: #ffffff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
    padding: 1rem;
    margin: 0 0.5rem;
    position: relative;
    height: 210px;
  }

  img {
    align-self: center;
    margin: 0 auto;
  }

  .white-box div {
    padding: unset;
    margin: unset;
  }

  .white-box div p {
    font: normal normal bold 14px Lato;
    color: #1d1d1b;
  }

  .wine-details {
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: left;

    .wine-price {
      font: normal normal bold 12px Lato;
      text-decoration-line: line-through;
      color: #888888;
    }

    .wine-text {
      font: normal normal bold 10px Lato;
      text-transform: uppercase;
      color: #1d1d1b;
      padding: 0 0 0;
    }

    .wine-price-pink {
      font: normal normal bold 12px Lato;
      color: #b6116e;
    }
    .wineTextMobile {
      display: none;
    }
  }
}

@media only screen and (max-width: 800px) {
  section {
    .white-box {
      display: flex;
      flex-direction: column;
      width: 180px;
      height: auto;

      div p {
        padding: 0 0 1rem;
      }

      .wine-details {
        text-align: center;
        margin: 0 auto;
        padding: 1rem;
      }

      .wine-text-price {
        flex-direction: row;
        display: flex;
        justify-content: space-evenly;

        .wine-text {
          width: 40%;
          text-align: right;
        }
      }
      .wineTextMobile {
        display: block;
        font: normal normal bold 10px Lato;
        text-transform: uppercase;
        color: #888888;
        padding: 0 0 0;
      }
    }
  }
}
</style>

<script>
import Btn from "@/components/Btn.vue";
import WineService from "../shared/services/WineService.js";

export default {
  components: {
    Btn,
  },
  data() {
    return {
      wineCatalog: {},
      cart: [],
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

  methods: {
    async getCatalog() {
      WineService.GetWineCatalog().then(
        ((result) => {
          this.wineCatalog = result;
        }).bind(this)
      );
    },
  },

  mounted() {
    this.getCatalog();
  },
};
</script>
