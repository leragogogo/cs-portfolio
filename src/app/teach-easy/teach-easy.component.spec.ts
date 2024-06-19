import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachEasyComponent } from './teach-easy.component';

describe('TeachEasyComponent', () => {
  let component: TeachEasyComponent;
  let fixture: ComponentFixture<TeachEasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachEasyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachEasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
