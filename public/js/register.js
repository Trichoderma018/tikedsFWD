import {postUser} from "../services/llamadosUsuarios.js"
const username = document.getElementById("username")
const pass = document.getElementById("pass")
const email = document.getElementById("email")
const register = document.getElementById("register")

register.addEventListener("click", function () {
    postUser(pass.value,email.value,username.value);
})