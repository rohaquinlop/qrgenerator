<template>
  <footer>
    <div class="content">
      <h3>Robin Hafid Quintero Lopez</h3>
      <p>Software developer at Banco de Occidente and Systems engineering student at Pontificia Universidad Javeriana Cali, Colombia.</p>
      <ul class="socials">
        <li><a href="https://github.com/rohaquinlop"><i class="fa fa-github"></i></a></li>
        <li><a href="https://www.linkedin.com/in/robin-hafid-quintero-lopez/"><i class="fa fa-linkedin-square"></i></a></li>
        <li><a href="https://www.youtube.com/channel/UCpA2-pYqfzbhdU80_4N-vPg"><i class="fa fa-youtube"></i></a></li>
        <li><a href="https://www.instagram.com/therobinquintero/"><i class="fa fa-instagram"></i></a></li>
      </ul>
    </div>

    <div class="bottom">
      <p>copyright &copy;2021 Robin Hafid Quintero Lopez. designed by <span>rohaquinlop</span></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

*{
  box-sizing: border-box;
}

footer{
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  background: #111;
  height: auto;
  font-family: "Open Sans";
  padding-top: 40px;
  color: #fff;
}

.content{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.content h3{
  font-size: 1.8rem;
  font-weight: 400;
  text-transform: capitalize;
  line-height: 3rem;
}

.content p{
  max-width: 500px;
  margin: 10px auto;
  line-height: 28px;
  font-size: 14px;
}

.socials{
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 3rem 0;
}

.socials li{
  margin: 0 10px;
}

.socials a{
  text-decoration: none;
  color: #fff;
}

.socials a i{
  font-size: 1.1rem;
  transition: color .4s ease;
}

.socials a:hover i{
  color: lime;
}

.bottom{
  background: #000;
  padding: 20px 0;
  text-align: center;
}

.bottom p{
  font-size: 14px;
  word-spacing: 2px;
  text-transform: capitalize;
}

.bottom span{
  text-transform: uppercase;
  opacity: .4;
  font-weight: 200;
}

</style>