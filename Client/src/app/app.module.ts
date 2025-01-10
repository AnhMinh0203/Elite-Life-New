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
import { MessageService } from 'primeng/api';
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

import { SidebarProfileComponent } from './layouts/full/sidebar-profile/sidebar-profile.component';
import { ContractManagerComponent } from './elite-life/contract-manager/contract-manager.component';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { InforComponent } from './elite-life/infor-account/infor.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DepositWithdrawManagementComponent } from './elite-life/deposit-withdraw-management/deposit-withdraw-management.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileContainerComponent } from './elite-life/profile-container/profile-container.component';


// primeng
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { InputNumberModule } from 'primeng/inputnumber';
import { NumberFormatPipe } from './Core/pipes/number-format.pipe';
import { DatePipe } from '@angular/common';
import { OrderManagementComponent } from './elite-life/order-management/order-management.component';
import { ImageModule } from 'primeng/image';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ScrollingModule } from '@angular/cdk/scrolling';

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
    InforComponent,
    DepositWithdrawManagementComponent,
    ProfileContainerComponent,
    NumberFormatPipe,
    OrderManagementComponent
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
    MatDatepickerModule,
    DropdownModule,
    FloatLabelModule,
    CommonModule,
    RouterModule,
    CardModule,
    TabViewModule,
    InputNumberModule,
    ImageModule,
    InputIconModule,
    IconFieldModule,
    ScrollingModule

  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],
  providers: [DatePipe,
      {
        provide: RECAPTCHA_SETTINGS,
        useValue: {
          siteKey: environment.recaptcha.siteKey,
        } as RecaptchaSettings,
      },
      MessageService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: SendAccessTokenInterceptorService,
        multi: true,
      },
    ],
})
export class AppModule {}
