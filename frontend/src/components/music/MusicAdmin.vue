<template>
  <div class="music-admin">
      <b-form>
        <b-row>
              <b-col md="6" sm="12">
                  <b-form-group label="Nome:" label-for="music-name">
                      <b-form-input id="music-name" type="text"
                         v-model="music.name" required
                         placeholder="Informe o nome da musica..."
                      />
                  </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6" sm="12">
                 <div class="file">
                   <form enctype="multipart/form-data">
                     <div class="fields">
                       <label>Upload File</label>
                       <input type="file" 
                              ref="file"
                              @change="onSelect"/>
                     </div>
                     
                   </form>
                  </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6" sm="12">
                  <b-form-group label="Artista:" label-for="music-artist">
                      <b-form-input id="music-artist" type="text"
                         v-model="music.artist" required
                         placeholder="Informe o nome do artista..."
                      />
                  </b-form-group>
              </b-col>
            </b-row>
            <b-row>
               <b-col xs="12">
                 <b-button variant="primary" v-if="mode === 'save'"
                 @click="onSubmit">Salvar</b-button>
                 <b-button class="ml-2" @click="reset">Cancelar</b-button>
                </b-col>
             </b-row>
      </b-form>
  </div>
</template>

<script>
import{baseApiUrl, showError} from '../../global'
import axios from 'axios'
export default {
  name: 'MusicAdmin',
  data: function() {
      return {
          mode:'save',
          music: {},
          fields:[
              {key: 'name', label: 'Nome', sortable: true},
              {key: 'music', label:'File'},
              {key: 'artist', label:'Artista'}
          ]
          }
   },
   methods:{
      onSelect(){
        const file = this.$refs.file.files[0]
        this.file = file
      },
      async onSubmit(){
        const formdata = new FormData()
        formdata.append('file',this.file)
        console.log(formdata)
        const url1 = `${baseApiUrl}/upload/${this.music.artist}/${this.music.name}`
          let f = await axios.post(url1,formdata)
                    .then(()=>{
                 this.$toasted.global.defaultSucess()
                 this.reset()
             })
             .catch(showError)
          
        
      },
      async save(){
        const formData = new FormData()
        formData.append('file', this.file)
        const url = `${baseApiUrl}/music/1${music.name}${music.artist}`
        console.log(this.music.music)
            await axios.post(url,formData,this.music)
             .then(()=>{
                 this.$toasted.global.defaultSucess()
                 this.reset()
             })
             .catch(showError)
      },
      reset(){
        this.music = {}
      }

   }

}

</script>

<style>

</style>