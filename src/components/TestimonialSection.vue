<template>
  <section class="testimonial-section">
    <div class="container">
      <div class="content">
        <div class="header">
          <h3>What people are saying about us?</h3>
          <p>Check out what customers and professionals are happily sharing about their Cutify experiences.</p>
        </div>
        <div class="testimonials">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
            <p class="quote">{{ testimonial.text }}</p>
            <div class="user-info">
              <img :src="testimonial.image" :alt="testimonial.name" class="user-image">
              <div class="user-details">
                <p class="name">{{ testimonial.name }}</p>
                <p class="date">{{ testimonial.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          text: 'I love how convenient it is to book my favorite spa treatments through this platform. The service providers are top-notch!',
          name: 'Jessica T.',
          date: '12th May, 2023',
          image: require('../assets/images/testimonial/t1.png'),
        },
        {
          text: "As a professional in the industry, I've found this platform to be a game-changer. It connects me with clients who value my expertise.",
          name: 'Jessica T.',
          date: '12th May, 2023',
          image: require('../assets/images/testimonial/t2.png'),
        },
        {
          text: 'I love how convenient it is to book my favorite spa treatments through this platform. The service providers are top-notch!',
          name: 'Jessica T.',
          date: '12th May, 2023',
          image: require('../assets/images/testimonial/t1.png'),
        },
      ],
    };
  },
};
</script>

<style scoped>

.testimonial-section {
  background-color: #f6f8fb;
  padding: 40px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap; /* Allow wrapping on small devices */
}

.header {
  flex-basis: 100%; /* Full width on small devices */
  text-align: left;
  margin-bottom: 20px;
}

.header h3 {
  font-size: 28px;
  font-weight: bold;
  color: #333;
}

.header p {
  font-size: 16px;
  color: #666;
}

.testimonials {
  flex-basis: 100%; /* Full width on small devices */
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  text-align: left;
}

.testimonial-card {
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  flex: 1 1 100%; /* Full width on small devices */
  position: relative;
}

.testimonial-card::before {
  content: '”';
  font-size: 50px;
  color: #ccc;
  position: absolute;
  top: 20px;
  right: 20px;
}

.quote {
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.5;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.user-details {
  text-align: left;
}

.name {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

.date {
  font-size: 12px;
  color: #999;
}

@media (min-width: 576px) {
  .content {
    flex-wrap: nowrap; /* No wrapping on larger devices */
  }

  .header {
    flex-basis: 30%; /* Adjust width on larger devices */
    margin-bottom: 0;
  }

  .testimonials {
    flex-basis: 70%; /* Adjust width on larger devices */
  }

  .testimonial-card {
    flex: 1; /* Adjust width on larger devices */
  }
}

</style>
