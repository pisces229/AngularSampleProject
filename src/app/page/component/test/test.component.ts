import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

// shared
import { DownloadUtilService } from 'src/app/shared/util/download-util.service';
import { CommonPageModel } from 'src/app/shared/model/common/common-page-model';
import { CommonAjaxPageModel } from 'src/app/shared/model/common/common-ajax-page-model';

// page
import { TestService } from '../../service/test.service';
import { TestAjaxInsertInputModel } from '../../model/test/test-ajax-insert-input-model';
import { TestAjaxQueryInputModel } from '../../model/test/test-ajax-query-input-model';
import { TestAjaxUpdateInputModel } from '../../model/test/test-ajax-update-input-model';
import { TestAjaxValueInputModel } from '../../model/test/test-ajax-value-input-model';
import { BlockToastService } from 'src/app/shared/service/block-toast.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  items = ["test01", "test02"];
  uploadFiles!: FileList;
  rowString!: string;

  @ViewChild('viewChildElementHeader') viewChildElementHeader!: ElementRef<any>;

  constructor(private router: Router,
    private testService: TestService,
    private downloadUtilService: DownloadUtilService,
    private blockToastService: BlockToastService) {
      //this.viewChildElementHeader.nativeElement;
  }

  ngOnInit() {
    // Start blocking
    this.blockToastService.start();
    // do something
    setTimeout(() => {
      // Stop blocking
      this.blockToastService.stop();
    }, 1000);
    //this.viewChildElementHeader.nativeElement;
  }

  goPage(page: string): void {
    // do clear all page store
    this.router.navigate([page]);
  }

  onClickGetValueByValue(): void {
    //this.viewChildElementHeader.nativeElement;
    this.blockToastService.start();
    this.testService.getValueByValue('1234')
    .pipe(finalize(() => this.blockToastService.stop()))
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

  onClickPostValueByValue(): void {
    this.blockToastService.start();
    this.testService.postValueByValue('1234')
    .pipe(finalize(() => this.blockToastService.stop()))
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

  onClickGetValueByModel(): void {
    let postData = new TestAjaxValueInputModel();
    postData.Name = "Name123";
    postData.Count = 123;
    //postData.Date = new Date();
    this.blockToastService.start();
    this.testService.getValueByModel(postData)
    .pipe(finalize(() => this.blockToastService.stop()))
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

  onClickPostValueByModel(): void {
    let postData = new TestAjaxValueInputModel();
    postData.Name = "Name123";
    postData.Count = 123;
    postData.Date = new Date();
    this.blockToastService.start();
    this.testService.postValueByModel(postData)
    .pipe(finalize(() => this.blockToastService.stop()))
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

  onClickSignIn(): void {
    this.blockToastService.start();
    this.testService.signIn()
    .pipe(finalize(() => this.blockToastService.stop()))
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

  onClickValidateAuth(): void {
    this.blockToastService.start();
    this.testService.validateAuth()
    .pipe(finalize(() => this.blockToastService.stop()))
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

  onClickRefresh(): void {
    this.blockToastService.start();
    this.testService.Refresh()
    .pipe(finalize(() => this.blockToastService.stop()))
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

  onClickSignOut(): void {
    this.blockToastService.start();
    this.testService.signOut()
    .pipe(finalize(() => this.blockToastService.stop()))
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

  onClickQuery(): void {
    this.blockToastService.start();
    let postData = new TestAjaxQueryInputModel();
    this.testService.queryWhere(postData)
    .pipe(finalize(() => this.blockToastService.stop()))
    .subscribe(
      value => {
        if (value.Data.length > 0) {
          this.rowString = value.Data[0].ROW;
        }
        console.log(value);
      },
      error => {
        // error do something
      },
      () => {
        // complete do something
    });
  }

  onClickInsert(): void {
    let postData = new TestAjaxInsertInputModel();
    postData.NAME = "C";
    postData.MAKE_DATE = new Date();
    postData.SALE_AMT = -100;
    this.blockToastService.start();
    this.testService.insert(postData)
    .pipe(finalize(() => this.blockToastService.stop()))
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

  onClickUpdate(): void {
    let postData = new TestAjaxUpdateInputModel();
    postData.ROW = this.rowString;
    postData.NAME = "AA";
    postData.MAKE_DATE = new Date();
    postData.SALE_AMT = -1000;
    postData.SALE_DATE = new Date();
    postData.TAX = 999;
    postData.REMARK = "REMARK";
    this.blockToastService.start();
    this.testService.update(postData)
    .pipe(finalize(() => this.blockToastService.stop()))
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

  onClickDelete(): void {
    //let postData = 1;
    let postData = JSON.stringify(this.rowString);
    this.blockToastService.start();
    this.testService.delete(postData)
    .pipe(finalize(() => this.blockToastService.stop()))
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

  onClickQueryGrid(): void {
    this.blockToastService.start();
    let postData = new CommonAjaxPageModel<TestAjaxQueryInputModel>();
    postData.Data = new TestAjaxQueryInputModel();
    postData.Page = new CommonPageModel();
    postData.Page.PageNo = 2;
    postData.Page.PageSize = 10;
    this.testService.queryGrid(postData)
    .pipe(finalize(() => this.blockToastService.stop()))
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

  onChangeFile(event: Event): void {
    this.uploadFiles = (event.target as HTMLInputElement).files!;
  }

  onClickUpload(): void {
    if (this.uploadFiles && this.uploadFiles.length > 0) {
      const postData = new FormData();
      postData.append('UPLOAD_FILE', this.uploadFiles[0]);
      postData.append('UPLOAD_NAME', 'UPLOAD_NAME');
      postData.append('UPLOAD_TYPE', 'UPLOAD_TYPE');
      this.blockToastService.start();
      this.testService.upload(postData)
      .pipe(finalize(() => this.blockToastService.stop()))
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

  onClickUploads(): void {
    if (this.uploadFiles && this.uploadFiles.length > 0) {
      const postData = new FormData();
      Array.from(this.uploadFiles).forEach((value, index) => {
        postData.append(`[${index}].UPLOAD_FILE`, value);
        postData.append(`[${index}].UPLOAD_NAME`, `UPLOAD_NAME_${index}`);
        postData.append(`[${index}].UPLOAD_TYPE`, `UPLOAD_TYPE_${index}`);
      });
      this.blockToastService.start();
      this.testService.uploads(postData)
      .pipe(finalize(() => this.blockToastService.stop()))
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

  onClickGetDownload(): void {
    let postData = {};
    this.blockToastService.start();
    this.testService.getDownload(postData)
    .pipe(finalize(() => this.blockToastService.stop()))
    .subscribe(
      value => {
        this.downloadUtilService.create(value);
      },
      error => {
        // error do something
        this.downloadUtilService.error(error);
      },
      () => {
        // complete do something
    });
  }

  onClickPostDownload(): void {
    let postData = {};
    this.blockToastService.start();
    this.testService.postDownload(postData)
    .pipe(finalize(() => this.blockToastService.stop()))
    .subscribe(
      value => {
        this.downloadUtilService.create(value);
      },
      error => {
        // error do something
        this.downloadUtilService.error(error);
      },
      () => {
        // complete do something
    });
  }

}
