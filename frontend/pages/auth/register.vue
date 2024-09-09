<script setup lang="ts">




definePageMeta({
  middleware: ['sanctum:guest'],
});

const { register } = useAuth();
const { refreshIdentity } = useSanctumAuth();


const form = reactive<Registerform>({
  name: 'Ahmed',
  email: 'ato@gmail.com',
  password: '12345678',
 

});

const submit = async () => {
  await register(form);

  // refresh user
  await refreshIdentity();

  // redirect
  await navigateTo('/dashboard');


};
</script>

<template>
  <form @submit.prevent="submit">
    <div>
      <label for="name">Name</label>
      <input type="text" placeholder="name" v-model="form.name" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="text" placeholder="email" v-model="form.email" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" placeholder="password" v-model="form.password" />
    </div>
  

    <button type="submit">Register</button>
  </form>
</template>
