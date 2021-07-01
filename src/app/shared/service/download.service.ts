import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }

  message(response: HttpResponse<Blob>): Promise<any> {
    if (response.body?.type == 'text/plain') {
      return response.body?.text().then(value => value);
    } else {
      return new Promise((resolve, reject) => resolve(''));
    }
  }

  create(response: HttpResponse<Blob>): void {
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

}
