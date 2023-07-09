import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    declarations:[
        AppComponent
    ],
    imports:[
        BrowserModule,
        CommonModule,
        AppRoutingModule
    ],
    bootstrap:[AppComponent]
})

export class AppModule{}