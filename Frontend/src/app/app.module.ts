import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingModule } from "./landing/landing.module";
import { PagesModule } from "./pages/pages.module";
import { ProdutosService } from "./service/produtos.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LandingModule,
    PagesModule,
    LandingModule
  ],
  providers: [ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
