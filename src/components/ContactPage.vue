create contactform 

<template>
  <header class="contact-header">
    <div class="overlay">
      <div class="header-content">
        <div class="contact-details">
          <p>_____Contact Us</p>
          <div class="social-icons">
            <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" aria-label="Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="mailto:contact@yourdomain.com" aria-label="Email">
              <i class="fas fa-envelope"></i>
            </a>

                        <a href="mailto:contact@yourdomain.com" aria-label="Email">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>


  <section class="container">
    <div class="row">
    <div class="col-md-8 pt-5">
    <h3>Contact Information</h3>
      <h5 class="mt-5">
        <a><i class="fas fa-envelope"></i> Cutify_ng@info.com</a>
      </h5>
       <h6 class="mt-4">
        <a><i class="fas fa-mobile"></i> +234- 8123456789</a>
      </h6>
       <h6 class="mt-4">
        <a><i class="fas fa-envelope"></i> Goldlink House, 2 Harare <br>Steet, Off Rabat Street, Zone 6, Wuse, Abuja..</a>
      </h6>
    </div>

    <div class="card col-md-4 mb-5 mt-5">
      <h5 class="cont mt-4"><b>Send a message</b></h5>
      <p>Fell free to contact us anytime. We will get back to you as soon as we can.</p>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" class="form-control" v-model="form.name" required>
        </div>
        <div class="form-group mt-3">
          <label for="email">Email:</label>
          <input type="email" id="email"  class="form-control" v-model="form.email" required>
        </div>
        <div class="form-group mt-3">
          <label for="message">Message:</label>
          <textarea id="message" v-model="form.message" class="form-control" required></textarea>
        </div>

          <div class="form-group"> 
          <button type="submit" class="submit-btn form-control mt-5 mb-3">Send Message</button>
        </div>
        
      </form>
    </div>
    </div>
  </section>

</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log('Form submitted:', this.form);
      // You can add an API call or show a success message here
    },
  },
};
</script>

<style scoped>
.contact-header {
  background-image: url('@/assets/images/contact/bg.png'); /* Replace with your background image */
  background-size: cover;
  background-position: center;
  height: 300px;
  position: relative;
  color: white;
  font-size: 20px;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5); /* Adds a dark overlay for better text visibility */
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 20px;
}
.cont{
  font-weight: 100px;
}

.header-content {
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}

.contact-details h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}
.card{
text-align: justify;
}
.contact-details h1::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 60px;
  height: 3px;
  background-color: #fff;
}

.social-icons {
  display: flex;
  justify-content: left;
  gap: 20px;
  margin-top: 30px;
}

.col-md-8{
  text-align: left;
  padding: 100px;
  
}

.social-icons a {
  color: white;
  font-size: 24px;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #ddd;
}
.submit-btn{
  background-color: skyblue;
}

/* Media Query for Small Devices */
@media (max-width: 768px) {
  .contact-header {
    height: 200px;
  }

  .header-content h1 {
    font-size: 32px;
  }

  .social-icons a {
    font-size: 20px;
  }
}
</style>
