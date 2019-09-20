<template>
  <aside class="menu" v-show="isMenuVisible">
    
    <router-link to="/music"><button class="button" >Musica</button></router-link>
    
  </aside>
  
</template>

<script>
import {mapState} from 'vuex'

export default {
  name:"Menu",
  computed: mapState(['isMenuVisible'])
}
</script>

<style>
 .menu{
     grid-area: menu;
     background: linear-gradient(to right,#232526,#414345);

     display: flex;
     flex-direction: column;
     flex-wrap: wrap;
 }
 .menu a,
  .menu a:hover {
      color: #fff;
      text-decoration: none;
  }
  .button{
    height: 200px;
    font-weight: 100;
    width: 300px;
    background: linear-gradient(to right,#232526,#414345);
    color: #fff;
  }
</style>