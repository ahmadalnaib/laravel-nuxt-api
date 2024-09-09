<script setup lang="ts">
const { isAuthenticated,logout } = useSanctumAuth();

const user = useSanctumUser<User>();

const logoutFun = async () => {
  await logout();
  await navigateTo('/');
};
</script>

<template>
  <div class="p-6 flex items-center justify-between">
    <div class="flex items-center space-x-6">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/dashboard">Dashboard</nuxt-link>
    </div>
    <div class="flex items-center space-x-6" v-if="!isAuthenticated">
      <nuxt-link to="/auth/login">Login</nuxt-link>
    </div>
    <div class="flex items-center space-x-6" v-if="isAuthenticated">
      <div class="font-semibold">
        {{ user?.name }}
      </div>
      <button @click="logoutFun">Sign out</button>
    </div>
  </div>
</template>
