import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/inicio/hero.component';
import { EventAnnouncementComponent } from './components/event-announcement/event-announcement.component';
// import { HeroComponent } from './components/hero/hero.component';
// import { EventAnnouncementComponent } from './components/event-annoukncement/event-announcement.component';

export const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: '', component: HeroComponent },
  { path: '', component: EventAnnouncementComponent },
  { path: '', component: HeroComponent },
  { path: '', component: HeroComponent },
//   { path: 'event', component: EventAnnouncementComponent },
  // Otras rutas aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
