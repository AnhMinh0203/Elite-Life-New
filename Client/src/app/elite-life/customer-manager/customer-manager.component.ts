import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexStroke, ApexTooltip, ApexDataLabels } from 'ng-apexcharts';
import { CollaboratorService } from '../service/collaborator.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  email: string;
  mobile: string;
  createdAt: Date;
}

@Component({
  selector: 'app-customer-manager',
  templateUrl: './customer-manager.component.html',
  styleUrls: ['./customer-manager.component.css']
})
export class CustomerManagerComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  rangeDates: Date[] | undefined;
  data: any;
  dataSource: any;
  displayedColumns: string[] = ['position','name', 'userName','email','mobile', 'rank','createdAt'];
  info: any;
  collaboratorNumber: number = 0;
  startDate: any;
  endDate: any;

  constructor(private _collaboratorService: CollaboratorService) { }

  ngOnInit() {
    this.info = JSON.parse(localStorage.getItem('info') || '{}');
    this.getAllCollaboratorByParentId();
  }

  onDateChange(event: any) {
    if (this.rangeDates && this.rangeDates.length === 2) {
      const [startDate, endDate] = this.rangeDates;
      this.startDate = startDate;
      this.endDate = endDate
      if(this.startDate && this.endDate) {
        this. getAllCollaboratorByParentId();
      }
    }
  }

  getAllCollaboratorByParentId(){
    const model = {
      id: this.info.id,
      startDate: this.startDate,
      endDate: this.endDate
    }
    this._collaboratorService.getAllCollaboratorByParentId(model).subscribe(
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

  exportExcelAllCollaboratorByParentId(){
    const model = {
      id: this.info.id,
      startDate: this.startDate,
      endDate: this.endDate
    }

    this._collaboratorService.exportExcelAllCollaboratorByParentId(model).subscribe(
      (response: any) => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Báo cáo quản lý khách hàng.xlsx';
        link.click();
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      });
  }

}
