import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";
import { StatisticalService } from '../service/statistical.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CollaboratorService } from '../service/collaborator.service';
import { WalletsService } from '../service/wallets.service';
import { SharedStateService } from '../share/shared-state.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

export interface PeriodicElement {
  position?: number;
  name: string;
  userName: string;
  rank: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild("chart") chart!: ChartComponent;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public chartOptions: ChartOptions;
  data: any;
  months: any;
  displayedColumns: string[] = ['position','name', 'userName', 'rank'];
  dataSource: any;
  collaboratorNumber: number = 0;
  sale3: number = 0;
  maxReceive: number = 0;
  totalReceive: number = 0;
  star: number = 0;
  rank: string = '';
  joiningDate: any;
  userName: any;
  fullName: any;

  hideWallet1 = true;
  hideWallet2 = true;
  hideWallet3 = true;

  listWalletData: any;

  balance1: any;
  balance2: any;
  balance3: any;
  info: any;

  isThreshold: boolean = false;
  baseUrl: string = window.location.origin;

  constructor(
    private messageService: MessageService,
    private _statisticalService: StatisticalService,
    private _collaboratorService: CollaboratorService,
    private _walletsService: WalletsService,
    private sharedStateService: SharedStateService
  ) {
    this.chartOptions = {
      series: [
        {
          name: "Nạp tiền",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "Rút tiền",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }

  ngOnInit() {
    this.info = JSON.parse(localStorage.getItem('info') || '{}');
    this.getCollaboratorById(this.info.id);
    const currentYear = new Date().getFullYear();
    this.months = Array.from({ length: 12 }, (_, index) => ({
      value: `${index + 1}`,
      viewValue: `${this.getMonthName(index)} ${currentYear}`
    }));
    this.getDataForMonth(1);
    this.getWalletByCollaboratorId();
  }

  ngAfterViewInit(): void {
    this.getCollaboratorByParentId();
  }

  getCollaboratorById(id: any) {
    this._collaboratorService.getCollaboratorById(id).subscribe(
      (response: any) => {
        localStorage.setItem('info', JSON.stringify(response.data));
        this.info = JSON.parse(localStorage.getItem('info') || '{}');
        this.maxReceive = this.info.maxReceive;
        this.sale3 = this.info.sale1Received + this.info.sale2Received;
        this.totalReceive = this.info.shareReceived + this.info.gratitudeReceived
        this.rank = this.info.rank;
        this.star = this.info.star;
        this.joiningDate = this.info.beginDate;
        this.userName = this.info.userName;
        this.fullName = this.info.name;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      });
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

  getMaskedBalance1(): string {
    const formattedBalance = this.formatNumber(this.balance1);
    return '*'.repeat(formattedBalance.length);
  }

  getMaskedBalance2(): string {
    const formattedBalance = this.formatNumber(this.balance2);
    return '*'.repeat(formattedBalance.length);
  }

  getMaskedBalance3(): string {
    const formattedBalance = this.formatNumber(this.balance3);
    return '*'.repeat(formattedBalance.length);
  }


  formatNumber(value: number): string {
    return value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  }



  copyToClipboard(text: string): void {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed'; // Đảm bảo không làm ảnh hưởng giao diện
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    try {
      const success = document.execCommand('copy');
      if (success) {
        this.messageService.add({
          severity: 'success',
          summary: 'Thành công',
          detail: 'Bạn đã copy thành công',
          life: 3000
        });
      } else {
        throw new Error('Không thể sao chép');
      }
    } catch (err) {
      console.error('Lỗi khi sao chép:', err);
      this.messageService.add({
        severity: 'error',
        summary: 'Lỗi',
        detail: 'Không thể sao chép vào clipboard',
        life: 3000
      });
    }

    document.body.removeChild(textarea);
  }


  confirmActivateAccount(): void {
    // Logic to activate account
    console.log('Account activation logic here');
  }

  getDataForMonth(month: number): void {
    const model = {
      Month: month,
      Year: new Date().getFullYear(),
      Id: this.info.id
    }
    this._statisticalService.getStatistical(model).subscribe(
      (response: any) => {
        const data = response.data;
        const moneyIn = data.map((item: any) => item.moneyIn);
        const moneyOut = data.map((item: any) => item.moneyOut);
        const dates = data.map((item: any) => item.date);

        this.chartOptions = {
          series: [
            {
              name: "Nạp tiền",
              data: moneyIn
            },
            {
              name: "Rút tiền",
              data: moneyOut
            }
          ],
          chart: {
            height: 350,
            type: "area"
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "smooth"
          },
          xaxis: {
            categories: dates,
            type: "category"
          },
          tooltip: {
            x: {
              format: "dd/MM/yy"
            }
          }
        };
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  }

  getCollaboratorByParentId(){
    this._collaboratorService.getCollaboratorByParentId(this.info.id).subscribe(
      (response: any) => {
        this.data = response.data;
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.data);
        this.dataSource.data = this.dataSource.data.map((item: any, index: any) => ({
          ...item,
          position: index + 1
        }));
        this.collaboratorNumber = this.dataSource.data.length;
        this.dataSource.paginator = this.paginator;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      });
  }

  exportExcelCollaboratorByParentId(){
    this._collaboratorService.exportExcelCollaboratorByParentId(this.info.id).subscribe(
      (response: any) => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Danh sách cộng tác viên.xlsx';
        link.click();
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      });
  }

  getWalletByCollaboratorId() {
    this.maxReceive = this.info.maxReceive;
    this._walletsService.getWalletByCollaboratorId(this.info.id).subscribe(
      (response: any) => {
        this.listWalletData = response.data;
        this.balance1 = this.listWalletData
        .filter((item: any) => item.walletTypeEnums === 'Source')
        .reduce((sum: number, item: any) => sum + (item.available || 0), 0);

        // Tính tổng cho balance2 (Sale1, Sale2, Sale3)
        this.balance2 = this.listWalletData
          .filter((item: any) => ['CustomerGratitude', 'CustomerShare'].includes(item.walletTypeEnums))
          .reduce((sum: number, item: any) => sum + (item.available || 0), 0);

        // Tính tổng cho balance3 (CustomerGratitude, CustomerShare)
        this.balance3 = this.listWalletData
          .filter((item: any) => ['Sale1', 'Sale2'].includes(item.walletTypeEnums))
          .reduce((sum: number, item: any) => sum + (item.available || 0), 0);
        if((this.rank == 'V' || this.rank == '') && this.balance2 > this.maxReceive){

          this.isThreshold = true;
          this.sharedStateService.setIsThreshold(this.isThreshold);
        }
        // this.sale3 = this.listWalletData
        //   .filter((item: any) => ['Sale3'].includes(item.walletTypeEnums))
        //   .reduce((sum: number, item: any) => sum + (item.available || 0), 0);

      },
      (error: any) => {
        this.listWalletData = [];
        console.error('Error fetching data:', error);
      });
  }




}
