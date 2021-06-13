import { Component, Inject } from '@angular/core';
import { BLOCK_TOAST_DATA } from './block-toast.service';

@Component({
  selector: 'app-block-toast',
  templateUrl: './block-toast.component.html',
  styleUrls: ['./block-toast.component.scss']
})
export class BlockToastComponent {

  constructor(@Inject(BLOCK_TOAST_DATA) public value: { message: string }) { }

}
