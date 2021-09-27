<template>
  <div class="main">

    <section class="container">

      <v-container fill-height fluid>

        <section class="child">
          <h1 class="title">QR Code Generator</h1>
          <p class="subtitle">Generate for free QR Codes for your websites</p>
        </section>

        <section class="inputZone child">
          <label for="value">Enter your URL: </label>
          <input v-model="value">
        </section>

        <section class="outputQR child">
          <qrcode-vue :value="value" :size="size" level="H" id="qrcode"/>
        </section>

        <section class="child button">
          <button v-on:click="downloadImg()">Download QR Code</button>
        </section>

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
    downloadImg: function (event) {
      if(event) event.preventDefault();
      
      var canvas = document.getElementById('qrcode');
      var img = canvas.toDataURL("image/png");

      let xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';

      xhr.onload = function () {
        let a = document.createElement('a');
        a.href = window.URL.createObjectURL(xhr.response);

        a.download = 'qrCode.png';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
      xhr.open('GET', img);
      xhr.send();
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

section.button{
  display: flex;
  justify-content: center;
}

button{
  font-size: 20px;
}

</style>