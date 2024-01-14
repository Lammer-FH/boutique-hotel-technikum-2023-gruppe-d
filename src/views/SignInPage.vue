<!-- SignIn.vue -->
<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Sign In</h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="signIn">
          <div class="mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input v-model="credentials.clientId" type="email" class="form-control" id="email" placeholder="Enter your email" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="credentials.secret" type="password" class="form-control" id="password" placeholder="Enter your password" required>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSigninStore } from '@/stores/signinStore'; 
export default {
  setup() {
    const credentials = ref({ clientId: '', secret: '' });
    const router = useRouter();
    const signinStore = useSigninStore(); 

    const signIn = async () => {
      await signinStore.signIn(credentials.value, router);
    };

    return {
      credentials,
      signIn,
    };
  },
};
</script>

<style>
</style>
