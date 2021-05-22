import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }

  create(hexString : string, filename : string) : void {
    if (hexString === "") {
        return;
    }
    let buffer = [];
    for (var i = 0; i < hexString.length; i += 2) {
        buffer.push(parseInt(hexString.substring(i, i + 2), 16))
    }
    let byteArray = new Uint8Array(buffer);
    let a = window.document.createElement('a');
    try
    {
      a.href = window.URL.createObjectURL(new Blob([byteArray], { type: 'application/octet-stream' }));
      a.download = filename;
      document.body.appendChild(a);
      a.click();
    }
    finally
    {
      try
      {
        document.body.removeChild(a);
      }
      catch
      { }
    }
  }

}
