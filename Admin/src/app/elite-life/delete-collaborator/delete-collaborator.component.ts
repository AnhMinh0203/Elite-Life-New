import { Component, OnInit } from '@angular/core';
import { CollaboratorService } from '../service/collaborator.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-delete-collaborator',
  templateUrl: './delete-collaborator.component.html',
  styleUrls: ['./delete-collaborator.component.css']
})
export class DeleteCollaboratorComponent implements OnInit {
  rangeDates: Date[] | undefined;
  startDate: any;
  endDate: any;
  data: any;
  permission: any;
  isPermissionExport: boolean = false;
  info: any;

  constructor(private _collaboratorService: CollaboratorService, private messageService: MessageService) { }

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
      startDate: this.startDate,
      endDate: this.endDate
    }
    this._collaboratorService.getAllCollaboratorDelete(model).subscribe(
      (response: any) => {
        this.data = response.data;
        this.data = this.data.map((item: any, index: any) => ({
          ...item,
          position: index + 1
        }));
        this.data = this.data.filter((item: any) => item != null);
      },
      (error: any) => {
        this.data = [];
        console.error('Error fetching data:', error);
      });
  }

  exportExcelCollaboratorTop(){
    const model = {
      startDate: this.startDate,
      endDate: this.endDate
    }

    this._collaboratorService.exportExcelAllCollaborator(model).subscribe(
      (response: any) => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Danh sách thành viên.xlsx';
        link.click();
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      });
  }


  delete(collaborator: any){
    // if(confirm("Bạn có chắc chắn muốn xóa thành viên này?")){
      
    // }
    this._collaboratorService.deleteCollaboratorAdmin(collaborator.id, this.info?.roleId).subscribe(
      (response: any) => {
        if(response.data) {
          if(!collaborator.chairpersonConfirm && this.info.roleId != 7) {
            this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Xóa thành viên thành công, vui lòng đợi Chủ tịch xác nhận'});
          }
          else if(!collaborator.generalDirectorConfirm && this.info.roleId != 8) {
            this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Xóa thành viên thành công, vui lòng đợi Tổng giám đốc xác nhận'});
          }
          else {
            this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Xóa thành viên thành công'});
          }
        }
        this.getAllCollaboratorByParentId();
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      });
  }

}
