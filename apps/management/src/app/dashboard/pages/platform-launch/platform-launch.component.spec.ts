import { ComponentFixture, TestBed } from '@angular/core/testing';
import PlatformLaunchComponent from "./platform-launch.component"

describe('PlatformLaunchComponent', () => {
  let component: PlatformLaunchComponent;
  let fixture: ComponentFixture<PlatformLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformLaunchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlatformLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
