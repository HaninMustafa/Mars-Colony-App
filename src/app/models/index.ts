export class Encounter {
    constructor(
        public id: number,
        public date: string,
        public Colonist_id: number,
        public atype: string,
        public action: string

    ) {}
}

export class NewColonist {
    constructor(
        public name: string,
        public age: number,
        public job_id: string

    ) {}
}
interface Colonist {
     name: string,
     job: Job,
     id:  number,
     age: number
}

export class Job {
    constructor(
        public name: string,
        public id: number,
        public description: string
    ) {}
}

export class Alien {
    constructor(
        public type: string,
        public submitted_by: string,
        public id: number,
        public description: string
    ) {}
}
