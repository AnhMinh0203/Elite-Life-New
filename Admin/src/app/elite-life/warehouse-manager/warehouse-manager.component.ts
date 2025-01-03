import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { WarehouseService } from '../service/warehouse.service';

@Component({
  selector: 'app-warehouse-manager',
  templateUrl: './warehouse-manager.component.html',
  styleUrls: ['./warehouse-manager.component.css']
})
export class WarehouseManagerComponent implements OnInit {

  search: any;
  data: any;
  items: MenuItem[] | undefined;
  warehouse: any;
  visibleAdd: boolean = false;
  name: any;
  address: any;
  amount: any;
  mobile: any;
  manager: any;
  managerMobile: any;
  visibleEdit: boolean = false;
  nameEdit: any;
  addressEdit: any;
  amountEdit: any;
  mobileEdit: any;
  managerEdit: any;
  managerMobileEdit: any;


  constructor(private _warehouseService: WarehouseService, private messageService: MessageService) { 
    this.items = [
      {
          label: 'Sửa thông tin kho',
          icon: 'pi pi-pen-to-square',
          command: () => this.showEdit()
      },
      {
          label: 'Xóa kho',
          icon: 'pi pi-trash',
          command: () => this.delete()
      }
    ]
  }

  ngOnInit() {
    this.getAll();
  }

  changId(warehouse: any) {
    this.warehouse = warehouse;
  }

  getAll() {
    this._warehouseService.getAll().subscribe(res => {
      if(res.data) {
        this.data = res.data;
      }
    })
  }

  showAdd() {
    this.visibleAdd = true;
  }

  add() {
    if(!this.name) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Vui lòng nhập tên kho' });
      return;
    }

    if(!this.address) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Vui lòng nhập địa chỉ kho' });
      return;
    }

    if(!this.amount) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Vui lòng nhập số lượng' });
      return;
    }

    if(!this.mobile) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Vui lòng nhập số điện thoại' });
      return;
    }

    if(!this.manager) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Vui lòng nhập quản lý kho' });
      return;
    }

    if(!this.managerMobile) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Vui lòng nhập số điện thoại quản lý kho' });
      return;
    }

    const model = {
      name: this.name,
      location: this.address,
      capacity: this.amount,
      mobile: this.mobile,
      manager: this.manager,
      managerMobile: this.managerMobile
    }

    this._warehouseService.add(model).subscribe(res => {
      if(res.data) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
        this.getAll();
        this.visibleAdd = false;
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    })
  }

  delete() {
    this._warehouseService.delete(this.warehouse.id).subscribe(res => {
      if(res.data) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
        this.getAll();
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    })
  }

  showEdit() {
    this.visibleEdit = true;
    this.nameEdit = this.warehouse.name;
    this.addressEdit = this.warehouse.location;
    this.amountEdit = this.warehouse.capacity;
    this.mobileEdit = this.warehouse.mobile;
    this.managerEdit = this.warehouse.manager;
    this.managerMobileEdit = this.warehouse.managerMobile;
  }

  update() {
    if(!this.nameEdit) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Vui lòng nhập tên kho' });
      return;
    }

    if(!this.addressEdit) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Vui lòng nhập địa chỉ kho' });
      return;
    }

    if(!this.amountEdit) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Vui lòng nhập số lượng' });
      return;
    }

    if(!this.mobileEdit) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Vui lòng nhập số điện thoại' });
      return;
    }

    if(!this.managerEdit) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Vui lòng nhập quản lý kho' });
      return;
    }

    if(!this.managerMobileEdit) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Vui lòng nhập số điện thoại quản lý kho' });
      return;
    }

    const model = {
      id: this.warehouse.id,
      name: this.nameEdit,
      location: this.addressEdit,
      capacity: this.amountEdit,
      mobile: this.mobileEdit,
      manager: this.managerEdit,
      managerMobile: this.managerMobileEdit
    }

    this._warehouseService.update(model).subscribe(res => {
      if(res.data) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
        this.getAll();
        this.visibleEdit = false;
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    })
  }

  searchWarehouse() {
    if(this.search) {
      this._warehouseService.search(this.search).subscribe(res => {
        if(res.data) {
          this.data = res.data;
        }
      })
    } else {
      this.getAll();
    }
  }

}
