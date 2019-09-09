<template>
  <div>
    <b-container>
      <b-row>
        <b-col md="4">
          <main v-if="$auth.user.role=='Administrator'">
            <h1>Add user</h1>
              <b-form @submit.prevent="submitUser" class="edit">
                <div class="form-group">
                  <label>First name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.first_name"
                  >
                </div>
                <div class="form-group">
                  <label>Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.last_name"
                  >
                </div>
                <b-row>
                  <b-col md="6">
                    <div class="form-group">
                      <label>Role</label>
                      <b-form-select
                        v-model="user.role"
                        :options="roles"
                        class="form-control"
                      >
                      </b-form-select>
                    </div>
                  </b-col>
                  <b-col md="6">
                    <div class="form-group">
                      <label>Username</label>
                        <input
                          type="text"
                          v-model="user.username"
                          class="form-control"
                        >
                    </div>
                  </b-col>
                </b-row>
                <div class="form-group">
                  <label for>Email</label>
                  <input
                    type="text"
                    v-model="user.email"
                    class="form-control"
                  >
                </div>
                <div class="form-group">
                  <label for>Password</label>
                  <input
                    type="password"
                    v-model="user.password"
                    class="form-control"
                  >
                </div>
                <b-button
                  pill
                  class="custom-btn mt-3 mr-3"
                  :to="`/users`"
                >
                  Back
                </b-button>
                <b-button
                  pill
                  class="custom-btn mt-3 mr-3"
                  type="submit"
                >
                  Save
                </b-button>
              </b-form>
            </main>
          <div v-if="$auth.user.role=='User'">
            Sorry, no access.
          </div>
        </b-col>
        <b-col offset="2" md="6" class="align-items-right">
          <img class="ninja-img" src="/images/ninja.svg"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Add User"
    }
  },
  data() {
    return {
      user: {
        username: "",
        first_name: "",
        last_name: "",
        role: "",
        email: "",
        password: "",
      },
      preview: "",
        roles: [
          { value: "User", text: "User"},
          { value: "Administrator", text: "Administrator"}
        ],
    }
  },
  methods: {
    async submitUser() {
      const config = {
        headers: { "content-type": "multipart/form-data" }
      }
      let formData = new FormData()

      for (let data in this.user) {
        formData.append(data, this.user[data])
      }

      try {
        let response = await this.$axios.$post("/users/", formData, config)
        this.$router.push("/users/")
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>