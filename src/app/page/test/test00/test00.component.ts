import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

// shared
import {
  CommonAjaxPageModel,
  CommonPageModel
} from 'src/app/shared/model/commond-model';
import { DownloadService } from 'src/app/shared/service/download.service';
import { BlockToastService } from 'src/app/shared/component/block-toast/block-toast.service';
// page
import { Test00Service } from './test00.service';
import {
  Test00AjaxInsertInputModel,
  Test00AjaxQueryInputModel,
  Test00AjaxUpdateInputModel,
  Test00AjaxValueInputModel
} from './test00-model';
import { Test00StoreService } from './test00-store.service';

@Component({
  selector: 'app-test00',
  templateUrl: './test00.component.html',
  styleUrls: ['./test00.component.scss'],
})
export class Test00Component implements OnInit {

  uploadFiles!: FileList;
  rowString?: string;

  @ViewChild('viewChildElementHeader') viewChildElementHeader!: ElementRef<any>;

  constructor(private router: Router,
    private test00Service: Test00Service,
    private test00StoreService: Test00StoreService,
    private downloadService: DownloadService,
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



  onClickGetValueByValue(): void {
    //this.viewChildElementHeader.nativeElement;
    this.blockToastService.start();
    this.test00Service.getValueByValue('1234')
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
    this.test00Service.postValueByValue('1234')
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
    let postData: Test00AjaxValueInputModel = {
      Name: "Name123",
      Count: 123
    };
    //postData.Date = new Date();
    this.blockToastService.start();
    this.test00Service.getValueByModel(postData)
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
    let postData: Test00AjaxValueInputModel = {
      Name: "Name123",
      Count: 123,
      Date: new Date()
    };
    this.blockToastService.start();
    this.test00Service.postValueByModel(postData)
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
    this.test00Service.signIn()
    .pipe(finalize(() => this.blockToastService.stop()))
    .subscribe(
      value => {
        console.log(`SignIn:${value}`);
        this.router.navigate(['test/test01']);
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
    this.test00Service.validateAuth()
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
    this.test00Service.Refresh()
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
    this.test00Service.signOut()
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
    let postData: Test00AjaxQueryInputModel = {};
    this.test00Service.queryWhere(postData)
    .pipe(finalize(() => this.blockToastService.stop()))
    .subscribe(
      value => {
        if (value) {
          if (value.Data && value.Data.length > 0) {
            this.rowString = value.Data[0].ROW;
          }
          console.log(value);
        }
      },
      error => {
        // error do something
      },
      () => {
        // complete do something
    });
  }

  onClickInsert(): void {
    let postData: Test00AjaxInsertInputModel = {
      NAME: "C",
      MAKE_DATE: new Date(),
      SALE_AMT: -100
    };
    this.blockToastService.start();
    this.test00Service.insert(postData)
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
    let postData: Test00AjaxUpdateInputModel = {
      ROW: this.rowString,
      NAME: "AA",
      MAKE_DATE: new Date(),
      SALE_AMT: -1000,
      SALE_DATE: new Date(),
      REMARK: "REMARK"
    };
    this.blockToastService.start();
    this.test00Service.update(postData)
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
    this.test00Service.delete(postData)
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
    let postData: CommonAjaxPageModel<Test00AjaxQueryInputModel> = {
      Data: {

      },
      Page: {
        PageNo: 2,
        PageSize: 10
      }
    };
    this.test00Service.queryGrid(postData)
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
      this.test00Service.upload(postData)
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
      this.test00Service.uploads(postData)
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
    this.test00Service.getDownload(postData)
    .pipe(finalize(() => this.blockToastService.stop()))
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

  onClickPostDownload(): void {
    let postData = {};
    this.blockToastService.start();
    this.test00Service.postDownload(postData)
    .pipe(finalize(() => this.blockToastService.stop()))
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
