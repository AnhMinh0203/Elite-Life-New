import {Component,Output,EventEmitter,Input,ViewEncapsulation} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/elite-life/service/order.service';

import { AuthenticateService } from 'src/app/pages/authentication/service/authenticate.service';
import { MessageService } from 'primeng/api';

// Ví 1: EL10939
// Ví 2: EL10940
// Ví C: EL10941

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;
  isOrder: boolean = false;
  test: any;
  userInfo: any;
  collaboratorId: any;
  amountOrder:any
  payed: any;
  orderId: any;
  data: any;

  listWarehouse:any;
  selectedWarehouse: any;

  orderHistory: any[] = []; // Lưu dữ liệu trả về từ API
  columns: any[] = []; // Khai báo các cột

  constructor(
    public dialog: MatDialog,
    private _authenticateService: AuthenticateService,
    private _orderService: OrderService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userInfo = localStorage.getItem('info');
    this.loadFormOrder();
  }

  logout() {
    this._authenticateService.logout();
  }

  showOrderForm() {
    this.isOrder = true;
  }

  getWalletHistory() {
    let model = {
      CollaboratorId: this.collaboratorId,
      StartDate: '',
      EndDate: '',

    }
    this._orderService.getWalletHistory(model).subscribe(
      (response: any) => {
        this.data = response.data;

      },
      (error: any) => {
        console.error('Error fetching data:', error);
      });
  }

  refreshWalletData() {
    this.getWalletHistory();
  }

  createHistory(collaboratorId: number, type: string, value: number, note: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const history = {
        CollaboratorId: collaboratorId,
        WalletType: type,
        Value: value,
        Note: note
      };

      this._orderService.createWithdrawHistory(history).subscribe({
        next: (response: any) => {
          if (response?.message === 'Success') {
            resolve();
          } else {
            reject('Failed to create history');
          }
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }

  async shareCommission(){
    let model = {
      CollaboratorId: this.collaboratorId,
      AmountOrder: this.amountOrder,
    }
    this._orderService.caculateShareCommissionService(model).subscribe({
      next: async (response: any) => {
        if (response?.message === 'Success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.data
          });
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.data });
        }
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Có lỗi sảy ra khi tải dữ liệu' });
        console.error(err);
      },
    });
  }

  async gratitudeCommission (orderId:number){
    let model = {
      CollaboratorId: this.collaboratorId,
      OrderId: orderId,
      AmountOrder: this.amountOrder,
    }
    this._orderService.caculateGratitudeCommissionService(model).subscribe({
      next: async (response: any) => {
        if (response?.message === 'Success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.data
          });
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.data });
        }
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Có lỗi sảy ra khi tải dữ liệu' });
        console.error(err);
      },
    });
  }

  async introductionCommission(){
    let model = {
      CollaboratorId: this.collaboratorId,
      AmountOrder: this.amountOrder,
    }
    this._orderService.caculateIntroCommissionService(model).subscribe({
      next: async (response: any) => {
        if (response?.message === 'Success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.data
          });
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.data });
        }
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Có lỗi sảy ra khi tải dữ liệu' });
        console.error(err);
      },
    });
  }


  async leadershipCommission (){
    let model = {
      CollaboratorId: this.collaboratorId,
      AmountOrder: this.amountOrder,
    }
    this._orderService.caculateLeaderCommissionService(model).subscribe({
      next: async (response: any) => {
        if (response?.message === 'Success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.data
          });
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.data });
        }
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Có lỗi sảy ra khi tải dữ liệu' });
        console.error(err);
      },
    });
  }

  async calculateTotalCommission(orderId:number){
    await this.shareCommission();
    await this.gratitudeCommission(orderId);
    await this.introductionCommission();
    await this.leadershipCommission();
    await this.checkRank();
  }


  async placeOrder() {
    if (this.userInfo) {
      const parsedInfo = JSON.parse(this.userInfo);
      this.collaboratorId = parsedInfo.id;

      if(!this.payed || !this.amountOrder){
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Vui lòng nhập đủ thông tin'
        });
        return ;
      }

      if(this.payed < 3450000){
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Số tiền không đủ'
        });
        return ;
      }
      let model = {
        CollaboratorId: this.collaboratorId,
        ProductId: 1,
        Value: this.amountOrder * 3450000,
        Amount: this.amountOrder,
        Payed: this.payed
      }
      this._orderService.placeOrderService(model).subscribe({
        next: async (response: any) => {
          console.log(response);
          if (response?.statusCode === 200) {

            this.orderId = response.data.orderId
            // Tính toán hoa hồng
            await this.calculateTotalCommission(this.orderId)
            // tạo lịch sử
            await this.createHistory(this.collaboratorId, 'Source', -this.payed, `Mua ${this.amountOrder} combo`)
            // load lại web
            this.refreshWalletData();
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: response.data.message
            });
            // setTimeout(() => {
            //   location.reload();
            // }, 2000);
          } else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: response.data.message });
          }
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Có lỗi sảy ra khi tải dữ liệu' });
          console.error(err);
        },
      });
    }
  }

  loadFormOrder(){
    this.getOrderHistory();
    this.getWarehouse();
  }

  getOrderHistory(){
    if (this.userInfo) {
      const parsedInfo = JSON.parse(this.userInfo);
      this.collaboratorId = parsedInfo.id;
      this._orderService.getOrderHistoryService(this.collaboratorId).subscribe({
        next: async (response: any) => {
          this.orderHistory = response.data
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Có lỗi sảy ra khi tải dữ liệu' });
          console.error(err);
        },
      });
    }
  }

  getWarehouse(){
    this._orderService.getWarehouseService().subscribe({
      next: (response: any) => {
        this.listWarehouse = response.data;

        if (this.listWarehouse.length > 0) {
          this.selectedWarehouse = this.listWarehouse[0];
        }
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Có lỗi sảy ra khi tải dữ liệu' });
        console.error(err);
      },
    });
  }

  updateTotalMoney(){
    if (this.amountOrder) {
      this.payed = this.amountOrder * 3450000;
    } else {
      this.payed = 0;
    }
  }

  checkRank(){
    this._orderService.checkRankService(this.collaboratorId).subscribe({
      next: (response: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.data
        });
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Có lỗi sảy ra khi tải dữ liệu' });
        console.error(err);
      },
    });
  }
}
