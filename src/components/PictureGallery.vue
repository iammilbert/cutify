<template>
<section class="hero-gallery">
  <div class="container gallery-container">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h5>Categories</h5>
      <div>
        <i class="fas fa-chevron-left" @click="prevImage"></i>
        <i class="fas fa-chevron-right" @click="nextImage"></i>
      </div>
    </div>
    <div class="gallery">
      <div v-for="(image, index) in visibleImages" :key="index" class="image-container">
        <img :src="image.src" :alt="image.alt" class="img-fluid" />
        <p>{{ image.title }}</p>
      </div>
    </div>
  </div>
  </section>
</template>


<script>
export default {
data() {
  return {
    images: [
      { src: require('../assets/images/gallery/g1.png'), alt: 'Hair', title: 'Hair' },
      { src: require('../assets/images/gallery/g2.png'), alt: 'Barbing Salon', title: 'Barbing Salon' },
      { src: require('../assets/images/gallery/g3.png'), alt: 'Spa', title: 'Spa' },
      { src: require('../assets/images/gallery/g4.png'), alt: 'Gym center', title: 'Gym center' },
    ],
    startIndex: 0,
    visibleCount: 4,
  };
},

  computed: {
    visibleImages() {
      return this.images.slice(this.startIndex, this.startIndex + this.visibleCount);
    }
  },
  methods: {
    nextImage() {
      if (this.startIndex + this.visibleCount < this.images.length) {
        this.startIndex++;
      }
    },
    prevImage() {
      if (this.startIndex > 0) {
        this.startIndex--;
      }
    }
  }
};
</script>

<style scoped>.hero-gallery {
  background-color: #1977c2;
  color: white;
  padding: 20px 0;
}

.gallery-container {
  background-color: #3498db;
  padding: 10px;
  border-radius: 8px;
}

.gallery {
  display: flex;
  gap: 10px;
  flex-wrap: wrap; /* Allows wrapping of items */
}

.image-container {
  flex: 1 1 100%; /* Default to one image per row */
  text-align: center;
}

.image-container img {
  width: 100%;
  border-radius: 8px;
}

.fas {
  cursor: pointer;
  margin: 0 5px;
  color: white;
}

@media (min-width: 576px) {
  .image-container {
    flex: 1; /* Adjust to multiple images per row on larger devices */
  }
}

</style>
