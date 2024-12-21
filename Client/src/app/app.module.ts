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

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { SidebarProfileComponent } from './layouts/full/sidebar-profile/sidebar-profile.component';
import { ContractManagerComponent } from './elite-life/contract-manager/contract-manager.component';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
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
  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],
  providers: [
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
