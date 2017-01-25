import { Component } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: NgUploaderOptions = {
    url: 'http://localhost/upload/getUpload.php',
    filterExtensions: true,
    allowedExtensions: ['image/png', 'image/jpg']
  };
  sizeLimit = 2000000;

  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
      console.log('response from server');
      console.log(data);
    }
  }

  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  beforeUpload(uploadingFile): void {
    console.log('init file to upload');
    console.log(uploadingFile);
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('File is too large');
    }
  }
}
