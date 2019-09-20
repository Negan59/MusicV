<template>
  <div class="valid-admin">
      <b-table hover striped :items="musics" :fields="fields">
        
      </b-table>
  </div>
</template>

<script>
import{baseApiUrl, showError} from '../../global'
import axios from 'axios'
export default {
 name:'ValidAdmin',
 data: function() {
      return {
          mode:'save',
          music: {},
          musics: [],
          fields: [
              {key: '_id', label: 'Id'},
              {key: 'name', label: ' Nome', sortable: true},
              {key: 'artist', label: 'Artista', sortable:true},
              {key: 'music', label: 'Local',sortable:true}
              
          ]
      }
 },
  methods:{
    loadMusics(){
       const url = `${baseApiUrl}/vmusic`
       console.log(url)
       axios.get(url).then(res => {
          console.log(res.data)
        this.musics = res.data
      })
      }
    },mounted(){
        this.loadMusics()
     }
}
</script>

<style>

</style>