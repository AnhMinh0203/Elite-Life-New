import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { OrderService } from '../service/order.service';
import { WalletDetailService } from '../service/wallet-detail.service';
import { TimeZoneService } from '../service/convert-timezone.service';

@Component({
  selector: 'app-cart-manager',
  templateUrl: './cart-manager.component.html',
  styleUrls: ['./cart-manager.component.css']
})
export class CartManagerComponent implements OnInit {
  rangeDates: Date[] | undefined;
  search: any;
  startDate: any;
  endDate: any;
  data: any;
  items: MenuItem[] | undefined;
  cart: any;
  visibleDate: boolean = false;
  deliveryDate: any;
  visibleBill: boolean = false;
  listBill: any;
  first = 0;
  visibleCommission: boolean = false;
  listCommission: any;
  isLoading: boolean = false;
  permission: any;
  isPermissionExport: boolean = false;
  isPermissionDelivery: boolean = false;

  constructor(
    private _orderService: OrderService,
    private messageService: MessageService,
    private _timezoneServie: TimeZoneService,
    private _walletDetailService: WalletDetailService) {
    this.items = [
      {
          label: 'Chi tiết hóa đơn',
          icon: 'pi pi-receipt',
          command: () => this.showDialogBill()
      },
      {
          label: 'Chi tiết hoa hồng',
          icon: 'pi pi-dollar',
          command: () => this.showDialogComission()
      }
    ]
   }

  ngOnInit() {
    this.permission = JSON.parse(localStorage.getItem('permission') || '{}');
    this.isPermissionExport = this.permission.includes('cart-manager-export-cart-manager');
    this.isPermissionDelivery = this.permission.includes('cart-manager-select-delivery-date');
    this.getOrderInfor();
  }

  onDateChange(event: any) {
    if (this.rangeDates && this.rangeDates.length === 2) {
      const [startDate, endDate] = this.rangeDates;
      this.startDate = startDate;
      this.endDate = endDate
      if(this.startDate && this.endDate) {
        this.getOrderInfor();
      }
    }
  }
  getOrderInfor(){
    const model = {
      startDate: this.startDate ? this._timezoneServie.convertUTCToTimezone(this.startDate).trim() : null,
      endDate: this.endDate ? this._timezoneServie.convertUTCToTimezone(this.endDate).trim() : null,
    };

    this._orderService.getOrderInfor(model).subscribe(
      (response: any) => {
        this.data = response.data;
      },
      (error: any) => {
        this.data = [];
        console.error('Error fetching data:', error);
      });
  }

  exportExcelOrderInfor() {
    const model = {
      startDate: this.startDate ? this._timezoneServie.convertUTCToTimezone(this.startDate).trim() : null,
      endDate: this.endDate ? this._timezoneServie.convertUTCToTimezone(this.endDate).trim() : null,
    };

    this._orderService.exportExcelOrder(model).subscribe(
      (response: any) => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Danh sách đơn hàng.xlsx';
        link.click();
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  searchName() {
    if(this.search) {
      this.data = this.data.filter((item: any) => item != null);
      this.data = this.data.filter((item: any) =>
        (item?.mobile?.toLowerCase()?.includes(this.search.trim().toLowerCase()) ||
         item?.name?.toLowerCase()?.includes(this.search.trim().toLowerCase()) ||
         item?.address?.toLowerCase()?.includes(this.search.trim().toLowerCase()) ||
         item?.warehouseName?.toLowerCase()?.includes(this.search.trim().toLowerCase())
        )
      );
    } else {
      this.getOrderInfor();
      this.data = this.data.filter((item: any) => item != null);
    }
  }

  changId(cart: any) {
    this.cart = cart;
  }

  showDialogDate(customer: any) {
    this.cart = customer;
    if(!this.isPermissionDelivery) {
      this.messageService.add({severity:'error', summary: 'Lỗi', detail: 'Bạn không có quyền cập nhật ngày gửi đơn'});
      return;
    }
    this.visibleDate = true;
    this.deliveryDate = new Date(customer.deliveryDate);
  }

  UpdateOrderDeliveryDate() {
    if(!this.deliveryDate) {
      this.messageService.add({severity:'error', summary: 'Lỗi', detail: 'Vui lòng chọn ngày gửi đơn'});
      return;
    }
    const model = {
      id: this.cart.orderId,
      deliveryDate: this.deliveryDate
    }

    this._orderService.updateOrderDeliveryDate(model).subscribe(
      (response: any) => {
        if(response.data) {
          this.getOrderInfor();
          this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Cập nhật thành công'});
          this.visibleDate = false
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  showDialogBill() {
    this.visibleBill = true;
    this.isLoading = true;
    this._orderService.GetBillOrderInfoAsync(this.cart.orderId).subscribe(
      (response: any) => {
        if(response.data) {
          this.listBill = response.data
          this.isLoading = false
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
        this.isLoading = false
      }
    );
  }

  showDialogComission() {
    this.visibleCommission = true;
    this.isLoading = true;
    this._walletDetailService.getCommissionByCollaboratorId(this.cart.collaboratorId).subscribe(
      (response: any) => {
        if(response.data) {
          this.listCommission = response.data
          this.isLoading = false;
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
        this.isLoading = false
      }
    );
  }

}
