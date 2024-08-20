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
          <h2 class="card-title">Welcome Back</h2>
          <p class="card-text">Enter your details to login to your account.</p>
          
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
            <div class="form-group">
              <label for="email" class="sr-only">Email address</label>
              <input type="email" id="email" class="form-control" v-model="form.email" placeholder="Email address" required>
            </div>
            <div class="form-group mt-3">
              <label for="password" class="sr-only">Password</label>
              <input type="password" id="password" class="form-control" v-model="form.password" placeholder="Password" required>
              <div class="forgot-password text-end mt-2">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <div class="form-group form-check mt-3">
              <input type="checkbox" class="form-check-input" id="rememberMe" v-model="form.rememberMe">
              <label class="form-check-label" for="rememberMe">Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary w-100 mt-4">Sign In</button>
          </form>

          <div class="text-center mt-4">
            <p>Don't have an account? <a href="#">Sign up as a customer</a></p>
            <a href="#" class="btn btn-link">Sign up as a professional</a>
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
        email: '',
        password: '',
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
  max-width: 400px;
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
