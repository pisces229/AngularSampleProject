import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Component, ComponentRef, ContentChild, ElementRef, EmbeddedViewRef, Injector, NgZone, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SlotFormComponent } from '../slot-form/slot-form.component';
import { SlotOverlayComponent } from '../slot-overlay/slot-overlay.component';

@Component({
  selector: 'app-slot-main',
  templateUrl: './slot-main.component.html',
  styleUrls: ['./slot-main.component.scss']
})
export class SlotMainComponent implements OnInit, OnDestroy {

  // ViewChild
  // @ViewChild('name') name!: ElementRef;
  // @ViewChild('name') name!: ElementRef<any>;
  // @ViewChild('name') name!: TemplateRef<any>;
  // @ViewChild('name') name!: nameComponent;

  // ContentChild
  // @ContentChild('name') name!: ElementRef;
  // @ContentChild('name') name!: ElementRef<any>;
  // @ContentChild('name') name!: TemplateRef<any>;
  // @ContentChild('name') name!: nameComponent;

  @ViewChild('viewChildSlotForm') viewChildSlotForm!: SlotFormComponent;

  private overlayConfig!: OverlayConfig;
  private overlayRef!: OverlayRef;
  private componentPortal!: ComponentPortal<SlotOverlayComponent>;
  private componentRef!: ComponentRef<SlotOverlayComponent>;

  private templatePortal!: TemplatePortal<any>;
  @ViewChild('templateRef') templateRef!: TemplateRef<any>;

  constructor(private injector: Injector,
    private overlay: Overlay,
    private ngZone: NgZone,
    private viewContainerRef: ViewContainerRef) {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
    const scrollStrategy = this.overlay.scrollStrategies.block();
    this.overlayConfig = new OverlayConfig({
      maxWidth: "100%",
      maxHeight: "50%",
      hasBackdrop: true,
      positionStrategy: positionStrategy,
      scrollStrategy: scrollStrategy
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      console.log('SlotMainComponent', 'ngOnDestroy', 'overlayRef');
      this.overlayRef.detach();
      this.overlayRef.dispose();
    }
    if (this.componentRef) {
      console.log('SlotMainComponent', 'ngOnDestroy', 'componentRef');
      this.componentRef.destroy();
    }
  }

  onClickSetSlotForm(): void {
    this.viewChildSlotForm.setForm({ name: '123', remark: '456' });
  }

  onClickGetSlotForm(): void {
    console.log(this.viewChildSlotForm.getForm());
  }

  onClickOpenComponentPortal() {
    this.overlayRef = this.overlay.create(this.overlayConfig);
    this.componentPortal = new ComponentPortal(
      SlotOverlayComponent,
      null,
      this.injector);
    this.componentRef = this.overlayRef.attach(this.componentPortal);
    this.ngZone.run(() => {
      this.componentRef.instance.observable$.subscribe(() => {
        this.overlayRef.detach();
        this.overlayRef.dispose();
        this.componentRef.destroy();
      });
    });
  }

  onClickOpenTemplatePortal(): void {
    this.overlayRef = this.overlay.create(this.overlayConfig);
    this.templatePortal = new TemplatePortal(
      this.templateRef,
      this.viewContainerRef);
    this.overlayRef.attach(this.templatePortal);
  }

  onClickCloseTemplatePortal(): void {
    this.overlayRef.detach();
    this.overlayRef.dispose();
  }

  onClickButton(): void {
    console.log('SlotMainComponent', 'onClickButton');
  }

}
