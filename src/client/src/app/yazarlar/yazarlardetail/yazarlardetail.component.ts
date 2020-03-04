import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { YazarService, NotificationService } from "../../shared/services/";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-yazarlardetail',
  templateUrl: './yazarlardetail.component.html',
  styleUrls: ['./yazarlardetail.component.css']
})
export class YazarlardetailComponent implements OnInit {


  id: number;
  YazarAdi;
  private sub: any;
  rows = [];
  columns = [];
  form: FormGroup;
  result;
  boolean: true;
  guncelle: string;

  constructor(private route: ActivatedRoute, private yazarService: YazarService, private formBuilder: FormBuilder, 
              private translate: TranslateService, private noti: NotificationService) { }

  ngOnInit() {
    this.translate.get('Are You Sure To Update ?').subscribe(value => this.guncelle = value);
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.yazarService.getById(this.id).subscribe(res => {
        this.result = res.body;
      }
      )

    });

  }

  updateYazars() {
    if (window.confirm(this.guncelle)) {
      this.yazarService.update(this.id, this.result).subscribe(data => {
        this.yazarService.anaYazarGuncelle(this.boolean);
      })
    }
  }

}
