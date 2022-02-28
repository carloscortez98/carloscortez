import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [{path: "", component: HomeComponent},
                        {path: "formacion", component: EducationComponent},
                        {path: "contacto", component: ContactComponent},
                        {path: "experiencia", component: ExperienceComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
