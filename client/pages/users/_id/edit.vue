<template>
  <div>
    <b-container>
      <b-row>
        <b-col md="4">
          <main v-if="$auth.user.role=='Administrator'">
            <h1>Edit user</h1>
              <form @submit.prevent="submitUser" class="edit">
                <div class="form-group">
                  <label>User's first name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.first_name"
                  >
                </div>
                <div class="form-group">
                  <label>User's last name</label>
                  <input
                    type="text"
                    v-model="user.last_name"
                    class="form-control"
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
                  <label for>User's email</label>
                  <input
                    type="text"
                    v-model="user.email"
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
                <b-button
                  pill
                  class="custom-btn delete mt-3"
                  @click="deleteUser()"
                >
                  Delete
                </b-button>
              </form>
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
  head(){
      return {
        title: "Edit User"
      }
  },
  async asyncData({ $axios, params }) {
    try {
      let user = await $axios.$get(`/users/${params.id}`);
      return { user }
    } catch (e) {
      return { user: [] }
    }
  },
  data() {
    return {
      user: {
        username: this.$auth.user.username,
        first_name: this.$auth.user.first_name,
        last_name: this.$auth.user.last_name,
        role: this.$auth.user.role,
        email: this.$auth.user.email
      },
      preview: "",
      roles: [
        { value: "User", text: "User"},
        { value: "Administrator", text: "Administrator"}
      ]
    }
  },
  methods: {
    async submitUser() {
      let editedUser = this.user

      let formData = new FormData()
      for (let data in editedUser) {
        formData.append(data, editedUser[data])
      }

      try {
        await this.$axios.$patch(`/users/${editedUser.id}/`, formData)
        this.$router.push("/users/")
        this.$bvToast.toast('Your profile was updated successfully.', {
            title: 'Operation successful',
            solid: true,
            variant: 'success'
        })
      } catch (e) {
        this.$bvToast.toast('Please correct the errors.', {
            title: 'Operation unsuccessful',
            solid: true,
            variant: 'danger'
        })
      }
    },
    async deleteUser() {
      try {
        await this.$axios.$delete(`/users/${this.user.id}/`) // delete user
        let newUsers = await this.$axios.$get("/users/") // get new list of users
        this.users = newUsers // update list of users
        this.$router.push({path: `/users`})
      } catch (e) {
        console.log(e);
      }
    },
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 70px;
}

.custom-btn.delete {
  background-color: darkred;
}
</style>