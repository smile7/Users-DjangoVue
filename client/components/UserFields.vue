<template>
  <b-form @submit.prevent="submitUser" class="edit">
                <div class="form-group">
                  <label>User's first name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.first_name"
                  >
                </div>
                <div class="form-group">
                  <label for>User's last name</label>
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
              </b-form>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      roles: [
        { value: "User", text: "User"},
        { value: "Administrator", text: "Administrator"}
      ]
    }
  },
};
</script>