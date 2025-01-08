import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts";
import { CollaboratorService } from '../service/collaborator.service';
import { WalletDetailService } from '../service/wallet-detail.service';
import { formatDate } from '@angular/common';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-wallet-manager',
  templateUrl: './wallet-manager.component.html',
  styleUrls: ['./wallet-manager.component.css']
})
export class WalletManagerComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: ChartOptions;
  title: any;
  titleTable: any;
  titleChart: any;
  data: any;
  dataCombobox: { label: string; value: number }[] = [];
  parentId: any;
  startDate: any;
  endDate: any;
  rangeDates: Date[] | undefined;
  typeWallet: any;
  isLoading: boolean = false;
  date: any;
  permission: any;
  isPermissionExport: boolean = false

  constructor(
    private route: ActivatedRoute,
    private _collaboratorService: CollaboratorService,
    private _walletDetailService: WalletDetailService) {
    this.chartOptions = {
      series: [
        {
          name: "Inflation",
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        position: "top",
        labels: {
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function(val) {
            return val + "%";
          }
        }
      },
      title: {
        text: "Monthly Inflation in Argentina, 2002",
        floating: false,
        offsetY: 320,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }

  ngOnInit() {
    this.permission = JSON.parse(localStorage.getItem('permission') || '{}');
    
    const currentPath = this.route.snapshot.routeConfig?.path;
    switch (currentPath) {
      case 'wallet-source-manager':
        this.title = 'Quản lý ví';
        this.titleTable = 'Quản lý ví tài khoản';
        this.titleChart = 'Biểu đồ ví tài khoản';
        this.typeWallet = 3;
        this.isPermissionExport = this.permission.includes('wallet-source-manager-export');
        break;

      case 'wallet-gratitude-manager':
        this.title = 'Quản lý ví';
        this.titleTable = 'Quản lý ví tri ân khách hàng';
        this.titleChart = 'Biểu đồ ví tri ân khách hàng';
        this.typeWallet = 2;
        this.isPermissionExport = this.permission.includes('wallet-gratitude-manager-export');
        break;

      case 'wallet-sale-manager':
        this.title = 'Quản lý ví';
        this.titleTable = 'Quản lý ví hoa hồng CTV';
        this.titleChart = 'Biểu đồ ví hoa hồng CTV';
        this.typeWallet = 1;
        this.isPermissionExport = this.permission.includes('wallet-sale-manager-export');
        break;

      case 'wallet-c-manager':
        this.title = 'Quản lý ví';
        this.titleTable = 'Quản lý ví C';
        this.titleChart = 'Biểu đồ ví C';
        this.typeWallet = 4;
        this.isPermissionExport = this.permission.includes('wallet-c-manager-export');
        break;
      default:
        this.title = '';
        this.titleTable = '';
        this.titleChart = '';
        this.isPermissionExport = false;
        break;
    }
    this.date = new Date();
    this.getAllCollaborator();
    this.getWalletDetailAdmin();
    this.loadChartData();
  }

  getWalletDetailAdmin() {
    this.isLoading = true;
    this._walletDetailService.getWalletDetailAdmin(formatDate(this.date, 'yyyy-MM-dd', 'en-US').toString(), this.typeWallet).subscribe(
      (response: any) => {
        this.data = response.data;
        this.isLoading = false;
      },
      (error: any) =>  {
        this.data = [];
        this.isLoading = false;
        console.error('Error fetching data:', error);
      });
  }

  exportWalletDetailAdmin() {
    this.isLoading = true;
    this._walletDetailService.exportWalletDetailAdmin(formatDate(this.date, 'yyyy-MM-dd', 'en-US').toString(), this.typeWallet).subscribe(
      (response: any) => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        if(this.typeWallet == 1) {
          link.download = `Bao_Cao_Vi_Hoa_Hong-${formatDate(this.date, 'dd-MM-yyyy', 'en-US')}.xlsx`;
        } else if(this.typeWallet == 2) {
          link.download = `Bao_Cao_Vi_tri_an_khach_hang-${formatDate(this.date, 'dd-MM-yyyy', 'en-US')}.xlsx`;
        }
        else if(this.typeWallet == 3) {
          link.download = `Bao_Cao_Vi_tai_Khoan-${formatDate(this.date, 'dd-MM-yyyy', 'en-US')}.xlsx`;
        }
        else if(this.typeWallet == 4) {
          link.download = `Bao_Cao_Vi_tai_Khoan_C-${formatDate(this.date, 'dd-MM-yyyy', 'en-US')}.xlsx`;
        }
        link.click();
        this.isLoading = false;
      },
      (error: any) =>  {
        this.isLoading = false;
        console.error('Error fetching data:', error);
      });
  }


  onDateChange(newDate: Date): void {
    this.date = newDate;
    this.getWalletDetailAdmin();
    this.loadChartData();
  }

  getAllCollaborator(){
    const model = {
      startDate: this.startDate,
      endDate: this.endDate
    }
    this._collaboratorService.getAllCollaborator(model).subscribe(
      (response: any) => {
        this.dataCombobox = response.data.map((item: any) => ({
          label: `${item.userName} - ${item.name}`,
          value: item.id
        }));
        this.parentId = this.dataCombobox[0].value;
      },
      (error: any) =>  {
        this.dataCombobox = [];
        console.error('Error fetching data:', error);
      });
  }

  loadChartData() {
    this._walletDetailService.getWalletDetailReportAdmin(formatDate(this.date, 'yyyy-MM-dd', 'en-US').toString(), this.typeWallet).subscribe((response: any) => {
      console.log(response.data);
      const hours = response.data.map((item: any) => item.hour);
      console.log(hours);
      const values = response.data.map((item: any) => item.totalValue);
      console.log(values)
      this.chartOptions = {
        series: [
          {
            name: "Tiền",
            data: values
          }
        ],
        chart: {
          height: 350,
          type: "bar"
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top" // top, center, bottom
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function(val) {
            return val + "ELP";
          },
          offsetY: -20,
          style: {
            fontSize: "8px",
            colors: ["#304758"]
          }
        },
  
        xaxis: {
          categories: hours,
          position: "top",
          labels: {
            offsetY: -18
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: true,
            offsetY: -35
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: function(val) {
              return val + "ELP";
            }
          }
        },
        title: {
          text: `Thống kê tiền ngày ${formatDate(this.date, 'dd/MM/yyyy', 'en-US')}`,
          floating: false,
          offsetY: 320,
          align: "center",
          style: {
            color: "#444"
          }
        }
      };
    });
  }

}
