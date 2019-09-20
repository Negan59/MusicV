import vue from 'vue'
import Toasted from 'vue-toasted'

vue.use(Toasted,{
    iconPack: 'fontawesome',
    duration: 3000
})

vue.toasted.register(
    'defaultSucess',
    'Operação realizada com sucesso!',
    {type: 'sucess', icon: 'check'}
)

vue.toasted.register(
    'defaultError',
    payload=>!payload.msg ? 'Oops... Erro inesperado.' : payload.msg,
    {type: 'error',icon:'times'}
)