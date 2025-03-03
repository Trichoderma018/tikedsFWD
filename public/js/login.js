import {getUser} from "../services/llamadosUsuarios.js"
const username = document.getElementById("username")
const pass = document.getElementById("pass")
const iniciar = document.getElementById("iniciar")

iniciar.addEventListener("click", async function () {
    
    const usuariosRegistrados = await getUser();
    
    
    
})