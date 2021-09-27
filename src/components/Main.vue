<template>
  <div class="main">
    <h1 class="title">QR Code Generator</h1>
    <p class="subtitle">Generate for free QR Codes for your websites</p>

    <section class="container">
      <v-container fill-height fluid>
          <div class="inputZone child">
            <label for="value">Enter your URL: </label>
            <input v-model="value">
          </div>

          <div class="outputQR child">
            <qrcode-vue :value="value" :size="size" level="H" id="qrcode"/>
          </div>
      </v-container>
    </section>

  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  name: 'Main',
  data() {
    return {
      value: '',
      size: window.innerWidth*0.3
    }
  },
  props: {},
  components: {
    QrcodeVue
  },
  methods: {
    downloadImg: function () {
      var canvas = document.getElementById('qrcode');
      var img = canvas.toDataURL("image/png");
      console.log(img);
    }
  }
}
</script>

<style scoped>

h1.title{
  text-align: center;
}

p.subtitle{
  text-align: center;
}

.container{
  display: flex;
  justify-content: center;
}

.child{
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
}

</style>