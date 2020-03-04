import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-sayfa-basligi',
  templateUrl: './sayfa-basligi.component.html',
  styleUrls: ['./sayfa-basligi.component.css']
})
export class SayfaBasligiComponent implements OnInit {
  @Input() heading: string;
  @Input() icon: string;
  constructor() { }

  ngOnInit() {
  }

}
