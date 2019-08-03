import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { TablesComponent } from './pages/tables/tables.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { IconsComponent } from './pages/icons/icons.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { AccordionsComponent } from './pages/accordions/accordions.component';
import { BadgesComponent } from './pages/badges/badges.component';
import { ProgressbarComponent } from './pages/progressbar/progressbar.component';
import { BreadcrumbsComponent } from './pages/breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pages/pagination/pagination.component';
import { DropdownComponent } from './pages/dropdown/dropdown.component';
import { TooltipsComponent } from './pages/tooltips/tooltips.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PmComponent } from './pm/pm.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    FormsComponent,
    ButtonsComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    AlertsComponent,
    AccordionsComponent,
    BadgesComponent,
    ProgressbarComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    DropdownComponent,
    TooltipsComponent,
    CarouselComponent,
    TabsComponent,
    LoginpageComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    PmComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
