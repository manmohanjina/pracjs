

export type inistateType={
    isloading:boolean,
    data:[],
    isError:boolean,
    islogin:boolean,
    islogout:boolean
}
export type resDataar={
    first_name:string,
    last_name:string,
    avatar:string,
    id:number,
    email:string,
    

}

export type resDataType={
    page:number,
    per_page:number,
    total:number,
    total_pages:number,
    
    
    data:resDataar[]
}

export type actionDataType={
    type:string,
    payload:resDataType
}

export type storeDataType={
    isloading:boolean,
    data:resDataType ,
    isError:boolean,
    islogin:boolean,
    islogout:boolean
}

export type storeRes={
    appreducer:storeDataType,
    reducer:storeDataType,
    
}