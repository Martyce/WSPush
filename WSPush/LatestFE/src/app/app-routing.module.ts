import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './pages/forms/forms.component';
import { ViewappComponent } from './pages/viewapp/viewapp.component';
import { FilterComponent } from './pages/filter/filter.component';

const routes: Routes = [
  { path: '', component: FormsComponent, pathMatch: 'full' },
  { path: 'forms', component: FormsComponent },
  { path: 'viewapp', component: ViewappComponent },
  { path: 'filter', component: FilterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
