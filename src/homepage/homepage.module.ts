import { NgModule,NO_ERRORS_SCHEMA } from "@angular/core";
import { HomepageComponent } from "./homepage.component";
import { MenuComponent } from './menu/menu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoUserSectionComponent } from './logo-user-section/logo-user-section.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './products/products.component';
@NgModule({
        declarations :[
            HomepageComponent,
            MenuComponent,
            CarouselComponent,
            LogoUserSectionComponent,
            ProductsComponent
        ],
        imports:[BrowserModule, NgbModule,NgbCarouselModule],
        providers:[],
        schemas:[NO_ERRORS_SCHEMA],
        bootstrap:[HomepageComponent]
})

export class HomePageModule {}