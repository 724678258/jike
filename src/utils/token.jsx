// 封装和token相关的方法  存 取  删

const tokenKey = 'token_key'

function setToken(token){
    localStorage.setItem(tokenKey,token)

}

function getToken(){
  return  localStorage.getItem(tokenKey)

}

function removeToken(){
    localStorage.removeItem(tokenKey)

}

export {setToken,getToken,removeToken}