import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { OrderService } from '../service/order.service';
import { MessageService } from 'primeng/api';
import { HttpResponse } from '@angular/common/http';
import { SharedService } from '../share/shared.service';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrl: './order-management.component.scss'
})
export class OrderManagementComponent {
  test: any;
  currentPage: number = 1;
  rangeDates: Date[] | undefined;
  startDate: any;
  endDate: any;
  collaboratorId: any;
  userInfo:any;
  orders: any[] = [];
  totalPayed:any;

  constructor(
    private messageService: MessageService,
    private datePipe: DatePipe,
    private _orderService: OrderService,
    private sharedService: SharedService) { }

  ngOnInit() {
    this.userInfo = localStorage.getItem('info');
    this.getOrderByRangeDate();
  }


  orderAgain() {
    this.sharedService.showOrderDialog(true);
  }

  getOrderByRangeDate() {
    if (this.userInfo) {
      const parsedInfo = JSON.parse(this.userInfo);
      this.collaboratorId = parsedInfo.id;

      let model = {
        CollaboratorId: this.collaboratorId,
        StartDate: this.startDate,
        EndDate: this.endDate,

      }
      this._orderService.getOrderByRangeDateService(model).subscribe(
        (response: any) => {
          this.orders = response.data;
          this.totalPayed = this.orders.reduce((sum, order) => sum + order.payed, 0);
        },
        (error: any) => {
          console.error('Error fetching data:', error);
        });
    }

  }


  onDateChange(event: any) {
    if (this.rangeDates && this.rangeDates.length === 2) {
      const [startDate, endDate] = this.rangeDates;
      this.startDate = this.datePipe.transform(startDate, 'dd/MM/yyyy');
      this.endDate = this.datePipe.transform(endDate, 'dd/MM/yyyy');
      if (this.startDate && this.endDate) {
        this.getOrderByRangeDate();
      }
    }
  }
  exportExcelOrderByRange(){
    if (this.startDate && this.endDate) {
          const model = {
            CollaboratorId: this.collaboratorId,
            StartDate: this.startDate,
            EndDate: this.endDate
          };

          this._orderService.exportExcelOrderRangeService(model).subscribe({
            next: (response: HttpResponse<Blob>) => {
              if (response.body) {
                const blob = new Blob([response.body], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                const url = window.URL.createObjectURL(blob);

                // Tạo thẻ <a> để tải file
                const a = document.createElement('a');
                a.href = url;

                // Đọc tên file từ header hoặc đặt tên mặc định
                const fileNameFromResponse = response.headers?.get('fileName') || 'Export_Wallet_History.xlsx';

                // Lấy ngày giờ hiện tại và định dạng
                const currentDate = new Date();
                const formattedDate = currentDate.toISOString().slice(0, 10); // YYYY-MM-DD
                const formattedTime = currentDate.toTimeString().slice(0, 8).replace(/:/g, '-'); // HH-MM-SS

                // Tạo tên file với hậu tố ngày và giờ
                const fileName = `${fileNameFromResponse.split('.')[0]}_${formattedDate}_${formattedTime}.xlsx`;
                a.download = fileName;

                // Kích hoạt tải file
                a.click();

                // Hủy URL sau khi sử dụng
                window.URL.revokeObjectURL(url);

              } else {
                this.messageService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: 'Không nhận được dữ liệu từ server'
                });
              }
            },
            error: (err) => {
              console.error('Error downloading file:', err);
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Lỗi khi tải xuống file Excel'
              });
            }
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Vui lòng chọn thời gian'
          });
        }
  }


}
