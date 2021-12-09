<template>
  <div id="app">
    <router-view name="mainLayout" key="mainLayoutKey"></router-view>
    <router-view name="loginLayout" key="loginKey"/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
    };
  },
};
</script>
<style lang="css" src="@/assets/styles/bootstrap.min.css" />
<style lang="css" src="@/assets/styles/style.css" />
<!--<style lang="css" src="@/assets/styles/responsive.css" />-->
<!--<style lang="css" src="@/assets/styles/bootstrap-select.css" />-->
<!--<style lang="css" src="@/assets/styles/perfect-scrollbar.css" />-->
<!--<style lang="css" src="@/assets/styles/custom.css" />-->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
