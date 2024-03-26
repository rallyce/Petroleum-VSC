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

              <Form @submit="handleLogin" :validation-schema="schema">
              <div class="form-group">
              <div class="form-outline form-white mb-4">
                <label class="form-label" for="username">Usuario</label>
                <Field name="username" type="text" id="typeEmailX" class="form-control form-control-lg" />
                <ErrorMessage name="username" class="error-feedback" />
              </div>
              </div>

              <div class="form-group">
              <div class="form-outline form-white mb-4">
                <label class="form-label" for="username">Contraseña</label>
                <Field name="password" type="password" id="typePasswordX" class="form-control form-control-lg" />
                <ErrorMessage name="password" class="error-feedback" />
              </div>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Olvidaste tu contraseña?</a></p>

              <div class="form-group">
              <button class="btn btn-outline-light btn-lg px-5" :disabled="loading">
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm">
                </span>

              <span>Ingresar</span>
              </button>
            </div>

              <div class="form-group">
                <div v-if="message" class="alert alert-danger" role="alert">
                  {{ message }}
                </div>
              </div>

            </Form>
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
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
    name: 'Login',
    
    components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Se requiere ingresar el nombre de usuario o correo!"),
      password: yup.string().required("Se requiere ingresar la contraseña!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/dashBoardAdmin");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/dashBoardAdmin");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },

}




</script>

