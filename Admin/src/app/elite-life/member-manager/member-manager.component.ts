import { Component, OnInit, ViewChild } from '@angular/core';
import { CollaboratorService } from '../service/collaborator.service';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexStroke, ApexTooltip, ApexDataLabels } from 'ng-apexcharts';
import { MatPaginator } from '@angular/material/paginator';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';
import { WalletDetailService } from '../service/wallet-detail.service';
import { WalletsService } from '../service/wallets.service';
import { FormControl } from '@angular/forms';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ProfileService } from '../service/profile.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-member-manager',
  templateUrl: './member-manager.component.html',
  styleUrls: ['./member-manager.component.css']
})
export class MemberManagerComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(CdkVirtualScrollViewport, { static: true })
  cdkVirtualScrollViewPort!: CdkVirtualScrollViewport;
  displayedColumns: string[] = ['action','name', 'userName', 'createdAt', 'rank'];
  rangeDates: Date[] | undefined;
  startDate: any;
  endDate: any;
  data: any;
  info: any;
  totalMember: number = 0;
  visibleTree: boolean = false;
  visible1: boolean = false;
  dataCombobox: { label: string; value: number }[] = [];
  parentId: any;
  items: MenuItem[] | undefined;
  idSelected: any;
  search: any;
  tree!: TreeNode[];
  countChildren: { [key: string]: number } = {};
  treeData: any;
  customer: any;
  isLoading: boolean = false;
  first = 0;
  visibleCommission: boolean = false;
  listCommission: any;
  money: any;
  note: any;
  visibleMoney: boolean = false;
  singleSelectControl  = new FormControl();
  filteredToppingList: any[] = [];
  searchTerm: string = '';
  permission: any;
  isPermissionExport: boolean = false;
  editMember: boolean = false;
  rechargeMember: boolean = false;
  dataUp: any;
  rangeDatesUp: Date[] | undefined;
  startDateUp: any;
  endDateUp: any;
  dataDown: any;
  rangeDatesDown: Date[] | undefined;
  startDateDown: any;
  endDateDown: any;

  // Thay đổi thông tin thành viên
  isChangePassword:any;

  newPass: any;
  confirmNewPass: any;
  name: any;
  userName: any;
  identity:any;
  bankNumber:any;
  bankOptions:any;
  bank:any;
  identityDate:any;
  bankBranchName:any;
  identityPlace:any;
  bankOwner:any;
  phone:any;
  email:any;
  isUpdate:boolean = false;
  selectMember:any;

  constructor(
    private _profileService: ProfileService,
    private _collaboratorService: CollaboratorService,
    private messageService: MessageService,
    private _walletDetailService: WalletDetailService,
    private _walletsService: WalletsService) {

  }

  ngOnInit() {
    this.permission = JSON.parse(localStorage.getItem('permission') || '{}');
    this.isPermissionExport = this.permission.includes('member-manager-export-member');
    this.editMember = this.permission.includes('member-manager-edit-member');
    this.rechargeMember = this.permission.includes('member-manager-recharge-member');
    this.items = [
      {
          label: 'Sơ đồ cây hệ thống',
          icon: 'pi pi-sitemap',
          command: () => this.showDialogTree()
      },
      {
          label: 'Chi tiết nhận hoa hồng',
          icon: 'pi pi-wallet',
          command: () => this.showDialogComission()

      },
      ...(this.rechargeMember
        ? [{
            label: 'Nạp tiền',
            icon: 'pi pi-dollar',
            command: () => this.showDialogMoney()
          }]
        : []
      )
    ]
    this.info = JSON.parse(localStorage.getItem('info') || '{}');
    this.getAllCollaboratorByParentId();
    this.getAllCollaboratorRankUp();
    this.getAllCollaboratorRankDown();
  }

  changId(customer: any) {
    this.customer = customer;
    this.idSelected = customer.id;
  }

  onSelectionChange(event: any): void {
    this.parentId = event.value.value;
    console.log(this.parentId);
  }

  filterOptions(): void {
    this.filteredToppingList = this.dataCombobox.filter((topping) =>
      topping.label.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
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

  onDateChangeUp(event: any) {
    if (this.rangeDatesUp && this.rangeDatesUp.length === 2) {
      const [startDate, endDate] = this.rangeDatesUp;
      this.startDateUp = startDate;
      this.endDateUp = endDate
      if(this.startDateUp && this.endDateUp) {
        this.getAllCollaboratorRankUp();
      }
    }
  }

  onDateChangeDown(event: any) {
    if (this.rangeDatesDown && this.rangeDatesDown.length === 2) {
      const [startDate, endDate] = this.rangeDatesDown;
      this.startDateDown = startDate;
      this.endDateDown = endDate
      if(this.startDateDown && this.endDateDown) {
        this.getAllCollaboratorRankDown();
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
      this.totalMember = this.data.length;
    } else {
      this.getAllCollaboratorByParentId();
      this.data = this.data.filter((item: any) => item != null);
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
        this.filteredToppingList = [...this.dataCombobox];
        this.parentId = this.dataCombobox[0].value;
        this.totalMember = this.data.length;
      },
      (error: any) => {
        this.data = [];
        console.error('Error fetching data:', error);
      });
  }

  getAllCollaboratorRankUp(){
    const model = {
      startDate: this.startDateUp,
      endDate: this.endDateUp
    }
    this._collaboratorService.getAllCollaboratorRankUp(model).subscribe(
      (response: any) => {
        this.dataUp = response.data;
        this.dataUp = this.dataUp.map((item: any, index: any) => ({
          ...item,
          position: index + 1
        }));
      },
      (error: any) => {
        this.data = [];
        console.error('Error fetching data:', error);
      });
  }

  getAllCollaboratorRankDown(){
    const model = {
      startDate: this.startDateDown,
      endDate: this.endDateDown
    }
    this._collaboratorService.getAllCollaboratorRankDown(model).subscribe(
      (response: any) => {
        this.dataDown = response.data;
        this.dataDown = this.dataDown.map((item: any, index: any) => ({
          ...item,
          position: index + 1
        }));
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

  exportExcelCollaboratorRank(type: any){
    let datestart = null;
    let dateend = null;
    if(type == 1) {
      datestart = this.startDateUp;
      dateend = this.endDateUp;
    }else {
      datestart = this.startDateDown;
      dateend = this.endDateDown;
    }
    const model = {
      startDate: datestart,
      endDate: dateend,
      type: type
    }

    this._collaboratorService.exportExcelAllCollaboratorRank(model).subscribe(
      (response: any) => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        if(type == 1) {
          link.download = 'Danh sách thành viên lên vip.xlsx';
        } else {
          link.download = 'Danh sách thành viên hạ vip.xlsx';
        }
        link.click();
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      });
  }

  showDialogDelete(customer: any) {
    this.visible1 = true;
    this.idSelected = customer.id;
  }

  deleteCollaborator(){
    if(!this.parentId) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Vui lòng chọn thành viên'});
      return;
    }

    this._collaboratorService.deleteCollaborator(this.idSelected, this.parentId).subscribe(
      (response: any) => {
        if(response.data) {
          this.getAllCollaboratorByParentId();
          this.visible1 = false;
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Xóa thành viên thành công, vui lòng đợi xác nhận từ Chủ tịch và Tổng giám đốc'});
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      });
  }

  showDialogTree() {
    this.tree = [];
    this.visibleTree = true;
    this.getCollaboratorSystemTree();
  }

  getCollaboratorSystemTree(){
    this.isLoading = true;
    this._collaboratorService.getCollaboratorSystemTree(this.idSelected).subscribe(
      (response: any) => {
        this.treeData = response.data;
        this.treeData.push({id: this.customer.id, name: this.customer.userName, rank: this.customer.rank, levelLabel: "null", parentId: null});
        this.totalMember = this.treeData.length - 1;
        this.tree = this.buildTree(this.treeData);
        this.expandAll();
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
        this.isLoading = false;
      }
    );
  }

  buildTree(data: any[], parentId: any = null, level: number = 0): any[] {
    const children = data.filter(item => item.parentId === parentId);

    if (children.length === 0) {
      return [];
    }

    const childNodes = children.map(item => {
      return {
        key: item.id,
        data: `${item.name} (${item.rank})`,
        label: `${item.name} (${item.rank})`,
        children: this.buildTree(data, item.id, level + 1)
      };
    });

    if (level === 0) {
      return childNodes;
    }

    const nodeKey = `DL${level-1}`;
    this.countChildren[nodeKey] = (this.countChildren[nodeKey] || 0) + childNodes.length;

    return [
      {
        key: `DL${level-1}`,
        data: `DL${level-1} (${childNodes.length})`,
        label: `DL${level-1} (${childNodes.length})`,
        children: childNodes
      }
    ];
  }

  expandAll() {
    this.tree.forEach((node) => {
        this.expandRecursive(node, true);
    });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
        node.children.forEach((childNode) => {
            this.expandRecursive(childNode, isExpand);
        });
    }
  }

  showDialogComission() {
    this.visibleCommission = true;
    this.isLoading = true;
    this._walletDetailService.getCommissionByCollaboratorId(this.customer.id, 1).subscribe(
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

  showDialogMoney() {
    this.visibleMoney = true;
    this.loadCommission();
  }

  loadCommission() {
    this.isLoading = true;
    this._walletDetailService.getCommissionByCollaboratorId(this.customer.id, 2).subscribe(
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

  saveMoney() {
    if(this.money <= 0) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Vui lòng nhập số tiền lớn hơn 0'});
      return;
    }
    if(this.note == null) {
      this.note = "Nạp tiền";
    }
    const model = {
      collaboratorId: this.customer.id,
      amount: this.money,
      description: this.note
    }
    this._walletsService.recharge(model).subscribe(
      (response: any) => {
        if(response.data) {
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Nạp tiền thành công'});
          this.loadCommission();
        }
      },
      (error: any) => {
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Nạp tiền thất bại'});
        console.error('Error fetching data:', error);
      }
    );
  }

  // Cập nhật thông tin thành viên
  loadProfileData(customer:any){
    this._profileService.getProfile(customer.userName).subscribe({

      next: (response: any) => {
        if (response?.message === 'Success') {
          const profile = response.data;
          this.name = profile.name;
          this.userName = profile.userName;
          this.identity = profile.identity;
          this.bank = profile.bank;
          this.bankNumber = profile.bankNumber;
          this.bankOwner = profile.bankOwner;
          this.identityPlace = profile.identityPlace;
          this.bankBranchName = profile.bankBranchName;
          this.identityDate = profile.identityDate
            ? new Date(profile.identityDate)
            : undefined;
          this.phone = profile.mobile;
          this.email = profile.email;
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load profile data.' });
        }
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred while loading profile data.' });
        console.error(err);
      },
    });
  }

  showUpdateForm(customer:any){
    this.loadProfileData(customer);
    this.loadBanks();
    this.isUpdate = true;
  }



  showPassordForm(){
    this.isChangePassword = true;
  }
  changePassword() {
    const newModel = {
      UserName: this.userName,
      Password: this.newPass
    };

    this._profileService.changePassword(newModel).subscribe({
      next: (response: any) => {
        if (response?.message === 'Success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.data,
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: response.data,
          });
        }
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Có lỗi xảy ra khi thay đổi mật khẩu',
        });
      }
    });
  }
  closePassordForm(){
    this.isChangePassword = false;
  }
  updateProfile(){
    const model = {
      UserName: this.userName,
      Name: this.name,
      Identity: this.identity,
      BankNumber: this.bankNumber,
      Bank: this.bank,
      IdentityDate: this.identityDate ? new Date(this.identityDate).toLocaleDateString('en-CA') : null,
      BankOwner: this.bankOwner,
      IdentityPlace: this.identityPlace,
      BankBranchName: this.bankBranchName
    }
    this._profileService.updateProfile(model).subscribe({
      next: (response: any) => {
        if (response?.message === 'Success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.data,
          });

          setTimeout(() => { location.reload() }, 1000);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: response.data,
          });
        }
      },
      error: (error: any) => {
        // Error handling
        console.error('An error occurred while updating contact information:', error);
      }
    });
  }
  updatePhoneNumber(){
    const model = {
      UserName: this.userName,
      Email: '',
      PhoneNumber: this.phone
    }
    this._profileService.updateContactInfor(model).subscribe({
      next: (response: any) => {
        if (response?.message === 'Success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.data,
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: response.data,
          });
        }
      },
      error: (error: any) => {
        // Error handling
        console.error('An error occurred while updating contact information:', error);
      }
    });
  }

  loadBanks() {
    this._profileService.getBanks().subscribe({
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

  updateEmail(){
    const model = {
      UserName: this.userName,
      Email: this.email,
      PhoneNumber: ''
    }
    this._profileService.updateContactInfor(model).subscribe({
      next: (response: any) => {
        if (response?.message === 'Success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.data,
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: response.data,
          });
        }
      },
      error: (error: any) => {
        // Error handling
        console.error('An error occurred while updating contact information:', error);
      }
    });
  }
}
