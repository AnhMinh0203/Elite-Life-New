import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  getPermissions(): string[] {
    // Giả lập danh sách quyền, lấy từ API hoặc lưu trữ cục bộ
    return ['Collaborator', 'Order', 'Warehouse']; // Danh sách quyền của người dùng
  }

}
