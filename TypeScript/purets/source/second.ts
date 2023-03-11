

interface TakePhoto{
    cameraMode:string,
    filter:string
    burstMode:number
}


class Instagram implements TakePhoto {
  
    cameraMode: string
    filter: string
    burstMode: number

     constructor(cameraMode:string, filter:string, burstMode:number){
 
        this.cameraMode=cameraMode,
        this.burstMode=burstMode,
        this.filter=filter
     }
}

let newapp=new Instagram ("still", "aromatic",5)
console.log(newapp)
