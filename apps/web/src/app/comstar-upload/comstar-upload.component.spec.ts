import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComstarUploadComponent } from './comstar-upload.component';

describe('ComstarUploadComponent', () => {
  let component: ComstarUploadComponent;
  let fixture: ComponentFixture<ComstarUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComstarUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComstarUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
