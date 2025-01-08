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
  permission: any;
  isPermissionExport: boolean = false

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
    this.permission = JSON.parse(localStorage.getItem('permission') || '{}');
    this.isPermissionExport = this.permission.includes('order-manager-export');
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

  exportExcelRePackageData() {
    this._collaboratorService.exportExcelRePackageCollaborator().subscribe(
      (response: any) => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Tổng ID chưa thực hiện tái mua theo quy định theo thời gian.xlsx';
        link.click();
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

  exportExcelMultiOrderData() {
    this._collaboratorService.exportExcelAllCollaboratorsMultiOrder().subscribe(
      (response: any) => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Tổng ID đã tái mua đơn hàng thứ 2,3,4,5,6,7,8,9,10.xlsx';
        link.click();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

}
