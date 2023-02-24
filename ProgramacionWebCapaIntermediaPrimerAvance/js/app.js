
document.getElementById('foto').onchange=function(e){

  let reader=new FileReader();
  reader.readAsDataURL(e.target.files[0]);
reader.onload=function(){
    let preview = document.getElementById('preview');
    imagen = document.createElement('img');
    imagen.src = reader.result;
    imagen.style.width="320px";
    imagen.style.height="320px";
    preview.append(imagen);

}

}

const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")


form.addEventListener("submit", e=>{
     e.preventDefault()
     let warnings = ""
     let entrar = false
     let RegexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
     let RegexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#])[A-Za-z\d$@$!%*?&#]{8}/ 
     parrafo.innerHTML = ""
   
     if(nombre.value.length <6){
     warnings += `El nombre no es valido <br>`
     entrar = true
    }
    console.log(RegexEmail.test(email.value))
    if(!RegexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }

    if(!RegexPassword.test(pass.value)){
        warnings += `La contraseña no es valida debe tener 8 caracteres, al menos una letra mayuscula y minuscula,un digito y un caracter especial <br>`
        entrar = true
    }

   if(entrar){
    parrafo.innerHTML = warnings
   }else{
    parrafo.innerHTML = "Enviado"
   }






})

