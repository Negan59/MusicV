<template>
  <div class="admin-musics">
    <PageTitle icon="fa fa-music" main="Registro de músicas"
      sub="Cadastro" />
    <div class="admin-pages-tabs">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Musicas" active>
            <MusicAdmin />
          </b-tab>
          <b-tab title="Musicas Validadas">
            <ValidAdmin />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
 import PageTitle from '../template/PageTitle'
 import MusicAdmin from '../music/MusicAdmin'
 import ValidAdmin from '../music/ValidAdmin'
 
export default {
  name:"AdminMusics",
  components:{PageTitle,MusicAdmin,ValidAdmin}
}
</script>

<style>

</style>