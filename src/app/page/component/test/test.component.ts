import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../../service/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  items = ["test01", "test02"];

  constructor(private router : Router,
    private testService : TestService) { }

  ngOnInit() {

  }

  goPage(page : string) : void {
    this.router.navigate([page]);
  }

  clickSignIn() : void {
    this.testService.signIn().subscribe(value => {
      console.log(`SignIn:${value}`);
      this.router.navigate(['test01']);
    });
  }

  clickAuthCheck() : void {
    this.testService.authCheck().subscribe(
      value => {
        console.log(`AuthCheck:${value}`);
      });
  }

  clickRefresh() : void {
    this.testService.Refresh().subscribe(
      value => {
        console.log(`Refresh:${value}`);
      });
  }

  clickSignOut() : void {
    this.testService.signOut().subscribe(value => {
      console.log(`SignOut:${value}`);
      this.router.navigate(['']);
    });
  }

  clickQuery() : void {
    this.testService.query().subscribe(value => {
      console.log(value);
    });
  }

  clickInsert() : void {
    this.testService.insert().subscribe(value => {
      console.log(value);
    });
  }

  clickUpdate() : void {
    this.testService.update().subscribe(value => {
      console.log(value);
    });
  }

  clickDelete() : void {
    this.testService.delete().subscribe(value => {
      console.log(value);
    });
  }

  clickGetDownload() : void {
    //this.testService.download
  }

  clickPostDownload() : void {

  }

}
