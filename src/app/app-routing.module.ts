import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GetdataComponent } from './getdata/getdata.component';
import { PostDataComponent } from './post-data/post-data.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'home', component: HomeComponent},
  { path: 'Form', component: TemplateDrivenFormsComponent},
  { path: 'reactive', component: ReactiveFormComponent},
  {path: 'GetData', component: GetdataComponent},
  {path: 'PostData', component: PostDataComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
