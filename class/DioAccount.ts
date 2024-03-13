import { PeopleAccount } from "./PeopleAccount"

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

  deposit = (depositValue : number , account : PeopleAccount): void => {
    if ( depositValue <= 0  ){
      console.log('[-] Deposite um valor maior que 0')
    }
    if(this.validateStatus() && this.getBalance() > depositValue ){
      account.balance = account.balance + depositValue
      this.withdraw(depositValue)
      console.log(`[+] Você depositou R$ ${depositValue} pra conta ${account.getName()}`)
      console.log(`[.] Saldo da conta depositada R$ ${account.balance}`)
      console.log(`[!] Saldo R$ ${this.getBalance()}`)
    }
    console.log(this.balance)
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
