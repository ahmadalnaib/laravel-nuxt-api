<script setup lang="ts">




definePageMeta({
  middleware: ['sanctum:guest'],
});

const { register } = useAuth();
const { refreshIdentity } = useSanctumAuth();


const form = reactive<Registerform>({
  name: '',
  email: '',
  password: '',
 
});

const errors=ref<validationErrors>({})

const submit = async () => {
  try {
    await register(form);
    
  } catch (e:any) {
    if(e.statusCode === 422){
      errors.value=e.data.errors
    }
  }


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
      <span v-if="errors.name" class="text-red-500">{{errors.name[0]}}</span>
    </div>
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
  

    <button type="submit">Register</button>
  </form>
</template>
