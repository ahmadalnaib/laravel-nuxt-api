<script setup lang="ts">
const { login } = useSanctumAuth();

const form = reactive({
  email: 'alnaib888@gmail.com',
  password: '12345678',
});

const submit = async () => {
  await login(form);
};
</script>

<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="email" v-model="form.email" />
    <input type="password" placeholder="password" v-model="form.password" />
    <button type="submit">Login</button>
  </form>
</template>
