import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PermissionService } from '../service/permission.service';

@Component({
  selector: 'app-role-manager',
  templateUrl: './role-manager.component.html',
  styleUrls: ['./role-manager.component.css']
})
export class RoleManagerComponent implements OnInit {

  data: any;
  dataPermission: any;
  visible: boolean = false;
  name: any;
  visibleEdit: boolean = false;
  nameEdit: any;
  itemEdit: any;
  //
  sourceProducts!: any[];
  targetProducts!: any[];
  sourceProductsEdit!: any[];
  targetProductsEdit!: any[];

  constructor(
    private _permissionService: PermissionService, 
    private messageService: MessageService,
    private cdr: ChangeDetectorRef) { 
  }

  ngOnInit() {
    this.getAllRoleAndPermission();
    this.getAllPermission();
  }

  showAdd() {
    this.visible = true;
  }

  getAllPermission() {
    this._permissionService.getAllPermission().subscribe(res => {
      if(res.data) {
        this.dataPermission = res.data;
        this.sourceProducts = this.dataPermission;
        this.cdr.markForCheck();
        this.targetProducts = [];
      }
    });
  }

  getAllRoleAndPermission() {
    this._permissionService.getRolePermission().subscribe(res => {
      if(res.data) {
        this.data = res.data;
      }
    });
  }

  addPermission() {
    if(!this.name) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Vui lòng nhập tên'});
      return;
    }
    const model = {
      roleName: this.name,
      permissionIds : this.targetProducts.map((item: any) => item.id)
    }
    this._permissionService.addRolePermission(model).subscribe(res => {
      if(res.data) {
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Thêm thành công'});
        this.getAllRoleAndPermission();
        this.visible = false;
        this.name = '';
      }
    });
  }

  showEdit(item: any) {
    this.itemEdit = item;
    this._permissionService.getPermissionByRole(item.roleId).subscribe((res: any) => {
      if(res.data) {
        this.nameEdit = item.roleName;
        this.sourceProductsEdit = res.data.filter((item: any) => !item.is_assigned);
        this.targetProductsEdit = res.data.filter((item: any) => item.is_assigned);
        this.cdr.markForCheck();
      }
    });
    this.visibleEdit = true;
  }

  updateRolePermission() {
    if(!this.nameEdit) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Vui lòng nhập tên'});
      return;
    }
    const model = {
      roleId: this.itemEdit.roleId,
      roleName: this.itemEdit.roleName,
      permissionIds : this.targetProductsEdit.map((item: any) => item.permission_id)
    }
    this._permissionService.updateRolePermission(model).subscribe(res => {
      if(res.data) {
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Cập nhật thành công'});
        this.getAllRoleAndPermission();
        this.visibleEdit = false;
      }
    });
  }

  deletePermission(item: any) {
    this._permissionService.deleteRolePermission(item.roleId).subscribe(res => {
      if(res.data) {
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Xóa thành công'});
        this.getAllRoleAndPermission();
      }
    });
  }
}
