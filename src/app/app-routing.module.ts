import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceesComponent } from './servicees/servicees.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { WhyusComponent } from './whyus/whyus.component';
import { combineChange } from '@angular/fire/compat/firestore';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent },
  {path: 'services', component: ServiceesComponent },
  {path: 'contact', component: ContactComponent },
  { path: 'whyus', component: WhyusComponent},
  {path: 'blog', component: BlogComponent },
  {path: 'testimonials', component: TestimonialsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
