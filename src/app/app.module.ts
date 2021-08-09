import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoreBoxComponent } from './store-box/store-box.component';
import { StoreListComponent } from './store-list/store-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpRequestInterceptor } from './http-request-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    StoreBoxComponent,
    StoreListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
