import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// shared

// page
import { Test02Service } from './test02.service';
import { Test02StoreService } from './test02-store.service';
import {
  Test02Model,
  Test02FormModel
} from './test02-model';

@Component({
  selector: 'app-test02',
  templateUrl: './test02.component.html',
  styleUrls: ['./test02.component.scss'],
})
export class Test02Component implements OnInit {

  test02Model = new Test02Model();
  test02FormModel = new Test02FormModel();

  constructor(private router: Router,
    private test02Service: Test02Service,
    private test02StoreService: Test02StoreService) {
      if (test02StoreService.getTest02Model()) {
        this.test02Model = this.test02StoreService.getTest02Model();
      }
      if (test02StoreService.getTest02FormModel()) {
        this.test02FormModel = this.test02StoreService.getTest02FormModel();
      }
  }

  ngOnInit(): void {
  }

  plus(): void{
    this.test02Model.Count++;
  }

  minus(): void{
    this.test02Model.Count--;
  }

  go(): void {
    this.test02StoreService.setTest02Model(this.test02Model);
    this.test02FormModel.Age = null;
    this.test02StoreService.setTest02FormModel(this.test02FormModel);
    this.router.navigate(['test/test01']);
  }

}
