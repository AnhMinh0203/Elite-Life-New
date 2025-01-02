import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
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

  constructor(private _warehouseService: WarehouseService) { 
    this.items = [
      {
          label: 'Chi tiết hóa đơn',
          icon: 'pi pi-receipt',
      },
      {
          label: 'Chi tiết hoa hồng',
          icon: 'pi pi-dollar',
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

}
