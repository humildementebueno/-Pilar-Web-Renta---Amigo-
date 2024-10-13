import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAnnouncementComponent } from './event-announcement.component';

describe('EventAnnouncementComponent', () => {
  let component: EventAnnouncementComponent;
  let fixture: ComponentFixture<EventAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventAnnouncementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
