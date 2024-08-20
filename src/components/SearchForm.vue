<template>
  <section class="hero-search">
    <!-- Search Section -->
    <div class="container text-center search-section">
      <h1 class="display-5 mb-4 title">Find beauty and wellness services near you</h1>
      
<div class="search-bar row justify-content-center mb-4">
  <div class="col-md-12 g-0">
    <div class="input-group">
      <span class="input-group-text">
        <i class="fas fa-map-marker-alt"></i>
      </span>
      <input type="text" class="form-control" placeholder="Location: All">
       <span class="input-group-text">
        <i class="fas fa-calendar"></i>
      </span>
        <input type="text" class="form-control" placeholder="Date: Any day">
      <span class="input-group-text">
        <i class="fas fa-search"></i>
      </span>
         <input type="text" class="form-control" placeholder="Search for services, e.g., Braids"> 
         <button class="btn btn-primary ms-3">Search</button>
    </div>
  </div>
</div>


      <!-- Quick Access Buttons -->
      <div class="btn-group mb-5">
        <button class="btn btn-outline-secondary btn-search"> <i class="fas fa-search"></i> Hair salon</button>
        <button class="btn btn-outline-secondary btn-search"> <i class="fas fa-search"></i> Knotless braids</button>
        <button class="btn btn-outline-secondary btn-search"> <i class="fas fa-search"></i> Hair treatment</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-search {
  background-color: #1977c2;
  color: white;
  padding: 20px 0;
}

.search-section .search-bar input {
  width: 220px;
}

.search-section .search-bar button {
  padding: 10px 20px;
}

.btn-group .btn {
  padding: 10px 20px;
  margin-right: 10px;
}

.title{
 font-size: 24px;
}
.btn-search{
background: rgba(241, 232, 219, 1);
 border-radius: 10px;
}                                          
</style>
