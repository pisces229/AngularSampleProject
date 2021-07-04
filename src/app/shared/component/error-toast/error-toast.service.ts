import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ComponentRef, Injectable, Injector, NgZone } from '@angular/core';
import * as StackTrace from 'stacktrace-js';
import { ERROR_TOAST_TOKEN } from './error-toast-token';
import { ErrorToastComponent } from './error-toast.component';

@Injectable()
export class ErrorToastService {

  private opened = false;
  private overlayConfig!: OverlayConfig;
  private overlayRef!: OverlayRef;
  private componentPortal!: ComponentPortal<ErrorToastComponent>;
  private componentRef!: ComponentRef<ErrorToastComponent>;

  constructor(private injector: Injector,
    private overlay: Overlay,
    private ngZone: NgZone) {
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

  pushError(error: any) {
    if (error) {
      try {
        StackTrace.fromError(error)
        .then((value) => {
          const stack = value
          //.splice(0, 20)
          .map((value) => {
            return value.toString();
          }).join('\n');
          this.push((error.message ? error.message : 'message'), stack);
        })
        .catch(() => {
          this.push('error', JSON.stringify(error));
        });
      } catch {
        this.push('error', JSON.stringify(error));
      }
      throw error;
    }
  }

  pushHttpErrorResponse(error: HttpErrorResponse) {
    if (error) {
      try {
        this.push(`${error.status} ${error.statusText}`, error.message);
      } catch {
        this.push('error', JSON.stringify(error));
      }
      throw error;
    }
  }

  push(message: string, stack: string) {
    try {
      if (!this.opened) {
        this.opened = true;
        this.overlayRef = this.overlay.create(this.overlayConfig);
        this.componentPortal = new ComponentPortal(
          ErrorToastComponent,
          null,
          Injector.create({
            parent: this.injector,
            providers: [
              {
                provide: ERROR_TOAST_TOKEN,
                useValue: { message, stack }
              }
            ]
          }));
        this.componentRef = this.overlayRef.attach(this.componentPortal);
        this.ngZone.run(() => {
          this.componentRef.instance.observable$.subscribe(() => {
            this.overlayRef.detach();
            this.overlayRef.dispose();
            this.componentRef.destroy();
            this.opened = false;
          });
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

}
