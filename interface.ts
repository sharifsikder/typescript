interface player{
    name:string,
    club:string,
    salary:number,
    wife?:string,
    previousClubs?: string[]
}
const messi:player ={
    name: 'Leo messi',
    club:'PSG',
    salary: 12000,
    wife:'Nosimon ara begum'
}
const hannan:player ={
    name: 'A. Hanna',
    club:'kolabagan',
    salary:2000

}

interface Employee{
    name: string,
    designation: string,
    salary:number
    age?:number
}

interface Developer extends Employee{
    language: string,
    codeEditior: string,
    typingSpeed: number
}

const zuku: Developer = {
    name: 'Zukarbark',
    salary:45,
    designation:'ss',
    language:'js',
    codeEditior: 'VS code',
    typingSpeed: 65
}