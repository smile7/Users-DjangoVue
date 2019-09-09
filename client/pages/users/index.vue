<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <main v-if="$auth.user.role=='Administrator'">
            <b-row>
              <b-col md="6">
                <h1>Users' list</h1>
                <p class="mt-3">Click on a record to edit it.</p>
              </b-col>
              <b-col md="6">
                <b-button
                  pill
                  class="custom-btn float-right"
                  :to="`/users/add`"
                >
                  Add user
                </b-button>
              </b-col>
            </b-row>
            <b-table
              striped
              bordered
              borderless
              outlined
              responsive
              hover
              head-variant="dark"
              table-variant="light"
              :items="users"
              :fields="fields"
              @row-clicked="editUserScreen"
            >    
            </b-table>
          </main>
          <div v-if="$auth.user.role=='User'">
            Sorry, no access.
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: "Users list"
    }
  },
  async asyncData({$axios, params}) {
    try {
      let users = await $axios.$get(`/users/`)
      return { users }
    } catch (e) {
      return { users: [] }
    }
  },
  data() {
    return {
      users: [],
      fields: ['id', 'username', 'first_name', 'last_name', 'email', 'role']
    }
  },
  methods: {
    editUserScreen(row) {
      this.$router.push({path: `/users/${row.id}/edit/`})
    }
  }
}
</script>

<style scoped>
</style>