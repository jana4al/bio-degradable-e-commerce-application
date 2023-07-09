import { Route, Routes } from "@angular/router";
import { HomePageComponent } from "./private/home-page/home-page.component";

export const AppRoutes:Routes=[
    {
        path:"",
        loadChildren:() => import('./private/home-page/home-page.module').then(module => module.HomePageModule)
    }
]