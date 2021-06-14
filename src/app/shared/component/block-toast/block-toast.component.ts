import { Component, Inject } from '@angular/core';
import { BLOCK_TOAST_TOKEN } from './block-toast-token';

@Component({
  selector: 'app-block-toast',
  templateUrl: './block-toast.component.html',
  styleUrls: ['./block-toast.component.scss']
})
export class BlockToastComponent {

  constructor(@Inject(BLOCK_TOAST_TOKEN) public value: { message: string }) { }

}
