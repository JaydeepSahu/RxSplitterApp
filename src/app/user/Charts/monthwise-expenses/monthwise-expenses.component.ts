import { Component, OnInit } from '@angular/core';
import { multi } from 'src/app/model/chartDataMonthwiseExpense';
import { ReportServicesService } from 'src/app/services/report-services.service';

@Component({
  selector: 'app-monthwise-expenses',
  templateUrl: './monthwise-expenses.component.html',
  styleUrls: ['./monthwise-expenses.component.css']
})
export class MonthwiseExpensesComponent implements OnInit {

  constructor(public reportServices : ReportServicesService) {
  }
  
  ngOnInit(): void {

    this.reportServices.GetMonthwiseExpenses(this.year).subscribe((res: any) => {
      console.log('****GetMonthwiseExpenses*****', res.response);
      this.multi =res.response;
    });

    Object.assign(this, { multi });
    
  }

  multi: any[];
  view: any[] = [700, 400];
  year : number = 0

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  animations: boolean = true;

  // colorScheme = {
  //   domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  // };

  

  onSelect(event) {
    console.log(event);
  }

  searchYear()
  {
    this.reportServices.GetMonthwiseExpenses(this.year).subscribe((res: any) => {
      console.log('****GetMonthwiseExpenses*****', res.response);
      this.multi =res.response;
    });
  }
}
