<template>
  <div class="container mt-[250px] w-full max-w-[45%]">
    <form @submit.prevent="submitForm" class="form">
      <div class="mb-4">
        <img src="../assets/logo.png" class="w-[50px] h-[50px] m-[auto]" alt="logo">
        <h1 class="text-2xl font-bold mb-2 text-center">Sign Up</h1>
      </div>
      <InputForm
          label="Username"
          v-model="v$.registerForm.name.$model"
          id="username"
          type="username"
          placeholder="Username"
          :check-error="v$.registerForm.name.$error"
          :error="v$.registerForm.name.$errors[0]?.$message"
          required
      />
      <InputForm
          label="Email"
          v-model="v$.registerForm.email.$model"
          id="email"
          type="email"
          placeholder="example@domain.com"
          :check-error="v$.registerForm.email.$error"
          :error="v$.registerForm.email.$errors[0]?.$message"
          required
      />
      <InputForm
          label="Password"
          v-model="v$.registerForm.password.$model"
          id="password"
          type="password"
          placeholder="*******"
          :check-error="v$.registerForm.password.$error"
          :error="v$.registerForm.password.$errors[0]?.$message"
          required
      />
      <div class="flex items-center justify-between">
        <button
            @click="submitForm"
            class="form-button"
            type="button">
          Registration
        </button>
        <div class="text-grey-dark">
          Already have an account?
          <router-link class="text-blue-500 hover:underline" :to="{ name: 'authorization' }">
            Log in
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import InputForm from "@/component/InputForm";

export default {
  name: 'RegistrationView',
  components: {
    InputForm
  },
  data() {
    return {
      v$: useVuelidate(),
      registerForm: {
        name: "",
        email: "",
        password: ""
      },
    }
  },
  validations() {
    return {
      registerForm: {
        name: {
          required,
          minLength: minLength(2)
        },
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(6)
        }
      },
    }
  },
  methods: {
    submitForm() {
      this.v$.$validate()
      if (!this.v$.$error) {
        alert('successfully');
      } else {
        alert('failed')
      }
    },
  },
}
</script>
