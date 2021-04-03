import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { GallerypageComponent } from './gallerypage/gallerypage.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
{
path:'',
pathMatch:'full',
redirectTo:'home',

},
{
  path:"home",
  component:HomepageComponent
},
{
  path:"gallery",
  component:GallerypageComponent
},
{
  path:"about",
  component:AboutpageComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
