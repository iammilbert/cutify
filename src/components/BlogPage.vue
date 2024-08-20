<template>
  <header class="contact-header">
    <div class="overlay">
      <div class="header-content">
        <div class="contact-details mt-5 pt-5">
          <h5>_____Blog</h5>

        </div>
      </div>
    </div>
  </header>
<section class="service-gallery">
  <div class="container gallery-container">
    <div class="header text-center">
      <h2><b>Our Blog: Your Beauty and Wellness Guide</b></h2>
      <p>Explore our weekly tips for maintaining gorgeous hair and managing your facial glow. We're here to help you master the art of self-care.</p>
    </div>
    <div class="gallery">
      <div v-for="(service, index) in services" :key="index" class="card">
        <img :src="service.image" :alt="service.name" class="card-img-top" />
        <div class="card-body" style="text-align: left;">
          <p class="card-title">{{ service.name }}</p>
          <p class="card-text"><i class="fas fa-map-marker-alt"></i> {{ service.address }}</p>
          <div class="card-footer d-flex justify-content-between align-items-center" >
            <span class="rating">
              <i class="fas fa-star" ></i> {{ service.rating }} {{ service.reviews }} reviews
            </span>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <a href="#" class="see-more">See more <i class="fas fa-arrow-right"></i></a>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { image: require('../assets/images/service/s4.png'), name: 'MOJ Spa center', address: 'No 26. St Ives street. Lagos island. Lagos.', rating: '5.0', reviews: '100' },
        { image: require('../assets/images/service/s3.png'), name: 'Hollaja MakeUp studio', address: 'No 26. St Ives street. Lagos island. Lagos.', rating: '5.0', reviews: '100' },
        { image: require('../assets/images/service/s2.png'), name: 'Hollaja MakeUp studio', address: 'No 26. St Ives street. Lagos island. Lagos.', rating: '5.0', reviews: '100' },
        { image: require('../assets/images/service/s5.png'), name: 'MOJ Spa center', address: 'No 26. St Ives street. Lagos island. Lagos.', rating: '5.0', reviews: '100' },
        { image: require('../assets/images/service/s6.png'), name: 'Hollaja MakeUp studio', address: 'No 26. St Ives street. Lagos island. Lagos.', rating: '5.0', reviews: '100' },
        { image: require('../assets/images/service/s1.png'), name: 'Hollaja MakeUp studio', address: 'No 26. St Ives street. Lagos island. Lagos.', rating: '5.0', reviews: '100' },
      ],
    };
  },
};
</script>

<style scoped>
.service-gallery {
  background-color: white;
  padding: 20px 0;
}
.contact-header {
  background-image: url('@/assets/images/contact/bg.png'); /* Replace with your background image */
  background-size: cover;
  background-position: center;
  height: 300px;
  position: relative;
  color: white;
  font-size: 20px;
}


.gallery-container {
  padding: 20px;
  margin-top: 30px;
}

.header {
  text-align: left;
  margin-bottom: 20px;
}

.header h3 {
  font-size: 24px;
  font-weight: bold;
}

.header p {
  font-size: 16px;
  margin-bottom: 10px;
}

.header a {
  font-size: 14px;
  color: #00aaff;
  text-decoration: underline;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  width: calc(33.333% - 20px); /* Default width for larger screens */
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 15px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-text {
  font-size: 14px;
  color: #666;
}

.card-footer {
  padding: 10px 15px;
  background-color: #f7f7f7;
}

.rating {
  font-size: 14px;
  color: #ffa500;
}
.contact-details p {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.fa-star {
  margin-right: 5px;
}

.fa-arrow-right {
  color: #00aaff;
}

.footer {
  text-align: right;
  margin-top: 20px;
}

.see-more {
  font-size: 16px;
  color: #00aaff;
  text-decoration: none;
  font-weight: bold;
}

.see-more i {
  margin-left: 5px;
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .card {
    width: 100%; /* Full width for mobile devices */
  }
}

</style>
