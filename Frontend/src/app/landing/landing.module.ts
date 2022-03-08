import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LandingRoutingModule } from "./landing-routing.module";
import { HomeComponent } from "./home/home.component";
import { LandingComponent } from "./landing.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [CommonModule, LandingRoutingModule, FormsModule],
  exports: [LandingComponent, NavbarComponent]
})
export class LandingModule {}
