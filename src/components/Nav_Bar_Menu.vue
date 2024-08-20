<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white navbar-custom">
    <div class="container">
      <!-- Navbar brand with logo -->
      <a class="navbar-brand" href="">
        <img src="@/assets/logo.png" alt="Cutify Logo" width="84" height="60.55">
      </a>

      <!-- Navbar toggler for mobile view -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar menu aligned to the right -->
      <div class="collapse navbar-collapse justify-content-end" id="navbarScroll">
        <ul
          class="navbar-nav me-4 my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px;"
        >
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Testimonials</a>
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="nav-link">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact us</router-link>
          </li>
        </ul>

        <form class="text-center">
          <router-link to="/signup" class="btn btn-outline-success me-2 createBtn" type="submit">
            Create Account
          </router-link>
          <router-link to="/login" class="btn btn-outline-success loginBtn" type="submit">
            Login
          </router-link>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBarMenu',
};
</script>

<style scoped>
.navbar-custom {
  z-index: 1000; /* Ensures navbar is above other content */
  background-color: rgba(221, 239, 248, 1); /* Optional: Set background color globally */
}

.loginBtn { 
  background: #57AEDD;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-align: center;
  color: #FFFFFF;
}

.createBtn {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-align: center;
  color: rgba(73, 145, 184, 1);
}
</style>
