<template>
  <div>
    <header>
      <the-header />
      <b-container>
        <b-row>
          <b-col>
            <div class="text-box">
              <h1>Users App 😋 Home Page</h1>
              <p class="mt-3">Hello, {{ $auth.user.first_name || 'Anonymous' }}</p>
              <p class="mt-3">I'm visible to users with roles "Admin" and "User".</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
  layout: 'blank',
  components: {
    TheHeader,
  },
  head() {
    return {
      title: "Home page"
    }
  }
}
</script>

<style scoped>
header {
  min-height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.4)
    ),
    url("/images/banner.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
}

.text-box {
  margin-top: 10%;
  color: #fff;
}

.text-box h1 {
  font-family: cursive;
  font-size: 5rem;
}

.text-box p {
  font-size: 2rem;
  font-weight: lighter;
}
</style>