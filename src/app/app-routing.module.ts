import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {path:'',component:NavbarComponent,
    children:[
      {path:'expertise',component:ExpertiseComponent},
      {path:'footer',component:FooterComponent},
      {path:'contact',component:ContactComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
