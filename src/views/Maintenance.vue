<template>
  <div class="loading">
    <span><i class="fas fa-wine-bottle"></i></span>
    <span><i class="fas fa-wine-bottle"></i></span>
    <span><i class="fas fa-wine-bottle"></i></span>
    <div class="line"></div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://use.fontawesome.com/releases/v5.8.1/css/all.css");

.loading {
  width: 585px;
  color: #e43fa0;
  position: relative;
  top: 25%;

  span {
    position: absolute;
    display: inline-block;
    animation-name: loading;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    opacity: 0;

    i {
      font-size: 50px;
    }
  }
}

@keyframes loading {
  0% {
    opacity: 1;
    transform: translateX(150px) rotate(-45deg);
  }
  50% {
    opacity: 1;
    transform: translateX(725px) rotate(-45deg);
  }
  100% {
    opacity: 0;
    transform: translateX(840px) translateY(100px) rotate(96deg);
  }
}
.loading span:nth-child(1) {
  animation-delay: 0.6s;
}
.loading span:nth-child(2) {
  animation-delay: 2s;
}
.loading span:nth-child(3) {
  animation-delay: 3.4s;
}

.line {
  width: 100%;
  height: 3px;
  background-color: #a0a0a0;
  transform: translate(450px, 52px);
}
.line:before {
  content: "Estamos em manutenção";
  position: absolute;
  font: normal normal bold 20px Lato;
  text-transform: uppercase;
  color: #666666;
  bottom: -30px;
  left: 0;
}

@media only screen and (max-width: 800px) {
  @keyframes loading {
    0% {
      opacity: 1;
      transform: translateX(-350px) rotate(-45deg);
    }
    50% {
      opacity: 1;
      transform: translateX(100px) rotate(-45deg);
    }
    100% {
      opacity: 0;
      transform: translateX(350px) translateY(100px) rotate(96deg);
    }
  }

  .line {
    width: 60vw;
    transform: translate(0px, 52px);
  }
}
</style>
