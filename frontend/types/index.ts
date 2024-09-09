declare global{

  interface Loginform{
    email: string;
    password: string;
  }

  interface User{
    id: number;
    name: string;
    email: string;
   
  }

  interface Registerform{
    name: string;
    email: string;
    password: string;
  }


}