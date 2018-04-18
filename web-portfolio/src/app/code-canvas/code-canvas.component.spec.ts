import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCanvasComponent } from './code-canvas.component';

describe('CodeCanvasComponent', () => {
  let component: CodeCanvasComponent;
  let fixture: ComponentFixture<CodeCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
