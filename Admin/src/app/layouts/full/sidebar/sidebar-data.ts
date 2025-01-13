import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    displayName: 'Trang chủ',
    iconName: 'home',
    route: '/home',
  },
  {
    displayName: 'Danh sách thành viên',
    iconName: 'users-group',
    route: '/member-manager',
    permission: 'member-manager-view',
  },
  {
    displayName: 'Quản lý đơn hàng',
    iconName: 'shopping-cart',
    route: '/cart-manager',
    permission: 'cart-manager-view',
  },
  {
    displayName: 'Quản lý gian hàng',
    iconName: 'building',
    route: '/booth-manager',
    permission: 'booth-manager-view',
  },
  {
    displayName: 'Quản lý kho hàng',
    iconName: 'building',
    route: '/warehouse-manager',
    permission: 'warehouse-manager-view',
  },
  {
    displayName: 'Quản lý yêu cầu rút tiền',
    iconName: 'file-text',
    route: '/withdrawal-request',
    permission: 'request-withdrawal-manager-view',
  },
  {
    displayName: 'Xóa cộng tác viên',
    iconName: 'file-text',
    route: '/delete-collaborator',
    permission: 'delete-collaborator-admin-view',
  },
  {
    navCap: 'Quản lý ví',
  },
  {
    displayName: 'Quản lý ví tài khoản',
    iconName: 'file-text',
    route: '/wallet-source-manager',
    permission: 'wallet-source-manager-view',
  },
  {
    displayName: 'Quản lý ví tri ân khách hàng',
    iconName: 'file-text',
    route: '/wallet-gratitude-manager',
    permission: 'wallet-gratitude-manager-view',
  },
  {
    displayName: 'Quản lý ví hoa hồng',
    iconName: 'file-text',
    route: '/wallet-sale-manager',
    permission: 'wallet-sale-manager-view',
  },
  {
    displayName: 'Quản lý ví C',
    iconName: 'file-text',
    route: '/wallet-c-manager',
    permission: 'wallet-c-manager-view',
  },
  {
    displayName: 'Quản lý hợp đồng đại lý',
    iconName: 'file-text',
    route: '/contract',
    permission: 'contract-view',
  },
  {
    displayName: 'Sơ đồ cây nhị phân',
    iconName: 'file-text',
    route: '/binary-tree',
    permission: 'binary-tree-view',
  },
  {
    navCap: 'Quản lý ID',
  },
  {
    displayName: 'Quản lý tổng ID',
    iconName: 'file-text',
    route: '/id-manager',
    permission: 'id-manager-view',
  },
  {
    displayName: 'Quản lý đơn hàng ID',
    iconName: 'file-text',
    route: '/order-manager',
    permission: 'order-manager-view',
  },
  {
    navCap: 'Quản trị hệ thống',
  },
  {
    displayName: 'Quản lý tài khoản',
    iconName: 'file-text',
    route: 'account-manager',
  },
  {
    displayName: 'Danh mục quyền',
    iconName: 'file-text',
    route: 'permission-manager',
    permission: 'permission-manager-view',
  },
  {
    displayName: 'Quản lý nhóm quyền',
    iconName: 'file-text',
    route: 'role-manager',
    permission: 'role-manager-view',
  },
  {
    displayName: 'Đào tạo hướng dẫn',
    iconName: 'file-text',
    route: '/training',
  },
];
