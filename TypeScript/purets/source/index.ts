
const {log}=console

 // how to create classes in ts
 //it is similat to js 


 interface Users{
    name:string,
    email:string,
    city:string,
    readonly _id:number,
     pass:number
     
 }

 class  User{
  
email:string

name:string
city:string
 private _id:number
 private _courseCount=1
    constructor(email:string, name:string, city:string,id:number){
     
        this.email=email
        this.name=name,
        this.city=city
        this._id=id
    }

    private deleteToken(){
        console.log('token Deleted')
    }


    get getappleEmail():string{
        return `apple ${this.email}`
    }

    get coursecount():number{
        return this._courseCount
    }

    set courseCount(courseNum:number){

        if(courseNum<=1){
            throw new Error('course count should be more than 1')
            
        }
        else{
            this._courseCount=courseNum
        }

    }
 }

 const newuser=new User("m@m.com","manish","kashipur",3)



  console.log(newuser);
  

