import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneItemComponent } from './oneItem.component';

describe('OneItemComponent', () => {
  let component: OneItemComponent;
  let fixture: ComponentFixture<OneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
