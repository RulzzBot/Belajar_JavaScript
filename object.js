// object

const obj = 
{
    data : {
        firsName : "Nazrul",
        lastName : "Abidin",
        fullName : function() {
            return this.firsName + " " + this.lastName;
        }
    },
    addres : {
        city : "Bandung",
        country : "Indonesia"
    },
    sayHi : () => {
        return "Hi semua!";
    }
}

// obj.data.fullName();
console.log(obj.data.fullName());
console.log(obj.addres.city);
console.log(obj.sayHi())
// obj.sayHi();