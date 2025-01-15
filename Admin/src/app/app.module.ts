import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { AppSideLoginComponent } from './pages/authentication/login/login.component';
import { environment } from '../environments/environment';
import { HomeComponent } from './elite-life/home/home.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SendAccessTokenInterceptorService } from 'src/untils/SendAccessTokenInterceptor.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './layouts/full/footer/footer.component';
import { CustomerManagerComponent } from './elite-life/customer-manager/customer-manager.component';
import { CalendarModule } from 'primeng/calendar';
import { SystemManagerComponent } from './elite-life/system-manager/system-manager.component';
import { TableModule } from 'primeng/table';
import { TreeModule } from 'primeng/tree';
import { TutorialComponent } from './elite-life/tutorial/tutorial.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { SidebarProfileComponent } from './layouts/full/sidebar-profile/sidebar-profile.component';
import { ContractManagerComponent } from './elite-life/contract-manager/contract-manager.component';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { MemberManagerComponent } from './elite-life/member-manager/member-manager.component';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CartManagerComponent } from './elite-life/cart-manager/cart-manager.component';
import { BinaryTreeComponent } from './elite-life/binary-tree/binary-tree.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { WalletManagerComponent } from './elite-life/wallet-manager/wallet-manager.component';
import { BoothManagerComponent } from './elite-life/booth-manager/booth-manager.component';
import { FileUploadModule } from 'primeng/fileupload';
import { WarehouseManagerComponent } from './elite-life/warehouse-manager/warehouse-manager.component';
import { OrderManagerComponent } from './elite-life/order-manager/order-manager.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IdManagerComponent } from './elite-life/id-manager/id-manager.component';
import { PermissionManagerComponent } from './elite-life/permission-manager/permission-manager.component';
import { RoleManagerComponent } from './elite-life/role-manager/role-manager.component';
import { PickListModule } from 'primeng/picklist';
import { ChipModule } from 'primeng/chip';
import { WithdrawalRequestComponent } from './elite-life/withdrawal-request/withdrawal-request.component';
import { DeleteCollaboratorComponent } from './elite-life/delete-collaborator/delete-collaborator.component';

import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { SplitterModule } from 'primeng/splitter';
import { DepositWithdrawManagementComponent } from './elite-life/deposit-withdraw-management/deposit-withdraw-management.component';
import { InforComponent } from './elite-life/infor-account/infor.component';
import { OrderManagementComponent } from './elite-life/order-management/order-management.component';
import { ProfileContainerComponent } from './elite-life/profile-container/profile-container.component';
import { NumberFormatPipe } from './Core/pipes/number-format.pipe';
import { ImageModule } from 'primeng/image';
import { DatePipe } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';

import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { AccountManagerComponent } from './elite-life/account-manager/account-manager.component';
@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    BrandingComponent,
    AppNavItemComponent,
    //
    HomeComponent,
    CustomerManagerComponent,
    SystemManagerComponent,
    TutorialComponent,
    SidebarProfileComponent,
    ContractManagerComponent,
    MemberManagerComponent,
    CartManagerComponent,
    BinaryTreeComponent,
    WalletManagerComponent,
    BoothManagerComponent,
    WarehouseManagerComponent,
    OrderManagerComponent,
    IdManagerComponent,
    PermissionManagerComponent,
    RoleManagerComponent,
    WithdrawalRequestComponent,
    DeleteCollaboratorComponent,
    InforComponent,
    DepositWithdrawManagementComponent,
    ProfileContainerComponent,
    OrderManagementComponent,
    NumberFormatPipe,
    AccountManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    RecaptchaFormsModule,
    RecaptchaModule,
    ToastModule,
    NgApexchartsModule,
    ButtonModule,
    CalendarModule,
    TableModule,
    TreeModule,
    PdfViewerModule,
    DialogModule,
    AvatarModule,
    InputTextModule,
    DropdownModule,
    MultiSelectModule,
    TieredMenuModule,
    OrganizationChartModule,
    ProgressSpinnerModule,
    FileUploadModule,
    ScrollingModule,
    PickListModule,
    ChipModule,
    FloatLabelModule,
    CardModule,
    TabViewModule,
    SplitterModule,
    ImageModule,
    InputNumberModule,
    ConfirmPopupModule
  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],
  providers: [ DatePipe,
      {
        provide: RECAPTCHA_SETTINGS,
        useValue: {
          siteKey: environment.recaptcha.siteKey,
        } as RecaptchaSettings,
      },
      MessageService,
      ConfirmationService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: SendAccessTokenInterceptorService,
        multi: true,
      },
    ],
})
export class AppModule {}
