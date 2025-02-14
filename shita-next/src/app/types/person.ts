export  interface PersonModel{
  id:number,
  name:string,
  address:string,
  phone:string,
<<<<<<< HEAD
  deletePerson:(id: number)=> void;
=======
  deleteUser:(id: number)=> void;
>>>>>>> 4de9787c10a8856d6d22c1021a9d0c9cd2af2a2c
}

export interface PersonAddModel{
  name:string,
  adress:string,
  phone:string,
}
