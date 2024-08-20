<template>
  <div class="login-container d-flex">
    <div class="left-section">
      <div class="overlay">
        <div class="branding">
          <h1>Cutify</h1>
          <p>Embrace self-care and indulge in a world of beauty and wellness. Explore our curated selection of services and effortlessly book appointments, right at your convenience.</p>
        </div>
      </div>
    </div>
    <div class="right-section">
      <div class="login-form card">
        <div class="card-body">
          <h2 class="card-title">Sign up as a customer</h2>
          <p class="card-text">Please enter your details to continue with your account creation</p>

          <div class="social-login mb-3">
            <button class="btn btn-light">
              <i class="fab fa-google"></i>
            </button>
            <button class="btn btn-light">
              <i class="fab fa-apple"></i>
            </button>
            <button class="btn btn-light">
              <i class="fab fa-facebook-f"></i>
            </button>
          </div>

          <p class="text-center mb-3">or</p>

          <form @submit.prevent="login">
            <div class="row">
              <div class="col-md-6 form-group">
                <label for="firstName" class="sr-only">First Name</label>
                <input type="text" id="firstName" class="form-control" v-model="form.firstName" placeholder="First Name" required>
              </div>
              <div class="col-md-6 form-group mt-4 mt-md-0">
                <label for="lastName" class="sr-only">Last Name</label>
                <input type="text" id="lastName" class="form-control" v-model="form.lastName" placeholder="Last Name" required>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-6 form-group">
                <label for="email" class="sr-only">Email address</label>
                <input type="email" id="email" class="form-control" v-model="form.email" placeholder="Email address" required>
              </div>
              <div class="col-md-6 form-group mt-4 mt-md-0">
                <label for="phone" class="sr-only">Phone Number</label>
                <input type="text" id="phone" class="form-control" v-model="form.phone" placeholder="Phone Number" required>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-6 form-group">
                <label for="password" class="sr-only">Password</label>
                <input type="password" id="password" class="form-control" v-model="form.password" placeholder="Password" required>
              </div>
              <div class="col-md-6 form-group mt-4 mt-md-0">
                <label for="confirmPassword" class="sr-only">Confirm Password</label>
                <input type="password" id="confirmPassword" class="form-control" v-model="form.confirmPassword" placeholder="Confirm Password" required>
              </div>
            </div>

          </form>

          <div class="text-left mt-5">
            <input type="checked" class="form-check-input" id="">
              <label class="form-check-label me-3" for=""> At least a character strong</label>
                <input type="checkbox" class="form-check-input me-1" id="">
              <label class="form-check-label" for=""> One lower case character</label>
          </div>

          <div class="text-left">
            <input type="checkbox" class="form-check-input" id="">
              <label class="form-check-label me-3 me-1" for=""> One upper case </label>
              <input type="checkbox" class="form-check-input" id="">
              <label class="form-check-label" for=""> A symbol or special character</label>
              
          </div>
            <div class="form-group form-check mt-4">
              <input type="checkbox" class="form-check-input" id="rememberMe">
              <label class="form-check-labe" for="" style="font-size: 15px;"> By registering you are agreeing to <router-link to="#">our Terms of use</router-link> and <router-link to="#">Privacy Policy</router-link></label>
            </div>
                        <div class="form-group form-check mt-4">
            <button type="submit" class="btn btn-primary w-100 mt-4">Sign up</button>
            </div>
          <div class="text-center mt-4">
            Already have an account? <router-link to="/login">Login</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        rememberMe: false,
      },
    };
  },
  methods: {
    login() {
      // Handle login logic here
      console.log('Form submitted:', this.form);
    },
  },
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
}

.left-section {
  background-image: url('@/assets/images/contact/bg.png'); /* Replace with your background image */
  background-size: cover;
  background-position: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 20px;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5); /* Dark overlay for better text visibility */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.branding h1 {
  font-size: 48px;
  font-weight: bold;
}

.branding p {
  font-size: 18px;
  margin-top: 20px;
}

.right-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.login-form {
  width: 100%;
  max-width: 600px;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: none;
}

.login-form .card-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.login-form .card-text {
  margin-bottom: 20px;
}

.social-login button {
  width: 48px;
  height: 48px;
  margin-right: 10px;
  font-size: 20px;
}

.social-login button:last-child {
  margin-right: 0;
}

.form-control {
  border-radius: 5px;
}

.forgot-password a {
  color: #007bff;
  text-decoration: none;
}

.forgot-password a:hover {
  text-decoration: underline;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.text-center a {
  color: #007bff;
}

.text-center a:hover {
  text-decoration: underline;
}

/* Media Query for Small Devices */
@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
  }

  .left-section,
  .right-section {
    flex: none;
    width: 100%;
    min-height: 50vh;
  }

  .branding h1 {
    font-size: 32px;
  }

  .branding p {
    font-size: 16px;
  }
}
</style>
