import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { YazarService } from "../shared/services/yazar.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ConfirmModalComponent } from "../shared/components";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-yazarlar',
  templateUrl: './yazarlar.component.html',
  styleUrls: ['./yazarlar.component.css']
})
export class YazarlarComponent implements OnInit {

  @ViewChild('colActionTemplate', { static: true }) colActionTemplate: TemplateRef<any>;
  yazarModal: BsModalRef;
  form: FormGroup;
  rows = [];
  columns = [];
  yazars = [];
  id;
  Yazarad;
  Kullaniciid;
  Eylemler;
  VeriyiSil;

  constructor(private yazarService: YazarService, private modalService: BsModalService, private formBuilder: FormBuilder, private translate: TranslateService) {
  }

  ngOnInit() {
    this.translate.get('Author Id').subscribe(value => this.id = value);
    this.translate.get('Author Name').subscribe(value => this.Yazarad = value);
    this.translate.get('User Id').subscribe(value => this.Kullaniciid = value);
    this.translate.get('Actions').subscribe(value => this.Eylemler = value);
    this.translate.get('Are You Sure To Delete ?').subscribe(value => this.VeriyiSil = value);
    this.columns = [
      { prop: 'id', name: this.id },
      { prop: 'YazarAdi', name: this.Yazarad },
      { prop: 'KullaniciId', name: this.Kullaniciid },
      { name: this.Eylemler, prop: 'id', cellTemplate: this.colActionTemplate, flexGrow: 1, sortable: false }
    ];

    this.form = this.formBuilder.group({
      YazarAdi: [null, [Validators.required]]
    });

    this.refreshData();

    this.yazarService.getAll().subscribe(res => {
      this.rows = res.body;
    }
    )
    this.refreshData();
    this.guncelleme();
  }
  guncelleme() {
    this.yazarService.anaYazarBilgisiAl().subscribe(
      (opening) => {
        if (opening) {
          this.refreshData();
        } else {
          this.refreshData();
        }
      }
    );
  }

  saveYazar() {
    if (this.form.invalid) {
      return;
    }
    this.yazarService.create(this.form.value).subscribe(
      (resp) => this.refreshData()
    );
    this.yazarModal.hide();
    this.form.reset();
  }

  openModal(template: TemplateRef<any>) {
    this.yazarModal = this.modalService.show(template);
  }

  closeAndResetModal() {
    this.yazarModal.hide();
    this.form.reset();
  }

  showConfirmationModal(value): void {
    const modal = this.modalService.show(ConfirmModalComponent);
    (<ConfirmModalComponent>modal.content).showConfirmationModal(
      'Veriyi Sil',
      this.VeriyiSil
    );

    (<ConfirmModalComponent>modal.content).onClose.subscribe(result => {
      if (result === true) {
        this.yazarService.delete(value).subscribe(data => {
          this.refreshData();
        });
      } else if (result === false) {
      }
    });
  }

  refreshData() {
    this.yazarService.getAll().subscribe(
      (resp) => {
        this.rows = resp.body;
      }
    );
  }



}
