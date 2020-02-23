import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GraphRoutePageComponent } from './graph-route-page/graph-route-page.component';
import { MyKarusellComponent } from './my-karusell/my-karusell.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'graph', component: GraphRoutePageComponent},
{path: 'karusell', component: MyKarusellComponent},
{path: 'contact', component: ContactComponent},
{path: 'portfolio', component: PortfolioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
