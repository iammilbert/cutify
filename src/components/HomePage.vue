<template>
  <section class="hero-section">
    <div class="container text-center">
      <div class="row mb-5">
        <div class="position-relative">
          <!-- Image on the left end -->
          <img src="@/assets/images/top1.png" alt="Beauty Brushes" class="brushes-img">
          <!-- Image on the right end -->
          <img src="@/assets/images/top2.png" alt="Hairstyle" class="hairstyle-img">
        </div>
      </div>
    </div>

    <div class="container-fluid text-center">
      <div class="row position-relative pt-5"> 
        <!-- Left Image -->
        <div class="col d-flex align-items-center justify-content-end position-relative">
          <img src="@/assets/images/Group.png" alt="Beauty Brushes" class="side-image left-image">
        </div>

        <!-- Center Text -->
        <div class="col-8">
          <span class="display-4">
            <span class="highlight">Discover and book</span> for beauty and wellness services near you.
          </span>
          <p class="lead fs-5">
            Embrace self-care and indulge in a world of beauty and wellness. Explore our curated selection of services and effortlessly book appointments right in your neighborhood.
          </p>
          <button class="btn btn-primary btn-lg searchBtn ">Search and book an appointment</button>
        </div>

        <!-- Right Image -->
        <div class="col d-flex align-items-center position-relative">
          <img src="@/assets/images/scissors.png" alt="Beauty Brushes" class="side-image right-image">
        </div>

        <!-- Image Columns -->
        <div class="row pt-5"> 
          <!-- Left Image -->
          <div class="col-4">
            <img src="@/assets/images/f6.png" alt="Beauty Brushes" class="img-left">
          </div>
          
          <!-- Center Image -->
          <div class="col-4">
            <img src="@/assets/images/f4.png" alt="Beauty Brushes" class="img-center pt-5">
          </div>

          <!-- Right Image -->
          <div class="col-4">
            <img src="@/assets/images/f2.png" alt="Beauty Brushes" class="img-sm">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background-color: rgba(221, 239, 248, 1);
  padding: 60px 0;
  position: relative;
  text-align: center;
}

.hero-section .highlight {
  color: #3b8ed5; /* Blue color */
  font-weight: bold;
}

.hero-section .lead {
  font-size: 54.91px;
  color: #333;
  margin-bottom: 30px;
}

.hero-section .btn-primary {
  background-color: #3b8ed5;
  border-color: #3b8ed5;
}

/* Position and partially hide the images */
.side-image {
  position: absolute;
}

.left-image {
  left: -49px; 
  width: 80px;
  margin-left: 49px;
}

.right-image {
  right: -50px; 
  margin-right: 49px;
  width: 100px; 
}

.brushes-img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
}

.hairstyle-img {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
}

.img-left,
.img-center,
.img-sm {
  width: 100%;
  height: auto;
}

/* Ensure consistent layout across devices */
@media (min-width: 768px) {
  .img-left {
    width: 411.21px;
    height: 308.85px; 
  }
   .img-center {
    width: 147.6px;
    height: 190.6px;
    margin-top: 160px;
  }

  .img-sm {
    width: 411.52px;
    height: 308.14px;
  }
}

/* Reduce center image size on small devices */
@media (max-width:767.98px) {
  .img-center {
    width: 50px;  /* Adjust the width as needed */
    padding-top:500px

  }
  .searchBtn {
  padding: 11.44px 27.45px 11.44px 27.45px;
  font-family: 'Sofia Pro', sans-serif;
  font-size: 12.02px;
  font-weight: 500;
  line-height: 22.88px;
  text-align: center;
  }
}
</style>
