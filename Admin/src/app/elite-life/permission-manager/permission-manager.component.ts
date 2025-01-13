import { Component, OnInit } from '@angular/core';
import { PermissionService } from '../service/permission.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-permission-manager',
  templateUrl: './permission-manager.component.html',
  styleUrls: ['./permission-manager.component.css']
})
export class PermissionManagerComponent implements OnInit {
  data: any;
  visible: boolean = false;
  name: any;
  code: any;
  actionList: { label: string; value: string }[] = [];
  action: any;
  functionList: { label: string; value: string }[] = [];
  function: any;
  visibleEdit: boolean = false;
  nameEdit: any;
  codeEdit: any;
  actionEdit: any;
  functionEdit: any;
  itemEdit: any;

  constructor(private _permissionService: PermissionService, private messageService: MessageService) { 
    this.actionList = [
      {label: 'Xem', value: 'view'},
      {label: 'Thêm', value: 'add'},
      {label: 'Sửa', value: 'edit'},
      {label: 'Xóa', value: 'delete'},
      {label: 'Xuất excel', value: 'export'},
      {label: 'Top thành viên', value: 'top-member'},
      {label: 'Xuất excel top thành viên', value: 'export-top-member'},
      {label: 'Xuất excel danh sách thành viên', value: 'export-member'},
      {label: 'Chỉnh sửa danh sách thành viên', value: 'edit-member'},
      {label: 'Nạp tiền danh sách thành viên', value: 'recharge-member'},
      {label: 'Xuất excel quản lý đơn hàng', value: 'export-cart-manager'},
      {label: 'Quản lý đơn hàng - Chọn ngày gửi đơn', value: 'select-delivery-date'},
    ];
    this.functionList = [
      {label: 'Trang chủ', value: 'home'},
      {label: 'Danh sách thành viên', value: 'member-manager'},
      {label: 'Quản lý đơn hàng', value: 'cart-manager'},
      {label: 'Quản lý gian hàng', value: 'booth-manager'},
      {label: 'Quản lý yêu cầu rút tiền', value: 'request-withdrawal-manager'},
      {label: 'Xóa cộng tác viên', value: 'delete-collaborator-admin'},
      {label: 'Quản lý kho hàng', value: 'warehouse-manager'},
      {label: 'Quản lý ví tài khoản', value: 'wallet-source-manager'},
      {label: 'Quản lý ví tri ân khách hàng', value: 'wallet-gratitude-manager'},
      {label: 'Quản lý ví hoa hồng', value: 'wallet-sale-manager'},
      {label: 'Quản lý ví C', value: 'wallet-c-manager'},
      {label: 'Quản lý hợp đồng đại lý', value: 'contract'},
      {label: 'Sơ đồ cây nhị phân', value: 'binary-tree'},
      {label: 'Quản lý tổng ID', value: 'id-manager'},
      {label: 'Quản lý đơn hàng ID', value: 'order-manager'},
      {label: 'Danh mục quyền', value: 'permission-manager'},
      {label: 'Quản lý nhóm quyền', value: 'role-manager'},
    ];
  }

  ngOnInit() {
    this.getAllPermission();
  }

  showAdd() {
    this.visible = true;
  }

  getAllPermission() {
    this._permissionService.getAllPermission().subscribe(res => {
      if(res.data) {
        this.data = res.data;
      }
    });
  }

  addPermission() {
    if(!this.name) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Tên không được để trống'});
      return;
    }

    if(!this.code) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Mã không được để trống'});
      return;
    }

    const model = {
      name: this.name,
      code: this.code,
      action: this.action,
      controller: this.function,
      applicationType: 'User'
    };
    this._permissionService.addPermission(model).subscribe(res => {
      if(res.data) {
        this.getAllPermission();
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Thêm thành công'});
        this.visible = false;
      }
    });
  }

  showEdit(item: any) {
    this.itemEdit = item;
    this.nameEdit = item.name;
    this.codeEdit = item.code;
    this.actionEdit = item.action;
    this.functionEdit = item.controller;
    this.visibleEdit = true;
  }

  updatePermission() {
    if(!this.nameEdit) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Tên không được để trống'});
      return;
    }

    if(!this.codeEdit) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Mã không được để trống'});
      return;
    }

    const model = {
      id: this.itemEdit.id,
      name: this.nameEdit,
      code: this.codeEdit,
      action: this.actionEdit,
      controller: this.functionEdit,
      applicationType: 'User'
    };
    this._permissionService.updatePermission(model).subscribe(res => {
      if(res.data) {
        this.getAllPermission();
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Sửa thành công'});
        this.visibleEdit = false;
      }
    });
  }

  deletePermission(item: any) {
    this._permissionService.deletePermission(item.id).subscribe(res => {
      if(res.data) {
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Xóa thành công'});
        this.getAllPermission();
      }
    });
  }

  onChangeAction(event: any) {
    this.code = this.function + '-' + this.action;
  }

  onChangeFunction(event: any) {
    this.code = this.function + '-' + this.action;
  }

  onChangeActionEdit(event: any) {
    this.codeEdit = this.functionEdit + '-' + this.actionEdit;
  }

  onChangeFunctionEdit(event: any) {
    this.codeEdit = this.functionEdit + '-' + this.actionEdit;
  }

}
