import IEmployee from "./interfaces";

export abstract class Person {
  constructor (public name: string, private birthDate: Date) {
    const now = Date.now()
    const year = birthDate.getFullYear();
    if (name.length < 3) this.name = 'generic'
    if (now < this.birthDate.getTime()) this.birthDate = new Date(2022, 0o7, 12)
    if (year < 1922) this.birthDate = new Date(2022, 0o7, 12)
  }

  get birth() {
    return this.birthDate;
  }
}

export class student extends Person {
  private _enrollment: Date
  private _examsGrades: [number, number, number, number]
  private _worksGrades: [number, number]

  constructor(n: string, eG: [number, number, number, number], wG: [number, number], bd: Date) {
    super(n, bd)
    this._enrollment = new Date(Date.now())
    this._examsGrades = eG
    this._worksGrades = wG
    this.generateEnrollment()

    if(this._examsGrades.length > 4) this._examsGrades.length = 4
    if(this._worksGrades.length > 2) this._worksGrades.length = 2
  }

  generateEnrollment(): void {
    console.log(`Matricula realizada com sucesso na data: ${this._enrollment}`);
  }

  sumGrades() {
    const somaProvas = this._examsGrades.reduce(
      (prev, atual) => prev + atual, 0
    )
    const somaTrabalhos = this._worksGrades.reduce(
      (prev, atual) => prev + atual, 0
    )

    return somaProvas + somaTrabalhos
  }

  sumAverageGrade() {
    const sum = this.sumGrades();

    return sum / 6
  }
}


export class client {
  name: string

  constructor(n: string) {
    this.name = n
  }
}

export class item {
  name: string
  private _price: number

  constructor(n: string, p: number) {
    this.name = n
    this._price = p
  }

  get price() {
    return this._price
  }
}

export class order {
  client: client
  private _items: item[]
  private _payment: string
  private _discount?: number

  constructor(c: client, i: item[], p: string, d?: number) {
    this.client = c
    this._items = i
    this._payment = p
  }

  sumTotal() {
    const total = this._items.reduce(
      (prev, {price}) => prev + price, 0
    )
    return total;
  }

  sumDiscount() {
    const total = this.sumTotal();
    const discount = total * (this._discount || 0)

    return total - discount
  }
}

export class Data {
  dia: string
  mes: string
  ano: string

  constructor(d: string, m: string, a: string) {
    this.dia = d
    this.mes = m
    this.ano = a
  }
}

export class Subject {
  constructor (private name: string) {
    if (this.name.length < 3) this.name = 'generic'
  }

  set setName(n: string) {
    this.name = n
  }

  get getName() {
    return this.name
  }
}

export class Teacher extends Person implements IEmployee {
  admissionDate: Date;

  constructor (
    name: string,
    birthDate: Date,
    public subject: string,
    public salary: number,
    public registration: number,
  ) {
    super(name, birthDate)
    const date = new Date(Date.now())
    this.admissionDate = date
    this.generateRegistration()
  }

  generateRegistration() {
    return(`The registration has been complete at: ${this.admissionDate}`);
  }
}