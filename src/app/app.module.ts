import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginatePipe } from './paginate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PaginatePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterOutlet,
    UserListComponent,
    UserDetailComponent,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
