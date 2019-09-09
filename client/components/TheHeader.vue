<template>
  <b-container id="header">
    <b-row>
      <b-col>
        <nuxt-link to="/">
          <img id="logo" src="/images/rlt-logo.png"/>
        </nuxt-link>
        <nav class="navbar">
          <ul class="navbar-nav">
            <li class="nav-item d-none d-md-block">
              <b-button
                pill
                class="custom-btn"
                :to="`/users`"
              >
                Admin
              </b-button>
            </li>
            <li v-if="$auth.id" class="nav-item">
              <b-button
                pill
                class="custom-btn logout"
                :to="`/login`"
              >
                Login
              </b-button>
            </li>
            <li v-else class="nav-item">
              <b-button
                pill
                class="custom-btn logout"
                @click="$auth.logout()"
              >
                Logout
              </b-button>
            </li>
          </ul>
        </nav>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
}
</script>

<style scoped>
#header { padding: 20px 15px; }

#logo { width: 142px; }

.navbar {
  float: right;
  padding: 0;
}

.navbar .navbar-nav {
  flex-direction: row;
  margin-top: 17px;  
}

.nav-item { margin-left: 40px; }

.nav-item .nav-link { padding: 0; }

.nav-item .nav-link:hover { cursor: pointer; }
</style>