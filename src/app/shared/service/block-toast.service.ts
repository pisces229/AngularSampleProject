import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, InjectionToken, Injector, NgZone } from '@angular/core';
import { BlockToastComponent } from '../component/block-toast/block-toast.component';

export const BLOCK_TOAST_DATA = new InjectionToken<{}>('BLOCK_TOAST_DATA');

@Injectable({
  providedIn: 'root'
})
export class BlockToastService {

  private opened = false;
  private count = 0;
  private overlayConfig!: OverlayConfig;
  private overlayRef!: OverlayRef;
  private componentPortal!: ComponentPortal<BlockToastComponent>;
  private componentRef!: ComponentRef<BlockToastComponent>;

  constructor(private injector: Injector,
    private overlay: Overlay,
    private ngZone: NgZone) {
    const strategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
    this.overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      positionStrategy: strategy,
    });
  }

  start(): void {
    ++this.count;
    if (!this.opened) {
      this.opened = true;
      this.overlayRef = this.overlay.create(this.overlayConfig);
      this.componentPortal = new ComponentPortal(
        BlockToastComponent,
        null,
        Injector.create({
          parent: this.injector,
          providers: [
            {
              provide: BLOCK_TOAST_DATA,
              useValue: { message: 'Loading...' }
            }
          ]
        }));
      this.componentRef = this.overlayRef.attach(this.componentPortal);
    }
  }

  stop(): void {
    if (this.count > 0) {
      --this.count;
      if (this.opened && this.count == 0) {
        this.ngZone.run(() => {
          this.overlayRef.detach();
          this.overlayRef.dispose();
          this.componentRef.destroy();
          this.opened = false;
        });
      }
    }
  }

}
