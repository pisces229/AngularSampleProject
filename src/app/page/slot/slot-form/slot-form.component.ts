import { Component, ContentChild, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SlotFormModel } from '../slot-model';
import { SlotService } from '../slotservice';

@Component({
  selector: 'app-slot-form',
  templateUrl: './slot-form.component.html',
  styleUrls: ['./slot-form.component.scss']
})
export class SlotFormComponent implements OnInit {

  form: SlotFormModel = {};
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

  @ContentChild('contentChildButton') contentChildButton!: TemplateRef<any>;
  @ContentChild('contentChildForm') contentChildForm!: TemplateRef<SlotFormComponent>;

  constructor(private slotService: SlotService) { }

  ngOnInit(): void {

  }

  setForm = (value: SlotFormModel) :void => { this.form = value };

  getForm = () :SlotFormModel => this.form;

}
