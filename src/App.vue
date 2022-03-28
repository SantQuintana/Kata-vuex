<template>
   <nav class="bg-light">
     <img alt="Vue logo" src="./assets//Cravella.jpg">
     <div class="nav-titles">
        <router-link to="/">Cliente</router-link> |
        <router-link to="/pastelero">Pastelero</router-link>
     </div>
    
  </nav>
  <router-view/> 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  margin: auto;
  height: 50%;
  
}

nav a {
  display: inline-block;
  font-weight: bold;
  color: #2c3e50;
  top: -20px;
  font-size: 25px;
  
  
}

nav a.router-link-exact-active {
  color: #42b983;
}

.nav-titles{
  margin: auto;
  height: 50%;
}

img{
  display: block;
  padding: 0;
  margin: 0;
  width: 150px;
}
</style>
