import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GraphComponent } from './graph/graph.component';
import { GraphRoutePageComponent } from './graph-route-page/graph-route-page.component';


const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'graph', component: GraphRoutePageComponent},
{path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
