import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadFilePreviewComponent } from './uploadfilepreview.component';

describe('FileUploadComponent', () => {
  let component: UploadFilePreviewComponent;
  let fixture: ComponentFixture<UploadFilePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFilePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});