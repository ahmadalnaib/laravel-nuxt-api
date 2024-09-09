<script setup lang="ts">
definePageMeta({
  middleware: ['sanctum:auth'],
});

const { updateProfile } = useAuth();
const { refreshIdentity } = useSanctumAuth();

const  user  = useSanctumUser<User>();

const form = reactive<profileForm>({
  name: user.value.name,
  email: user.value.email,
});

const errors = ref<validationErrors>({});

const submit = async () => {
  try {
    await updateProfile(form);
  } catch (e: any) {
    if (e.statusCode === 422) {
      errors.value = e.data.errors;
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
      <span v-if="errors.name" class="text-red-500">{{ errors.name[0] }}</span>
    </div>
    <div>
      <label for="email">Email</label>
      <input type="text" placeholder="email" v-model="form.email" />
      <span v-if="errors.email" class="text-red-500">{{
        errors.email[0]
      }}</span>
    </div>

    <button type="submit">Update</button>
  </form>
</template>
