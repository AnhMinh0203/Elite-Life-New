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
    permission: 'collaborator_view',
  },
  {
    displayName: 'Quản lý đơn hàng',
    iconName: 'shopping-cart',
    route: '/cart-manager',
  },
  {
    displayName: 'Quản lý gian hàng',
    iconName: 'building',
    route: '/booth-manager',
  },
  {
    displayName: 'Quản lý kho hàng',
    iconName: 'building',
    route: '/warehouse-manager',
  },
  {
    displayName: 'Quản lý yêu cầu rút tiền',
    iconName: 'file-text',
    route: '/withdrawal-request',
  },
  {
    navCap: 'Quản lý ví',
  },
  {
    displayName: 'Quản lý ví tài khoản',
    iconName: 'file-text',
    route: '/wallet-source-manager',
  },
  {
    displayName: 'Quản lý ví tri ân khách hàng',
    iconName: 'file-text',
    route: '/wallet-gratitude-manager',
  },
  {
    displayName: 'Quản lý ví hoa hồng',
    iconName: 'file-text',
    route: '/wallet-sale-manager',
  },
  {
    displayName: 'Quản lý ví C',
    iconName: 'file-text',
    route: '/wallet-c-manager',
  },//
  {
    displayName: 'Quản lý hợp đồng đại lý',
    iconName: 'file-text',
    route: '/contract',
  },
  {
    displayName: 'Sơ đồ cây nhị phân',
    iconName: 'file-text',
    route: '/binary-tree',
  },
  {
    navCap: 'Quản lý ID',
  },
  {
    displayName: 'Quản lý đơn hàng ID',
    iconName: 'file-text',
    route: '/order-manager',
  },
  {
    displayName: 'Quản trị hệ thống',
    iconName: 'file-text',
    route: '/culture',
  },
  {
    displayName: 'Hotline: 0967364999',
    iconName: 'file-text',
    href: 'tel:0967364999',
  },
  {
    displayName: 'Zalo hỗ trợ chung',
    iconName: 'file-text',
    href: 'https://zalo.me/g/hcwaid814',
  },
  {
    displayName: 'Đào tạo hướng dẫn',
    iconName: 'file-text',
    route: '/training',
  },
];
