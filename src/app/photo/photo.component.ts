import { Component, OnInit, Input } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'photo-selector',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  /* Buradaki 'photo' değişkeni diğer bir component olan app.component tarafından buraya gönderilecek.
     Dolayısıyla burada bu değişkeni @Input() belirteçini koyarak tanımladım. */
  @Input()
  photo: WebcamImage;

  constructor() { }

  ngOnInit(): void {
  }  

  // Bu metot çekilen fotoğrafı tutan 'photo' değişkenini null yaparak ekrana bastırılan fotoğrafı silme işlemini gerçekleştirecek.
  clearImg(): void {
    this.photo = null;
  }

}
