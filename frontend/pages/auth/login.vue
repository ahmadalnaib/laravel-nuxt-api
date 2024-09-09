<script setup lang="ts">
definePageMeta({
  middleware: ['sanctum:guest'],
});

const { login } = useSanctumAuth();

const form = reactive<Loginform>({
  email: '',
  password: '',
});

const errors=ref<validationErrors>({})

const submit = async () => {
  try {
    await login(form);
   
  } catch (e:any) {
   if(e.statusCode === 422){
     errors.value=e.data.errors
   }
  }

};
</script>

<template>
  <form @submit.prevent="submit">
    <div>
      <label for="email">Email</label>
      <input type="text" placeholder="email" v-model="form.email" />
      <span v-if="errors.email" class="text-red-500">{{errors.email[0]}}</span>
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" placeholder="password" v-model="form.password" />
      <span v-if="errors.password" class="text-red-500">{{errors.password[0]}}</span>
    </div>

    <button type="submit">Login</button>
  </form>
</template>
