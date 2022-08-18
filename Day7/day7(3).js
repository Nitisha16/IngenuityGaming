var student = {
  Name: "Nitisha",
  Age: 20,
  Address:{

      city: "jaipur",
      state: "rajasthan",
      pincode: 302018
  },
  hobbies: "dancing",

  details:function(){
      

return this.Name + " " + this.Age + " " + this.Address +" "+ this.hobbies

  } 
}
console.log(student)