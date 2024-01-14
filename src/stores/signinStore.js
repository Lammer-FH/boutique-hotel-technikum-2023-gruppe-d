import { ref } from 'vue';
import axios from 'axios';

export function useSigninStore() {
  const token = ref(null);

  const signIn = async (credentials, router) => {
    try {
      const response = await axios.post('https://boutique-hotel.helmuth-lammer.at/api/v1/login', credentials);
      token.value = response.data;
      localStorage.setItem('authToken', token.value);
      router.push('/myprofile').then(() => {
        location.reload();
      });
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return {
    token,
    signIn,
  };
}
