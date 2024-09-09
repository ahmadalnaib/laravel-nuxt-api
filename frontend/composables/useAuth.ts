export const useAuth = ()  => {

  const sanctumFetch= useSanctumClient();

  async function register(form: Registerform): Promise<void>{

      // always the lib check  cross site request forgery cookie for use
  return await sanctumFetch('/register', {
    method: 'POST',
    body: form,
  });
    
  }

  async function updateProfile(form: profileForm): Promise<void>{

    // always the lib check  cross site request forgery cookie for use
return await sanctumFetch('/user/profile-information', {
  method: 'PUT',
  body: form,
});
  
}

  return{
    register,
    updateProfile
  }

}