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
  },
  {
    displayName: 'Quản lý đơn hàng',
    iconName: 'shopping-cart',
    route: '/cart-manager',
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
    displayName: 'Cơ sở pháp lý',
    iconName: 'file-text',
    route: '/legal',
  },
  // {
  //   navCap: 'Extra',
  // },
  {
    displayName: 'Văn hóa Elite',
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
