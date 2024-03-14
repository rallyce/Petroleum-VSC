<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5" >
        <div class="card bg-dark text-white"  id="card-12" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">
            <img src="@/assets/images/logo.png" style="margin: auto; width: 170px;"/>
            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Inicio de sesion</h2>
              <p class="text-white-100 mb-5">Por favor ingrese su nombre de usuario y contraseña</p>

  
              <div class="form-outline form-white mb-4">
                <input type="text" id="typeEmailX" class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX">Usuario</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX">Contraseña</label>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Olvidaste tu contraseña?</a></p>

              <a href="/dashBoardAdmin" class="btn btn-outline-light btn-lg px-5" type="submit">Ingresar</a>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p class="mb-0">No tienes una cuenta? <a href="#!" class="text-white-50 fw-bold">Registrate</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { ref } from 'vue';

const nombre = ref('Usuario')

export {nombre}

export default {
    name: 'Login',

    data(){
      return{
        nombre
      }
    }
}




</script>

