import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)

const peopleAccountThauan : PeopleAccount = new PeopleAccount(2,'Thauan',11)
console.log(peopleAccountThauan)
peopleAccount.setBalance(1000)
peopleAccountThauan.setBalance(0)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// console.log(companyAccount)

//test - withdraw e validadeStatus
// peopleAccount.withdraw(100)
// peopleAccount.withdraw(900)
// peopleAccount.withdraw(900)

//
peopleAccount.deposit(600 , peopleAccountThauan)