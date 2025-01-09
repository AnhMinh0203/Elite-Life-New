import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WithdrawalRequestsService } from '../service/withdrawal-requests.service';
import { MessageService } from 'primeng/api';
import { TimeZoneService } from '../service/convert-timezone.service';

@Component({
  selector: 'app-withdrawal-request',
  templateUrl: './withdrawal-request.component.html',
  styleUrls: ['./withdrawal-request.component.css']
})
export class WithdrawalRequestComponent implements OnInit {
  rangeDates: Date[] | undefined;
  data: any;
  startDate: any;
  endDate: any;
  visibleAccept: boolean = false;
  visibleReject: boolean = false;
  note: any;
  item: any;
  noteReject: any;

  constructor(
    private _withdrawalRequestsService: WithdrawalRequestsService, 
    private messageService: MessageService,
    private _timezoneServie: TimeZoneService
  ) { }

  ngOnInit() {
    this.getWithdrawalRequests();
  }

  onDateChange(event: any) {
    if (this.rangeDates && this.rangeDates.length === 2) {
      const [startDate, endDate] = this.rangeDates;
      this.startDate = startDate;
      this.endDate = endDate
      if(this.startDate && this.endDate) {
        this.getWithdrawalRequests();
      }
    }
  }

  getWithdrawalRequests() {
    const model = {
      startDate: this.startDate ? this._timezoneServie.convertUTCToTimezone(this.startDate).trim() : null,
      endDate: this.endDate ? this._timezoneServie.convertUTCToTimezone(this.endDate).trim() : null,
    };
    this._withdrawalRequestsService.getProcessingWithdrawalRequests(model).subscribe(
      (res) => {
        this.data = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showDialogAcceptRequest(item: any) {
    this.visibleAccept = true;
    this.item = item;
  }

  showDialogRejectRequest(item: any) {
    this.visibleReject = true;
    this.item = item;
  }

  acceptRequest() {
    const model = {
      withdrawalRequestId: this.item.id,
      note: this.note
    }
    this._withdrawalRequestsService.ApproveWithdrawalRequest(model).subscribe(
      (res) => {
        if(res && res.data) {
          this.messageService.add({severity:'success', summary: 'Success', detail: "Nạp tiền thành công"});
          this.visibleAccept = false;
          this.getWithdrawalRequests();
        }
        else {
          this.messageService.add({severity:'error', summary: 'Error', detail: "Nạp tiền thất bại"});
        }
      },
      (error) => {
        console.log(error);
        this.messageService.add({severity:'error', summary: 'Error', detail: "Nạp tiền thất bại" + error});
      }
    );
  }

  rejectRequest() {
    if(!this.noteReject) {
      this.messageService.add({severity:'error', summary: 'Error', detail: "Vui lòng nhập lý do từ chối"});
      return;
    }
    const model = {
      withdrawalRequestId: this.item.id,
      note: this.noteReject
    }
    this._withdrawalRequestsService.RejectWithdrawalRequest(model).subscribe(
      (res) => {
        if(res && res.data) {
          this.messageService.add({severity:'success', summary: 'Success', detail: "Từ chối thành công"});
          this.visibleReject = false;
          this.getWithdrawalRequests();
        }
        else {
          this.messageService.add({severity:'error', summary: 'Error', detail: "Từ chối thất bại"});
        }
      },
      (error) => {
        console.log(error);
        this.messageService.add({severity:'error', summary: 'Error', detail: "Từ chối thất bại" + error});
      }
    );
  }

}
