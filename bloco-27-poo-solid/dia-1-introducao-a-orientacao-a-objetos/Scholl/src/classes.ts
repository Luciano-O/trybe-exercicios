export class student {
  nome: string
  private _matricula: string
  private _notasProvas: [number, number, number, number]
  private _notasTrabalhos: [number, number]

  constructor(n: string, m: string, nP: [number, number, number, number], nT: [number, number]) {
    this.nome = n
    this._matricula = m
    this._notasProvas = nP
    this._notasTrabalhos = nT
  }

  sumNotas() {
    const somaProvas = this._notasProvas.reduce(
      (prev, atual) => prev + atual, 0
    )
    const somaTrabalhos = this._notasTrabalhos.reduce(
      (prev, atual) => prev + atual, 0
    )

    return somaProvas + somaTrabalhos
  }

  mediaNotas() {
    const sum = this.sumNotas();

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