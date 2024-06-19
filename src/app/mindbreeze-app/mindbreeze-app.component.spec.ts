import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindbreezeAppComponent } from './mindbreeze-app.component';

describe('MindbreezeAppComponent', () => {
  let component: MindbreezeAppComponent;
  let fixture: ComponentFixture<MindbreezeAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindbreezeAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MindbreezeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
