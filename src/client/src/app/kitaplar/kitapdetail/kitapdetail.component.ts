import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KitapService } from '../../shared/services';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-kitapdetail',
  templateUrl: './kitapdetail.component.html',
  styleUrls: ['./kitapdetail.component.css']
})
export class KitapdetailComponent implements OnInit {

  id: number;
  private sub: any;
  rows = [];
  columns = [];
  form: FormGroup;
  result;
  boolean: true;
  guncelle;

  constructor(private route: ActivatedRoute, private kitapService: KitapService,
    private formBuilder: FormBuilder, private translate: TranslateService) { }

  ngOnInit() {
    this.translate.get('Are You Sure To Update ?').subscribe(value => this.guncelle = value);
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.kitapService.getById(this.id).subscribe(res => {
        this.result = res.body[0];
      }
      )

    });

  }

  updateKitaps() {
    if (window.confirm(this.guncelle)) {
      this.kitapService.update(this.id, this.result).subscribe(data => {
        this.kitapService.anaKitapGuncelle(this.boolean);
      })
    }
  }

}
