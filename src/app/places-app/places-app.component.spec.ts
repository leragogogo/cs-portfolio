import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesAppComponent } from './places-app.component';

describe('PlacesAppComponent', () => {
  let component: PlacesAppComponent;
  let fixture: ComponentFixture<PlacesAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacesAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
