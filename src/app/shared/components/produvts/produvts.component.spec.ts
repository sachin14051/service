import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduvtsComponent } from './produvts.component';

describe('ProduvtsComponent', () => {
  let component: ProduvtsComponent;
  let fixture: ComponentFixture<ProduvtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduvtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduvtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
