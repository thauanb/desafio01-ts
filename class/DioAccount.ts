export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (): void => {
    if(this.validateStatus()){
      console.log('Voce depositou')
    }
  }



  withdraw = (value:number): void => {
    if ( this.balance - value >=0 && this.validateStatus()){
      this.balance = this.balance - value
      console.log('[+] Conta Válida')
      console.log(` [!] Você sacou ${value}`)
    }else{
      console.log(` [!] Status da Conta ${this.validateStatus()}`)
      console.log(` [-] Saldo Indisponível , não é possível sacar ${value}`)
    }
    console.log(` -> Saldo ${this.getBalance()}`)
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (balance:number):number => {
   return this.balance = this.balance + balance
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
