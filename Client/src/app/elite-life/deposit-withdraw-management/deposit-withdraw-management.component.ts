import { Component, HostListener, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { WithdrawService } from '../service/withdraw.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-deposit-withdraw-management',
  templateUrl: './deposit-withdraw-management.component.html',
  styleUrl: './deposit-withdraw-management.component.scss'
})

export class DepositWithdrawManagementComponent {
  @ViewChild(CdkVirtualScrollViewport, { static: true })
  cdkVirtualScrollViewPort!: CdkVirtualScrollViewport;
  //share
  availableSource: any;

  //tab1
  bankOptions: any;
  bankName: any;
  bankNumber: any;
  bankOwner: any
  withdrawalAmount: any;
  actualReceive: number = 0;

  //tab2
  availableWallets: any;
  walletOptions: any;
  selectedType: any;
  withdrawCommissionAmount: any;

  //tab3
  visibleClients: any[] = [];
  receivePerson: any;
  transferAmount: any;

  //init
  userInfo: any;
  userName: any;
  bankBranchName: any;
  listClients: any[] = [];
  currentPage: number = 1;
  rangeDates: Date[] | undefined;
  search: any;
  startDate: any;
  endDate: any;
  shareWallet: any; // ví đồng chia
  gratitudeWallet: any; // ví tri ân
  commissionWallet: any; // ví hoa hồng giới thiệu
  leadershipWallet: any; // ví thưởng lãnh đạo
  totalRecords: number = 0;
  dataCollaborator: any;
  dataWithdrawHistory: any;
  collaboratorId: any;
  allClients: any[] = [];
  pageSize: number = 10; // Số lượng bản ghi mỗi lần tải
  currentIndex: number = 0; // Vị trí hiện tại trong danh sách
  dataCombobox: { label: string; value: number }[] = [];
  filteredToppingList: any[] = [];

  parentId:any;
  totalMember:any;
  searchTerm:any;
  singleSelectControl  = new FormControl();
  selectedUserOption:any;
  selectedUserName:any;

  constructor(
    private datePipe: DatePipe,
    private messageService: MessageService,
    private _withdrawService: WithdrawService
  ) {}

  ngOnInit() {
    this.userInfo = localStorage.getItem('info');
    this.loadWithDrawInfor();
    this.loadBanks();
    this.loadAllClients();
    this.initializeWalletOptions();
    this.getWalletHistory();
    this.getAllCollaborator();
  }

  onWindowScroll(event: any) {
    const element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      alert('Scrolled to the end');
      this.loadMoreClients();
    }
  }

  ngAfterViewInit(): void {
    this.getWalletHistory();
  }

  getWalletHistory() {
    let model = {
      CollaboratorId: this.collaboratorId,
      StartDate: this.startDate,
      EndDate: this.endDate,

    }
    this._withdrawService.getWalletHistory(model).subscribe(
      (response: any) => {
        this.dataWithdrawHistory = response.data;

      },
      (error: any) => {
        console.error('Error fetching data:', error);
      });
  }

  onDropdownScroll(event: any) {
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    const clientHeight = event.target.clientHeight;

    // Nếu cuộn đến cuối
    if (scrollHeight - scrollTop === clientHeight) {
      this.loadMoreClients();
    }
  }


  loadAllClients() {
    this._withdrawService.getWalletClients().subscribe(
      (response) => {
        this.allClients = response.data; // Lưu toàn bộ danh sách
        this.loadMoreClients(); // Hiển thị 10 bản ghi đầu tiên
      },
      (error) => {
        console.error('Error loading clients:', error);
      }
    );
  }

  loadMoreClients() {
    // Kiểm tra nếu còn dữ liệu để tải
    if (this.currentIndex < this.allClients.length) {
      const nextClients = this.allClients.slice(
        this.currentIndex,
        this.currentIndex + this.pageSize
      );

      // Chuyển đổi đối tượng thành chuỗi định dạng "userName - displayName"
      const formattedClients = nextClients.map(
        client => `${client.userName} - ${client.displayName}`
      );

      // Thêm dữ liệu vào danh sách hiển thị
      this.visibleClients = [...this.visibleClients, ...formattedClients];
      this.currentIndex += this.pageSize;
      console.log('Visible Clients:', this.visibleClients);
    }
  }

  initializeWalletOptions() {
    this.walletOptions = [
      { label: 'Đồng chia', value: 'CustomerShare' },
      { label: 'Tri ân', value: 'CustomerGratitude' },
      { label: 'Hoa hồng giới thiệu', value: 'Sale1' },
      { label: 'Thưởng lãnh đạo', value: 'Sale2' },
    ];
  }

  loadBanks() {
    this._withdrawService.getBanks().subscribe({
      next: (response: any) => {
        if (response?.message === 'Success') {
          this.bankOptions = response.data;
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Lỗi khi hiển thị ngân hàng',
          });
        }
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Có lỗi xảy ra khi tải dữ liệu',
        });
        console.error(err);
      },
    });
  }

  getCollaboratorIdByUserName() {
    if (this.userInfo) {
      const parsedInfo = JSON.parse(this.userInfo);
      this.userName = parsedInfo.userName;
      if (this.userName) {
        this._withdrawService.getCollaboratorId(this.userName).subscribe({

          next: (response: any) => {
            if (response?.message === 'Success') {
              this.collaboratorId = response.data

            } else {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Tải dữ liệu thất bại' });
            }
          },
          error: (err) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Có lỗi sảy ra khi tải dữ liệu' });
            console.error(err);
          },
        });
      }
    }
  }

  loadWithDrawInfor() {
    if (this.userInfo) {
      const parsedInfo = JSON.parse(this.userInfo);
      this.userName = parsedInfo.userName;
      this.bankBranchName = parsedInfo.bankBranchName;
      this.collaboratorId = parsedInfo.id;
      if (this.userName) {
        this._withdrawService.withDrawMoney(this.userName).subscribe({

          next: (response: any) => {
            if (response?.message === 'Success') {
              const infor = response.data;
              this.availableSource = infor.available;
              this.bankNumber = infor.bankNumber;
              this.bankOwner = infor.bankOwner;
              this.bankName = infor.bankName;

            } else {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Tải dữ liệu thất bại' });
            }
          },
          error: (err) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Có lỗi sảy ra khi tải dữ liệu' });
            console.error(err);
          },
        });
      }
    }
  }

  updateActualReceive() {
    if (this.withdrawalAmount) {
      this.actualReceive = this.withdrawalAmount * 0.9;
    } else {
      this.actualReceive = 0;
    }
  }

  formatInput(event: any) {
    let input = event.target.value;
    input = input.replace(/[^0-9]/g, '');
    let formattedInput = input.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    this.withdrawalAmount = formattedInput;
  }

  requestWithdrawMoney() {
    var model = {
      CollaboratorId: this.collaboratorId,
      BankNumber: this.bankNumber,
      BankOwner: this.bankOwner,
      Bank: this.bankName,
      BankBranchName: this.bankBranchName,
      WithdrawalAmount: this.withdrawalAmount,
      Status: 'Processing',
      Tax: this.withdrawalAmount - this.actualReceive,
      ActualNumberReceived: this.actualReceive
    }
    if (!this.withdrawalAmount) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: "Vui lòng nhập đủ thông tin",
      });
      return;
    }
    if((this.withdrawalAmount - this.availableSource < 0)||(this.withdrawalAmount < 0)){
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: "Số dư không đủ",
      });
      return;
    }
    this._withdrawService.requestWithDrawMoney(model).subscribe({

      next: (response: any) => {
        if (response?.message === 'Success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.data,
          });
          setTimeout(() => {
            location.reload();
          }, 1000);
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Tải dữ liệu thất bại' });
        }
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Có lỗi sảy ra khi tải dữ liệu' });
        console.error(err);
      },
    });
  }

  onDateChange(event: any) {
    if (this.rangeDates && this.rangeDates.length === 2) {
      const [startDate, endDate] = this.rangeDates;
      this.startDate = this.datePipe.transform(startDate, 'dd/MM/yyyy');
      this.endDate = this.datePipe.transform(endDate, 'dd/MM/yyyy');
      if (this.startDate && this.endDate) {
        this.getWalletHistory();
      }
    }
  }

  onDateChangeToGetCollaborator(event: any) {
    if (this.rangeDates && this.rangeDates.length === 2) {
      const [startDate, endDate] = this.rangeDates;
      this.startDate = startDate;
      this.endDate = endDate
      if(this.startDate && this.endDate) {
        this. getAllCollaborator();
      }
    }
  }

  formatValue(value: number): string {
    const integerValue = Math.floor(value);
    return integerValue > 0 ? `+${integerValue.toLocaleString('vi-VN')}` : integerValue.toLocaleString('vi-VN');
  }

  onWalletOptionsChange(type: string): void {
    let model = {
      CollaboratorId: this.collaboratorId,
      Type: type
    }
    this._withdrawService.getWalletByType(model).subscribe({

      next: (response: any) => {
        if (response?.data != null) {
          this.availableWallets = Math.round(response.data);

        } else {
          this.availableWallets = 0;
        }
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Có lỗi sảy ra khi tải dữ liệu' });
        console.error(err);
      },
    });
  }

  createNoteForHistory(type: string): string {
    const notesMap: Record<string, string> = {
      Sale1: "Hoa hồng giới thiệu",
      Sale2: "Thưởng lãnh đạo",
      CustomerShare: "Đồng chia",
      CustomerGratitude: "Tri ân",
    };
    return notesMap[type] || "Loại giao dịch không xác định";
  }

  refreshWalletData(type: string) {
    this.onWalletOptionsChange(type);
    this.loadWithDrawInfor();
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

      this._withdrawService.createWithdrawHistory(history).subscribe({
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

  withdrawCommission(type: string) {
    let model = {
      CollaboratorId: this.collaboratorId,
      SourceAmount: this.availableSource,
      WalletCommissionAmount: this.availableWallets,
      WithdrawAmount: this.withdrawCommissionAmount,
      WalletType: type
    }
    if (!this.withdrawCommissionAmount || !type) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: "Vui lòng nhập đủ thông tin",
      });
      return;
    }

    if (model.WalletCommissionAmount < 0 || !model.WalletCommissionAmount) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Số tiền rút không hợp lệ' });
      return;
    }

    if (model.WalletCommissionAmount - model.WithdrawAmount < 0) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Số tiền không đủ' });
      return;
    }

    this._withdrawService.withdrawCommissionRequest(model).subscribe({

      next: async (response: any) => {
        if (response?.message === 'Success') {
          const note = this.createNoteForHistory(type);
          await Promise.all([
            this.createHistory(this.collaboratorId, type, this.withdrawCommissionAmount, `Nạp tiền từ ví ${note}`),
            this.createHistory(this.collaboratorId, type, -this.withdrawCommissionAmount, `Rút hoa hồng từ ví ${note}`),
          ]);


          this.refreshWalletData(type)
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.data,
          });
          // Load lại
          setTimeout(() => {
            location.reload();
          }, 1000);
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.message });
        }
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Có lỗi sảy ra khi tải dữ liệu' });
        console.error(err);
      },
    });
  }

  exportExcelWalletHistory() {
    if (this.startDate && this.endDate) {
      const model = {
        CollaboratorId: this.collaboratorId,
        StartDate: this.startDate,
        EndDate: this.endDate
      };

      this._withdrawService.exportExcelWalletHistoryService(model).subscribe({
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

  async transferMoney() {

    const response = await this._withdrawService.getCollaboratorId(this.selectedUserName).toPromise();
    if (response?.message !== 'Success') {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Tải dữ liệu thất bại' });
      return;
    }
    let collaboratorIdReceive = response.data;
    let model = {
      CollaboratorId: this.collaboratorId,
      UserNameReceive: this.selectedUserName,
      AmountReceive: this.transferAmount
    }
    this._withdrawService.transferMoneyService(model).subscribe({
      next: async (response: any) => {
        if (response?.message === 'Success') {
          await Promise.all([
            this.createHistory(collaboratorIdReceive, 'Source', this.transferAmount, `Nhận tiền từ mã  ${this.userName}`),
            this.createHistory(this.collaboratorId, 'Source', -this.transferAmount, `Chuyển tiền tới mã ${this.selectedUserName}`),
          ]);
          this.refreshWalletData('Source');
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.data,
          });
          // Load lại
          setTimeout(() => {
            location.reload();
          }, 1000);
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.message });
        }
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Có lỗi sảy ra khi tải dữ liệu' });
        console.error(err);
      },
    })
  }

  getAllCollaborator(){
    const model = {
      startDate: this.startDate,
      endDate: this.endDate
    }
    this._withdrawService.getAllCollaboratorService(model).subscribe(
      (response: any) => {
        this.dataCollaborator = response.data;
        this.dataCollaborator = this.dataCollaborator.map((item: any, index: any) => ({
          ...item,
          position: index + 1
        }));
        this.dataCollaborator = this.dataCollaborator.filter((item: any) => item != null);
        this.dataCombobox = this.dataCollaborator.map((item: any) => ({
          userName: `${item.userName}`,
          label: `${item.userName} - ${item.name}`,
          value: item.id
        }));
        this.filteredToppingList = [...this.dataCombobox];
        this.parentId = this.dataCombobox[0].value;
        this.totalMember = this.dataCollaborator.length;
      },
      (error: any) => {
        this.dataCollaborator = [];
        console.error('Error fetching data:', error);
      });
  }

  filterOptions(): void {
    this.filteredToppingList = this.dataCombobox.filter((topping) =>
      topping.label.toLowerCase().includes(this.receivePerson.toLowerCase())
    );
  }

  onSelectionChange(event: any) {
    const selectedTopping = event.value;
    console.log(selectedTopping);
    if (selectedTopping) {
      this.selectedUserName = selectedTopping.userName; // Lưu `userName` từ topping
    }
  }
}
