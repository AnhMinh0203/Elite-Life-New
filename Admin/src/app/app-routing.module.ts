import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { HomeComponent } from './elite-life/home/home.component';
import { AuthGuardService } from 'src/untils/AuthGuard.service';
import { CustomerManagerComponent } from './elite-life/customer-manager/customer-manager.component';
import { SystemManagerComponent } from './elite-life/system-manager/system-manager.component';
import { TutorialComponent } from './elite-life/tutorial/tutorial.component';
import { ProfileComponent } from './pages/profile/profile.component'; // Import component Profile
import { ContractManagerComponent } from './elite-life/contract-manager/contract-manager.component';
import { MemberManagerComponent } from './elite-life/member-manager/member-manager.component';
import { CartManagerComponent } from './elite-life/cart-manager/cart-manager.component';
import { BinaryTreeComponent } from './elite-life/binary-tree/binary-tree.component';
import { WalletManagerComponent } from './elite-life/wallet-manager/wallet-manager.component';
import { BoothManagerComponent } from './elite-life/booth-manager/booth-manager.component';
import { WarehouseManagerComponent } from './elite-life/warehouse-manager/warehouse-manager.component';
import { OrderManagerComponent } from './elite-life/order-manager/order-manager.component';
import { IdManagerComponent } from './elite-life/id-manager/id-manager.component';
import { PermissionManagerComponent } from './elite-life/permission-manager/permission-manager.component';
import { RoleManagerComponent } from './elite-life/role-manager/role-manager.component';

const routes: Routes = [
  {
    canActivate: [AuthGuardService],
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.module').then((m) => m.ExtraModule),
      },
      {
        path: 'home',component:HomeComponent,
      },
      {
        path: 'customer-manager', component: CustomerManagerComponent
      },
      {
        path: 'system-manager', component: SystemManagerComponent
      },
      {
        path: 'about-us', component: TutorialComponent
      },
      {
        path: 'guide', component: TutorialComponent
      },
      {
        path: 'policy', component: TutorialComponent
      },
      {
        path: 'legal', component: TutorialComponent
      },
      {
        path: 'culture', component: TutorialComponent
      },
      { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
      {
        path: 'contract', component: ContractManagerComponent
      },
      {
        path: 'member-manager', component: MemberManagerComponent
      },
      {
        path: 'cart-manager', component: CartManagerComponent
      },
      {
        path: 'binary-tree', component: BinaryTreeComponent
      },
      {
        path: 'wallet-source-manager', component: WalletManagerComponent
      },
      {
        path: 'wallet-gratitude-manager', component: WalletManagerComponent
      },
      {
        path: 'wallet-sale-manager', component: WalletManagerComponent
      },
      {
        path: 'wallet-c-manager', component: WalletManagerComponent
      },
      {
        path: 'booth-manager', component: BoothManagerComponent
      },
      { path: 'warehouse-manager', component: WarehouseManagerComponent },
      { path: 'order-manager', component: OrderManagerComponent },
      { path: 'id-manager', component: IdManagerComponent },
      { path: 'permission-manager', component: PermissionManagerComponent },
      { path: 'role-manager', component: RoleManagerComponent },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
