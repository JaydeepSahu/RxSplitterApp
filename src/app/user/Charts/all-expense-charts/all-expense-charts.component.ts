import { Component, OnInit } from '@angular/core';
import { chartDataAllExpenses } from 'src/app/model/chartDataAllExpenses';
import { ReportServicesService } from 'src/app/services/report-services.service';

@Component({
  selector: 'app-all-expense-charts',
  templateUrl: './all-expense-charts.component.html',
  styleUrls: ['./all-expense-charts.component.css']
})
export class AllExpenseChartsComponent implements OnInit {

  constructor(public reportServices : ReportServicesService) { }

  ngOnInit(): void {
    debugger;
    this.reportServices.GetAllExpenseCharts().subscribe((res: any) => {
      debugger;
     // console.log('****GetAllExpenseCharts*****', res.response);
      this.saleData=res.response
      console.log('****GetAllExpenseCharts*****', this.saleData);
    });

  }

  
 // saleData : any[] 
  

  saleData : chartDataAllExpenses[] =[] 

 
  
}
