<template>
  <div class="card user-card">
    <div class="card-body">
      <h5 class="card-title">{{ user.first_name }}</h5>
      <h5 class="card-title">{{ user.last_name }}</h5>
      <div class="action-buttons">
        <nuxt-link :to="`/users/${user.id}/`" class="btn btn-sm btn-success"> View </nuxt-link>
        <nuxt-link :to="`/users/${user.id}/edit/`" class="btn btn-sm btn-primary"> Edit </nuxt-link>
        <button @click="onDelete(user.id)"  class="btn btn-sm btn-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["user", "onDelete"]
};
</script>

<style>
.user-card {
    box-shadow: 0 1rem 1.5rem rgba(0,0,0,.6);
}
</style>