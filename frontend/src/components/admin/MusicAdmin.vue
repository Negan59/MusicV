<template>
  <div class="music-admin">
     <b-form>
       <b-row>
         <b-col md="6" sm="12">
           <b-form-group label="Nome:" label-for="music-name">
                      <b-form-input id="music-name" type="text"
                         v-model="music.name" required
                         placeholder="Informe a musica..."
                      />
                  </b-form-group>
          </b-col>
         </b-row>
         <b-row>
           <b-col>
            <b-button variant="primary" class="ml-2" @click="update">Aceitar</b-button>
            <b-button variant="danger" class="ml-3" @click="remove">Recusar</b-button>
          </b-col>
         </b-row>
     </b-form>
      <b-table hover striped :items="musics" :fields="fields">
        
      </b-table>

  </div>
</template>

<script>
import{baseApiUrl, showError} from '../../global'
import axios from 'axios'
export default {
 name:'MusicAdmin',
 data: function() {
      return {
          mode:'save',
          music: {},
          musics: [],
          fields: [
              {key: '_id', label: 'Id'},
              {key: 'name', label: ' Nome', sortable: true},
              {key: 'artist', label: 'Artista', sortable:true},
              {key: 'music', label: 'Local'},
              {key: 'validation', label: 'validade'}
              
          ]
      }
 },
 methods:{
    loadMusics(){
      const url = `${baseApiUrl}/musicas`
      console.log(url)
      axios.get(url).then(res => {
        this.musics = res.data
      })
    },
    remove(){
      const id = this.music.name
      console.log(this.music.name)
      axios.delete(`${baseApiUrl}/music/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    
                })
                .catch(showError)
    },
    loadMusic(user, mode){
          this.mode = mode
          this.user = { ...user}
        },
    update(){
       const id = this.music.name
      console.log(this.music.name)
      axios.post(`${baseApiUrl}/music/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    
                })
                .catch(showError)
    }
 
 },mounted(){
   this.loadMusics()
 }
}

 
</script>

<style>

</style>