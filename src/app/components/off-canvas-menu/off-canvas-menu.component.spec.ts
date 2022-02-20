import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffCanvasMenuComponent } from './off-canvas-menu.component';

describe('OffCanvasMenuComponent', () => {
  let component: OffCanvasMenuComponent;
  let fixture: ComponentFixture<OffCanvasMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffCanvasMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffCanvasMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
