import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        SharedModule
    ]
})

export class AppModule{}