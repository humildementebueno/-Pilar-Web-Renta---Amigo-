import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { EventAnnouncementComponent } from './components/event-announcement/event-announcement.component';
import { FeaturesComponent } from './components/features/features.component';
import { StepsComponent } from './components/steps/steps.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    EventAnnouncementComponent,
    FeaturesComponent,
    StepsComponent,
    WhyChooseUsComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'renta-amigo';
}
