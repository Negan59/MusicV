<template>
  <div class="admin-pages">
    <PageTitle icon="fa fa-cogs" main="Administração do sistema"
      sub="Cadastros e Autorizações" />
    <div class="admin-pages-tabs">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Usuários" active>
            <UserAdmin />
          </b-tab>
          <b-tab title="Músicas">
            <MusicAdmin />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import UserAdmin from './UserAdmin'
import MusicAdmin from './MusicAdmin'


export default {
  name:'AdminPages',
  components: { PageTitle,UserAdmin,MusicAdmin }
}
</script>

<style>

</style>