import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BlockToastComponent } from '../component/block-toast/block-toast.component';

@Injectable()
export class BlockToastService {

  private opened = false;

  private matDialogRef!: MatDialogRef<BlockToastComponent>;

  constructor(private dialog: MatDialog) {}

  start(): void {
    if (!this.opened) {
      this.opened = true;
      this.matDialogRef = this.dialog.open(BlockToastComponent, {
        data: {},
        disableClose: true,
        hasBackdrop: true
      });

      this.matDialogRef.afterClosed().subscribe(() => {
        this.opened = false;
      });
    }
  }

  stop(): void {
    this.matDialogRef.close();
  }

}
