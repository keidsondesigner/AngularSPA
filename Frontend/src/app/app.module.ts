import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpErrorInterceptor } from 'src/app/interceptors/http-error.interceptor';
import { LoadingInterceptor } from 'src/app/interceptors/loading.interceptor';

import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingModule } from './landing/landing.module';
import { PagesModule } from './pages/pages.module';
import { ProdutosService } from './service/produtos.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LandingModule,
    PagesModule,
    LandingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    ProdutosService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
