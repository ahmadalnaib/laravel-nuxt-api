<script setup lang="ts">
definePageMeta({
  middleware: ['sanctum:guest'],
});

const sanctumFetch = useSanctumClient();



const form = reactive<Registerform>({
  name: 'Ahmed',
  email: 'alnaib888@gmail.com',
  password: '12345678',
});

const submit = async () => {
  // always the lib check  cross site request forgery cookie for use
  await sanctumFetch('http://127.0.0.1:8000/register', {
    method: 'POST',
    body: form,
  });

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
