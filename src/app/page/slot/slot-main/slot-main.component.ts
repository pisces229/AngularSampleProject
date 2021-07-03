import { Component, ContentChild, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SlotFormComponent } from '../slot-form/slot-form.component';

@Component({
  selector: 'app-slot-main',
  templateUrl: './slot-main.component.html',
  styleUrls: ['./slot-main.component.scss']
})
export class SlotMainComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {

  }

  onClickSetSlotForm(): void {
    this.viewChildSlotForm.setForm({ name: '123', remark: '456' });
  }

  onClickGetSlotForm(): void {
    console.log(this.viewChildSlotForm.getForm());
  }

  onClickButton(): void {
    console.log('SlotMainComponent', 'onClickButton');
  }

}
