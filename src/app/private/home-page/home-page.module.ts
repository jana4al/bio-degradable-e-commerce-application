import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HomePageComponent } from "../home-page/home-page.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgbCarousel } from "@ng-bootstrap/ng-bootstrap";
import { HomePageRoutingModule } from "./home-page.routing.module";

@NgModule({
    declarations: [
        HomePageComponent,
        CarouselComponent 
    ],
    imports: [
        BrowserModule,
        NgbCarousel,
        HomePageRoutingModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class HomePageModule { }