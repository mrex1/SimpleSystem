import axios from 'axios'

const baseUrl = "http://localhost:8000/"

const services = {
    "login" : "api/auth/login/",
    "logout":"api/auth/logout/",
    "register" : "api/auth/register/",
    "jobs" : "api/users/jobs/"
}

function getUrl(service){
    return baseUrl+services[service]
}

export function login(user,callback,errorHandle=e=>console.warn("this is an error"+e)){
    let url = getUrl('login')
    axios.post(url,user)
    .then(callback)
    .catch(errorHandle)
}

export function logout(key,callback,errorHandle=e=>console.warn("this is an error"+e)){
    let url = getUrl('logout')
    axios.post(url,{key})
    .then(callback)
    .catch(errorHandle)
}

export function register(user,callback,errorHandle=e=>console.warn("this is an error"+e)){
    let url = getUrl('register')
    axios.post(url,user)
    .then(callback)
    .catch(errorHandle)
}

export function getJobs(auth_token,callback,errorHandle=e=>console.warn("this is an error"+e)){
    let url = getUrl('jobs')+auth_token
    axios.get(url)
    .then(callback)
    .catch(errorHandle)
}

export function postJobs(auth_token,newJob,callback,errorHandle=e=>console.warn("this is an error"+e)){
    let url = getUrl('jobs')+auth_token
    axios.post(url,newJob)
    .then(callback)
    .catch(errorHandle)
}

export function delJobs(auth_token,jobId,callback,errorHandle=e=>console.warn("this is an error"+e)){
    let url = getUrl('jobs')+auth_token
    axios.delete(url,{data:{id:jobId+""}})
    .then(callback)
    .catch(errorHandle)
}