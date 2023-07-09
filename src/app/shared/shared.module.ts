import { NgModule } from "@angular/core";
import { FooterComponent } from "./components/footer/footer.component";
import { LogoUserSectionComponent } from "./components/logo-user-section/logo-user-section.component";
import { MenuComponent } from "./components/menu/menu.component";
import { ProductsComponent } from "./components/products/products.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations :[
    FooterComponent,
    LogoUserSectionComponent,
    MenuComponent,
    ProductsComponent
  ],
  imports:[
    BrowserModule
  ],
  exports:[
    FooterComponent,
    LogoUserSectionComponent,
    MenuComponent,
    ProductsComponent
  ]
})

export class SharedModule{}