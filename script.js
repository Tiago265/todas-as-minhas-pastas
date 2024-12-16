function cad(){
    let cadEmail = document.getElementById("cadEmail").value;
    let cadSenha = document.getElementById("cadSenha").value;
    const bancodeDados = JSON.parse(localStorage.getItem("bancodeDados")) || []
    const cadUsuario = {cadEmail, cadSenha}
    bancodeDados.push(cadUsuario)
    localStorage.setItem("bancodeDados", JSON.stringify(bancodeDados))
    alert("Usuario cadastrado com sucesso!")
    window.location.href = "index.html"
}
function cadLocation(){
    window.location.href = "cad.html"
}
function logar(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    const bancodeDados = JSON.parse(localStorage.getItem("bancodeDados")) || []
   for (let usuario of bancodeDados){
    if(email == usuario.cadEmail && senha == usuario.cadSenha){
        alert("Parabéns, você logou!")
        break;
      }
      window.location.href = "home.html"
    }
  }  