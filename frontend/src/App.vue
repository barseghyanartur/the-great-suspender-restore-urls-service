<template>
  <div id="app">

    <div id="nav">
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#">

          <h1 class="h5">The Great Suspender Restore URLs Service</h1>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item><router-link to="/index.html">Clean Data</router-link></b-nav-item>
            <b-nav-item><router-link to="/about.html">About</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view/>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img.logo {
  width: 150px;
  height: auto;
  margin:0;
  float: left;
}
h1 {
  float: right;
  padding-top: 5px;
  padding-left: 10px;
}
</style>
