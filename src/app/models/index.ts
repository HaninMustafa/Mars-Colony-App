// export class Encounter {
//     constructor(
//         public id: number,
//         public date: string,
//         public Colonist_id: number,
//         public atype: string,
//         public action: string

//     ) {}
// }

export class NewColonist {
    constructor(
        public name: string,
        public age: number,
        public job_id: string

    ) {}
}
export interface Colonist {
     name: string,
     job: Job,
     id:  number,
     age: number 
}

export interface Job {
    
         name: string,
         id: number,
       description: string
    
}

export interface Alien {
         type: string,
         submitted_by: string,
         id: number,
         description: string
}



export class NewEncounter {
    constructor(
    public date: string,
    public atype: string,
    public action:string,
    public colonist_id:string,    
    ) {}
}
export interface Encounter {
    id:number,
    date: string,
    atype: string,
    action:string,
    colonist_id:number
}

