import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutes } from "./app.routes";

const routes: Routes = [
    ...AppRoutes,
    {
        path :'**',
        redirectTo:'',
        pathMatch:'full'
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}