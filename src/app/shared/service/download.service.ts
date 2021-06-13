import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }

  create(response: HttpResponse<Blob>): void {
    // console.log(response);
    // console.log(response.headers.keys());
    let contentDisposition = response.headers.get('content-disposition');
    let contentDispositionValues = contentDisposition?.split(';');
    let filename = 'download';
    contentDispositionValues?.forEach(f =>
      {
        if (f.indexOf('filename') > -1) {
          let texts = f.split('=');
          if (texts.length > 1) {
            filename = texts[1];
          }
        }
      });
    // const a = window.document.createElement('a');
    // a.href = window.URL.createObjectURL(res.body);
    // a.download = filename;
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
    saveAs((response.body as Blob), filename);
  }

  error(error: any): void {
    if (error instanceof HttpErrorResponse) {
      error.error.text()
      .then((value: any) => {
        console.log(value);
      });
    }
  }

}
