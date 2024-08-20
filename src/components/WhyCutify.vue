<template>
  <section class="why-cutify-section">
    <div class="container">
      <h2 class="section-title">
        Why Cutify service booking app 
        <span class="highlight-text">is perfect for you</span>
      </h2>
      <div class="features-grid">
        <div class="feature-item">
          <i class="fas fa-calendar-check feature-icon"></i>
          <h3 class="feature-title">Easy booking</h3>
          <p class="feature-description">
            Say goodbye to long wait times and phone calls. Browse and book beauty and wellness services with ease with our user-friendly interface. Book your favorite services anytime, anywhere.
          </p>
        </div>
        <div class="feature-item">
          <i class="fas fa-cogs feature-icon"></i>
          <h3 class="feature-title">Wide Range of Services</h3>
          <p class="feature-description">
            Discover a diverse array of beauty and wellness services all in one place. We have everything you need to look and feel your best.
          </p>
        </div>
        <div class="feature-item">
          <i class="fas fa-user-tie feature-icon"></i>
          <h3 class="feature-title">Expert Professionals</h3>
          <p class="feature-description">
            Connect with top professionals who are dedicated to providing top-notch services tailored to your preferences.
          </p>
        </div>
        <div class="feature-item">
          <i class="fas fa-user feature-icon"></i>
          <h3 class="feature-title">Personalized Experience</h3>
          <p class="feature-description">
            Customize your appointments according to your schedule, preferences, and desired treatments. Enjoy a personalized experience that caters to your individual needs.
          </p>
        </div>
        <div class="feature-item">
          <i class="fas fa-bell feature-icon"></i>
          <h3 class="feature-title">Convenient Reminders</h3>
          <p class="feature-description">
            Never miss an appointment again with our convenient reminder notifications. Stay organized and keep track of your upcoming beauty and wellness sessions effortlessly.
          </p>
        </div>
        <div class="feature-item">
          <i class="fas fa-credit-card feature-icon"></i>
          <h3 class="feature-title">Secure Payment</h3>
          <p class="feature-description">
            Experience worry-free transactions with our secure payment options. Your financial information is protected, allowing you to focus solely on your self-care journey.
          </p>
        </div>
      </div>
      <div class="cta-button-wrapper">
        <button class="cta-button">Try Cutify now</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // Add any necessary JavaScript here
};
</script>

<style scoped>
.why-cutify-section {
  padding: 60px 20px;
  background-color: #ffffff;
  text-align: center;
}

.section-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
}

.highlight-text {
  color: #4f8ba7;
  position: relative;
}

.highlight-text::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  height: 4px;
  background-color: #f7d800;
  width: 100%;
}

.features-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
}

.feature-item {
  flex: 0 1 calc(33.333% - 20px);
  text-align: left;
}

.feature-icon {
  font-size: 48px;
  color: #4f8ba7;
  margin-bottom: 20px;
}

.feature-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
}

.feature-description {
  font-size: 16px;
  color: #666;
  line-height: 1.5;
}

.cta-button-wrapper {
  margin-top: 40px;
}

.cta-button {
  background-color: #4f8ba7;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #3e6d89;
}

/* Responsive Design */
@media (max-width: 768px) {
  .features-grid {
    flex-direction: column;
    align-items: center;
  }

  .feature-item {
    flex: 0 1 100%;
    text-align: center;
  }
}
</style>
