import { Component, OnInit } from '@angular/core';
import { CategoryDataService } from '../category-data.service'
import { ExpenseDataService } from '../expense-data.service'

@Component({
  selector: 'app-expense-manager',
  templateUrl: './expense-manager.component.html',
  styleUrls: ['./expense-manager.component.css']
})
export class ExpenseManagerComponent implements OnInit {
  ename :string;
  ecat  :string;
  eamount :number;
  edate :string;
  cname :string;
  cthreshold :number;

  constructor(
    private cService :CategoryDataService,
    private eService :ExpenseDataService
  ) { }
  addExpense() {
    console.log(this.ename, this.ecat, this.eamount)
    this.eService.submit(this.ename, this.ecat, this.eamount, new Date())
  }
  addCategory() {
    console.log(this.cname, this.cthreshold)
    this.cService.submit(this.cname, this.cthreshold)
  }
  ngOnInit(): void {
  }

}
