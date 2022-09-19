import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlCreatedComponent } from './url-created.component';

describe('UrlCreatedComponent', () => {
  let component: UrlCreatedComponent;
  let fixture: ComponentFixture<UrlCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlCreatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
