import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexNonAxisChartSeries, ApexChart, ApexResponsive, ChartComponent } from 'ng-apexcharts';
import { OrderService } from '../service/order.service';
import { CollaboratorService } from '../service/collaborator.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.css']
})
export class OrderManagerComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: ChartOptions;
  months: any;
  search: any;
  dataSource: any;
  filteredDataSource: any[] = [];
  dataSourceMulti: any;

  constructor(private _orderService: OrderService, private _collaboratorService: CollaboratorService) {
    this.chartOptions = {
      series: [49, 51],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Chưa mua hàng", "Đã mua hàng"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    this.months = Array.from({ length: 12 }, (_, index) => ({
      value: `${index + 1}`,
      viewValue: `${this.getMonthName(index)} ${currentYear}`
    }));
    this.getDataForMonth(1);
    this.getRePackageData();
    this.getMultiOrderData();
  }

  onSearch(): void {
    const searchLower = this.search.toLowerCase(); // Chuyển từ khóa thành chữ thường
    this.filteredDataSource = this.dataSource.filter((item: any) => 
      item.Name.toLowerCase().includes(searchLower) || 
      item.UserName.toLowerCase().includes(searchLower)
    );
  }

  getMonthName(monthIndex: number): string {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[monthIndex];
  }

  onMonthChange(event: any): void {
    const selectedMonth = event.value;
    this.getDataForMonth(selectedMonth);
  }

  getDataForMonth(selectedMonth: number): void {
    const currentYear = new Date().getFullYear();
    this._orderService.getPurchaseStatistics(selectedMonth, currentYear).subscribe(
      (response: any) => {
        this.chartOptions = {
          series: [response.data.notPurchased, response.data.purchased],
          chart: {
            width: 380,
            type: "pie"
          },
          labels: ["Chưa mua hàng", "Đã mua hàng"],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: "bottom"
                }
              }
            }
          ]
        };
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getRePackageData() {
    this._collaboratorService.getRePackageCollaborator().subscribe(
      (response: any) => {
        this.dataSource = response.data;
        this.filteredDataSource = [...this.dataSource];
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getMultiOrderData() {
    this._collaboratorService.getAllCollaboratorsMultiOrder().subscribe(
      (response: any) => {
        this.dataSourceMulti = response.data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

}
