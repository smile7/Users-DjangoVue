<template>
  <div>
    <b-container>
      <b-row>
        <b-col md="4" class="mx-auto">
          <b-form>
            <b-input-group prepend="Email" class="mt-3">
              <b-form-input @keyup.enter.native="login" required v-model="form.email"></b-form-input>
            </b-input-group>
            <b-input-group prepend="Password" class="mt-3">
              <b-form-input type="password" required v-model="form.pass"></b-form-input>
            </b-input-group>
            <b-button
              pill
              @click="login()"
              class="custom-btn mt-3"
            >
              Login
            </b-button>
          </b-form>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12" class="text-center">
          <img class="castle-img" src="/images/castle.svg"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      form: {
        email: '',
        pass: ''
      }
    }
  },
  methods: {
    async login() {
      await this.$auth
        .loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.pass
          }
        })
        .catch(() => {
          console.log('failed login')
          this.$bvToast.toast('Wrong credentials', {
            title: 'Operation unsuccessful',
            solid: true,
            variant: 'danger'
          })
        })
      }
  }
}
</script>

<style scoped>
.castle-img {
  width: 60%;
  margin-top: 200px;
}
</style>