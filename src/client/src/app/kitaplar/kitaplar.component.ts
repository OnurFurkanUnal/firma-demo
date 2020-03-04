import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { KitapService } from "../shared/services/";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ConfirmModalComponent } from "../shared/components";
import { AbstractControl, ValidationErrors } from '@angular/forms'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-kitaplar',
  templateUrl: './kitaplar.component.html',
  styleUrls: ['./kitaplar.component.css']
})
export class KitaplarComponent implements OnInit {

  @ViewChild('colActionTemplate', { static: true }) colActionTemplate: TemplateRef<any>;
  kitapModal: BsModalRef;
  form: FormGroup;
  rows = [];
  columns = [];
  kitaps = [];
  Yazarid;
  Kitapad;
  Kullaniciid;
  Eylemler;
  VeriyiSil;

  constructor(private kitapService: KitapService, private modalService: BsModalService, private formBuilder: FormBuilder,
    private translate: TranslateService) { }

  ngOnInit() {
    this.translate.get('Author Id').subscribe(value => this.Yazarid = value);
    this.translate.get('Book Name').subscribe(value => this.Kitapad = value);
    this.translate.get('Actions').subscribe(value => this.Eylemler = value);
    this.translate.get('Are You Sure To Delete ?').subscribe(value => this.VeriyiSil = value);
    this.columns = [
      { prop: 'id', name: 'Kitap Id' },
      { prop: 'KitapAdi', name: this.Kitapad },
      { prop: 'YazarId', name: this.Yazarid },
      { name: this.Eylemler, prop: 'id', cellTemplate: this.colActionTemplate, flexGrow: 1, sortable: false }
    ];

    this.form = this.formBuilder.group({
      KitapAdi: [null, [Validators.required]],
      YazarId: [null, [Validators.required, this.gte]],

    });

    this.refreshData();

    this.kitapService.getAll().subscribe(res => {
      this.rows = res.body;
    }
    )
    this.refreshData();
    this.guncelleme();
  }

  gte(control: AbstractControl): ValidationErrors | null {
    if (isNaN(control.value)) {
      return { 'gte': true }
    }
    return null
  }

  guncelleme() {
    this.kitapService.anaKitapBilgisiAl().subscribe(
      (opening) => {
        if (opening) {
          this.refreshData();
        } else {
          this.refreshData();
        }
      }
    );
  }

  saveKitap() {
    if (this.form.invalid) {
      return;
    }
    this.kitapService.create(this.form.value).subscribe(
      (resp) => this.refreshData()
    );
    this.kitapModal.hide();
    this.form.reset();
  }

  openModal(template: TemplateRef<any>) {
    this.kitapModal = this.modalService.show(template);
  }

  closeAndResetModal() {
    this.kitapModal.hide();
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
        this.kitapService.delete(value).subscribe(data => {
          this.refreshData();
        });
      } else if (result === false) {
      }
    });
  }

  refreshData() {
    this.kitapService.getAll().subscribe(
      (resp) => {
        this.rows = resp.body;
      }
    );
  }


}
