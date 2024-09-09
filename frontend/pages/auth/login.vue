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
    <div>
      <label for="email">Email</label>
      <input type="text" placeholder="email" v-model="form.email" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" placeholder="password" v-model="form.password" />
    </div>

    <button type="submit">Login</button>
  </form>
</template>
