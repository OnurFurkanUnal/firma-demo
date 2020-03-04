import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KullaniciService } from '../../shared/services/kullanici.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-yeni-kayit',
  templateUrl: './yeni-kayit.component.html',
  styleUrls: ['./yeni-kayit.component.css']
})
export class YeniKayitComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    private kullaniciService: KullaniciService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      KullaniciAdi: ['', Validators.required],
      Sifre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    });
  }

  get f() { return this.form.controls; }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  kullaniciKaydet() {
    if (this.form.valid) {
      return this.kullaniciService.create(this.form.value)
        .subscribe(
          (resp) => {
            this.router.navigate(['/']);
            this.formSubmitAttempt = true;
            this.form.reset();
          }
        );
    }
  }
}

