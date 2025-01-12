import { Component, OnInit } from '@angular/core';
import { CollaboratorService } from '../service/collaborator.service';

@Component({
  selector: 'app-id-manager',
  templateUrl: './id-manager.component.html',
  styleUrls: ['./id-manager.component.css']
})
export class IdManagerComponent implements OnInit {

  rangeDates: Date[] | undefined;
  rangeDateContract: Date[] | undefined;
  search: any;
  searchContract: any;
  startDate: any;
  endDate: any;
  startDateContract: any;
  endDateContract: any;
  data: any;
  dataContract: any;
  dataCombobox: { label: string; value: number }[] = [];
  parentId: any;
  permission: any;
  isPermissionExport: boolean = false

  constructor(private _collaboratorService: CollaboratorService) { }

  ngOnInit() {
    this.permission = JSON.parse(localStorage.getItem('permission') || '{}');
    this.isPermissionExport = this.permission.includes('id-manager-export');
    this.getAllCollaboratorByParentId();
    this.getAllCollaboratorContract();
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

  searchName() {
    if(this.search) {
      this.data = this.data.filter((item: any) => item != null);
      this.data = this.data.filter((item: any) => 
        (item?.userName?.toLowerCase()?.includes(this.search.toLowerCase()) || 
         item?.name?.toLowerCase()?.includes(this.search.toLowerCase()))
      );
    } else {
      this.getAllCollaboratorByParentId();
      this.data = this.data.filter((item: any) => item != null);
    }
  }

  onDateContractChange(event: any) {
    if (this.rangeDateContract && this.rangeDateContract.length === 2) {
      const [startDate, endDate] = this.rangeDateContract;
      this.startDateContract = startDate;
      this.endDateContract = endDate
      if(this.startDateContract && this.endDateContract) {
        this. getAllCollaboratorContract();
      }
    }
  }

  searchNameContract() {
    if(this.searchContract) {
      this.dataContract = this.dataContract.filter((item: any) => item != null);
      this.dataContract = this.dataContract.filter((item: any) => 
        (item?.userName?.toLowerCase()?.includes(this.searchContract.toLowerCase()) || 
         item?.name?.toLowerCase()?.includes(this.searchContract.toLowerCase()))
      );
    } else {
      this.getAllCollaboratorContract();
      this.dataContract = this.dataContract.filter((item: any) => item != null);
    }
  }

  getAllCollaboratorByParentId(){
    const model = {
      startDate: this.startDate,
      endDate: this.endDate
    }
    this._collaboratorService.getAllCollaborator(model).subscribe(
      (response: any) => {
        this.data = response.data;
        this.data = this.data.map((item: any, index: any) => ({
          ...item,
          position: index + 1
        }));
        this.data = this.data.filter((item: any) => item != null);
        this.dataCombobox = this.data.map((item: any) => ({
          label: `${item.userName} - ${item.name}`,
          value: item.id
        }));
        this.parentId = this.dataCombobox[0].value;
      },
      (error: any) => {
        this.data = [];
        console.error('Error fetching data:', error);
      });
  }

  exportExcelCollaboratorIDManager(){
    const model = {
      startDate: this.startDate,
      endDate: this.endDate
    }

    this._collaboratorService.exportExcelCollaboratorIDManager(model).subscribe(
      (response: any) => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Danh sách Tổng ID.xlsx';
        link.click();
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      });
  }

  getAllCollaboratorContract(){
    const model = {
      startDate: this.startDateContract,
      endDate: this.endDateContract
    }
    this._collaboratorService.getAllCollaboratorContract(model).subscribe(
      (response: any) => {
        this.dataContract = response.data;
      },
      (error: any) => {
        this.dataContract = [];
        console.error('Error fetching data:', error);
      });
  }

  exportExcelAllCollaboratorContract() {
    const model = {
      startDate: this.startDateContract,
      endDate: this.endDateContract
    }
    this._collaboratorService.exportExcelAllCollaboratorContract(model).subscribe(
      (response: any) => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Danh sách Tổng ID đã ký hợp đồng CTV.xlsx';
        link.click();
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      });
  }

}
