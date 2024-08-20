<template>
  <footer class="footer-section">
    <div class="container footer-content">
      <div class="footer-logo">
        <img src="@/assets/logo.png" alt="Cutify Logo" class="logo">
        <p class="tagline">...Book Beauty & Health Services</p>
      </div>
      <div class="footer-links">
        <div class="footer-column">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h5>Our Categories</h5>
          <ul>
            <li><a href="#">Hair Salon</a></li>
            <li><a href="#">Barbing Shops</a></li>
            <li><a href="#">Spa</a></li>
            <li><a href="#">Gym Center</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h5>Follow Us</h5>

            <a href="#"><i class="fab me-2 fa-facebook"></i></a>
            <a href="#"><i class="fab me-2 fa-instagram"></i></a>
            <a href="#"><i class="fab me-2 fa-twitter"></i></a>
            <a href="#"><i class="fab me-2 fa-facebook"></i></a>

          <p class="newsletter-text">Subscribe to our newsletter to get updates from us.</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Enter Your Email" class="newsletter-input">
            <button type="submit" class="newsletter-button">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Copyright © 2022 Genleaders All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  // Add any necessary JavaScript here
};
</script>

<style scoped>

.footer-section {
  background-color: #4f8ba7;
  padding: 40px 0 20px;
  color: white;
  font-family: 'Roboto', sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  flex-wrap: wrap; /* Allow wrapping on small devices */
}

.footer-logo {
  flex: 1;
  text-align: center; /* Center align logo on small devices */
  margin-bottom: 20px; /* Add margin for spacing */
}

.logo {
  width: 120px;
  margin-bottom: 10px;
}
.fab{
  color: white;
  display: flex-start
  
}

.tagline {
  margin: 0;
  font-size: 14px;
  color: #f2f2f2;
}

.footer-links {
  display: flex;
  flex: 2;
  justify-content: space-between;
  flex-wrap: wrap; /* Allow wrapping of columns */
}

.footer-column {
  flex: 1;
  min-width: 200px; /* Ensure columns take up full width on small devices */
  margin-bottom: 20px; /* Add margin for spacing */
  text-align: left; /* Center align columns on small devices */
}

.footer-column h5 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 8px;
}

.footer-column ul li a {
  color: #f2f2f2;
  text-decoration: none;
  font-size: 14px;
}

.footer-column ul li a:hover {
  text-decoration: underline;
}

.social-icons {
  display: flex;
  justify-content: center; /* Center align social icons on small devices */
  gap: 15px;
  margin-bottom: 10px;
}

.social-icons a {
  color: white;
  font-size: 18px;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #f2f2f2;
}

.newsletter-text {
  margin-bottom: 10px;
  font-size: 14px;
  color: #f2f2f2;
  text-align: center; /* Center align on small devices */
}

.newsletter-form {
  display: flex;
  justify-content: center; /* Center align form on small devices */
}

.newsletter-input {
  padding: 8px;
  border-radius: 5px 0 0 5px;
  border: none;
  width: 60%;
}

.newsletter-button {
  padding: 8px 16px;
  background-color: #6bbdd4;
  border: none;
  border-radius: 0 5px 5px 0;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.newsletter-button:hover {
  background-color: #5da8c1;
}

.footer-bottom {
  border-top: 1px solid #5da8c1;
  padding-top: 10px;
  text-align: center;
  font-size: 12px;
  color: #f2f2f2;
}

/* Media Query for Small Devices */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column; /* Stack columns vertically */
    align-items: left; /* Center align the content */
    text-align: center; /* Center align text */
  }

  .footer-column {
    flex-basis: 100%; /* Full width for columns */
    text-align: left; /* Center align text */
  }

  .footer-logo {
    margin-bottom: 20px; /* Add spacing */
  }
}

</style>
