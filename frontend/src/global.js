import vue from 'vue'

export const userKey = '___MusicV'
export const baseApiUrl = 'http://localhost:4000'
export function showError(e){
    if(e && e.response && e.response.data){
        vue.toasted.global.defaultError({msg: e.response.data})
    }else if(typeof e === 'string'){
        vue.toasted.global.defaultError({msg:e})
    }
    else{
        vue.toasted.global.defaultError()
    }
}

export default {baseApiUrl, showError, userKey}