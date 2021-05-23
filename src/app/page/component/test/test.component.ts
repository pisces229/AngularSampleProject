import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { finalize, tap } from 'rxjs/operators';

import { DownloadService } from 'src/app/core/service/download.service';
import { TestAjaxInsertInputModel } from '../../model/test/test-ajax-insert-input-model';
import { TestAjaxUpdateInputModel } from '../../model/test/test-ajax-update-input-model';
import { TestAjaxValueInputModel } from '../../model/test/test-ajax-value-input-model';
import { TestService } from '../../service/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @BlockUI() blockUI! : NgBlockUI;

  items = ["test01", "test02"];
  uploadFiles!: FileList;

  constructor(private router : Router,
    private testService : TestService,
    private downloadService : DownloadService) { }

  ngOnInit() {

  }

  goPage(page : string) : void {
    // do clear all page stroe
    this.router.navigate([page]);
  }

  onClickGetValueByValue() : void {
    this.blockUI.start();
    this.testService.getValueByValue('1234')
    .pipe(finalize(() => this.blockUI.stop()))
    .subscribe(
      value => {
        console.log(value);
      },
      error => {
        // error do something
      },
      () => {
        // complete do something
    });
  }

  onClickPostValueByValue() : void {
    this.blockUI.start();
    this.testService.postValueByValue('1234')
    .pipe(finalize(() => this.blockUI.stop()))
    .subscribe(
      value => {
        console.log(value);
      },
      error => {
        // error do something
      },
      () => {
        // complete do something
    });
  }

  onClickGetValueByModel() : void {
    let postData = new TestAjaxValueInputModel();
    postData.Name = "Name123";
    postData.Count = 123;
    //postData.Date = new Date();
    this.blockUI.start();
    this.testService.getValueByModel(postData)
    .pipe(finalize(() => this.blockUI.stop()))
    .subscribe(
      value => {
        console.log(value);
      },
      error => {
        // error do something
      },
      () => {
        // complete do something
    });
  }

  onClickPostValueByModel() : void {
    let postData = new TestAjaxValueInputModel();
    postData.Name = "Name123";
    postData.Count = 123;
    postData.Date = new Date();
    this.blockUI.start();
    this.testService.postValueByModel(postData)
    .pipe(finalize(() => this.blockUI.stop()))
    .subscribe(
      value => {
        console.log(value);
      },
      error => {
        // error do something
      },
      () => {
        // complete do something
    });
  }

  onClickSignIn() : void {
    this.blockUI.start();
    this.testService.signIn()
    .pipe(finalize(() => this.blockUI.stop()))
    .subscribe(
      value => {
        console.log(`SignIn:${value}`);
        this.router.navigate(['test01']);
      },
      error => {
        // error do something
      },
      () => {
        // complete do something
    });
  }

  onClickValidateAuth() : void {
    this.blockUI.start();
    this.testService.validateAuth()
    .pipe(finalize(() => this.blockUI.stop()))
    .subscribe(
      value => {
        console.log(`AuthCheck:${value}`);
      },
      error => {
        // error do something
      },
      () => {
        // complete do something
    });
  }

  onClickRefresh() : void {
    this.blockUI.start();
    this.testService.Refresh()
    .pipe(finalize(() => this.blockUI.stop()))
    .subscribe(
      value => {
        console.log(`Refresh:${value}`);
      },
      error => {
        // error do something
      },
      () => {
        // complete do something
    });
  }

  onClickSignOut() : void {
    this.blockUI.start();
    this.testService.signOut()
    .pipe(finalize(() => this.blockUI.stop()))
    .subscribe(
      value => {
        console.log(`SignOut:${value}`);
        this.router.navigate(['']);
      },
      error => {
        // error do something
      },
      () => {
        // complete do something
    });
  }

  onClickQuery() : void {
    this.blockUI.start();
    this.testService.query()
    .pipe(finalize(() => this.blockUI.stop()))
    .subscribe(
      value => {
        console.log(value);
      },
      error => {
        // error do something
      },
      () => {
        // complete do something
    });
  }

  onClickInsert() : void {
    let postData = new TestAjaxInsertInputModel();
    postData.NAME = "C";
    postData.MAKE_DATE = new Date();
    postData.SALE_AMT = -100;
    this.blockUI.start();
    this.testService.insert(postData)
    .pipe(finalize(() => this.blockUI.stop()))
    .subscribe(
      value => {
        console.log(value);
      },
      error => {
        // error do something
      },
      () => {
        // complete do something
    });
  }

  onClickUpdate() : void {
    let postData = new TestAjaxUpdateInputModel();
    postData.ROW = 1;
    postData.NAME = "CC";
    postData.MAKE_DATE = new Date();
    postData.SALE_AMT = -1000;
    postData.SALE_DATE = new Date();
    postData.TAX = 999;
    postData.REMARK = "REMARK";
    this.blockUI.start();
    this.testService.update(postData)
    .pipe(finalize(() => this.blockUI.stop()))
    .subscribe(
      value => {
        console.log(value);
      },
      error => {
        // error do something
      },
      () => {
        // complete do something
    });
  }

  onClickDelete() : void {
    let postData = 1;
    //let postData = JSON.stringify(1);
    this.blockUI.start();
    this.testService.delete(postData)
    .pipe(finalize(() => this.blockUI.stop()))
    .subscribe(
      value => {
        console.log(value);
      },
      error => {
        // error do something
      },
      () => {
        // complete do something
    });
  }

  onChangeFile(event : Event) : void {
    this.uploadFiles = (event.target as HTMLInputElement).files!;
  }

  onClickUpload() : void {
    if (this.uploadFiles && this.uploadFiles.length > 0) {
      const postData = new FormData();
      postData.append('UPLOAD_FILE', this.uploadFiles[0]);
      postData.append('UPLOAD_NAME', 'UPLOAD_NAME');
      postData.append('UPLOAD_TYPE', 'UPLOAD_TYPE');
      this.blockUI.start();
      this.testService.upload(postData)
      .pipe(finalize(() => this.blockUI.stop()))
      .subscribe(
        value => {
          console.log(value);
        },
        error => {
          // error do something
        },
        () => {
          // complete do something
      });
    } else {
      console.log('Please Select File');
    }
  }

  onClickUploads() : void {
    if (this.uploadFiles && this.uploadFiles.length > 0) {
      const postData = new FormData();
      Array.from(this.uploadFiles).forEach((value, index) => {
        postData.append(`[${index}].UPLOAD_FILE`, value);
        postData.append(`[${index}].UPLOAD_NAME`, `UPLOAD_NAME_${index}`);
        postData.append(`[${index}].UPLOAD_TYPE`, `UPLOAD_TYPE_${index}`);
      });
      this.blockUI.start();
      this.testService.uploads(postData)
      .pipe(finalize(() => this.blockUI.stop()))
      .subscribe(
        value => {
          console.log(value);
        },
        error => {
          // error do something
        },
        () => {
          // complete do something
      });
    } else {
      console.log('Please Select File');
    }
  }

  onClickGetDownload() : void {
    let postData = {};
    this.blockUI.start();
    this.testService.getDownload(postData)
    .pipe(finalize(() => this.blockUI.stop()))
    .subscribe(
      value => {
        this.downloadService.create(value);
      },
      error => {
        // error do something
        this.downloadService.error(error);
      },
      () => {
        // complete do something
    });
  }

  onClickPostDownload() : void {
    let postData = {};
    this.blockUI.start();
    this.testService.postDownload(postData)
    .pipe(finalize(() => this.blockUI.stop()))
    .subscribe(
      value => {
        this.downloadService.create(value);
      },
      error => {
        // error do something
        this.downloadService.error(error);
      },
      () => {
        // complete do something
    });
  }

}