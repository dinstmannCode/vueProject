export default {
  async GetWineCatalog() {
    try {
      const url = `https://run.mocky.io/v3/908ec5b5-1e5a-4602-9008-47719f7c6759`;
      const res = await fetch(url);
      const data = await res.json();
      data.map((x, index) => {
        x.id = index;
        x.quantity = 0;
      });
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
  },
  async GetCartList() {
    try {
      return localStorage.getItem("cartList")
        ? JSON.parse(localStorage.getItem("cartList"))
        : [];
    } catch (err) {
      console.error(err);
      return null;
    }
  },
};
