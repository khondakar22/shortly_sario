import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShortlyApiService } from './services/shortly-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  shortlyForm: FormGroup;
  shortenUrlObject: any;
  loading = false;
  isCopied1: boolean;
  copyWriteYear = new Date().getFullYear();
  constructor(
    private fb: FormBuilder,
    private shortlyApiService: ShortlyApiService
  ) {
    this.generateForm();
  }
  ngOnInit(): void {}

  private generateForm(): void {
    this.shortlyForm = this.fb.group({
      shortUrlInput: [null, Validators.required],
    });
  }
  public getShortenLink(form: any): void {
    console.log('shortlyForm', form.value.shortUrlInput);
    const url: string = form.value.shortUrlInput;
    this.loading = true;
    this.shortlyApiService.getShortenUrl(url).subscribe(
      (result) => this.mappedShortenUrl(result),
      (error) => this.errorHandeling(error),
      () => {
        this.loading = false;
      }
    );
  }
  private mappedShortenUrl(resutl: any): void {
    console.log('result', resutl);
    this.loading = true;
    if (resutl) {
    this.shortenUrlObject =   resutl.result;
    this.loading = false;
    }
  }
  private errorHandeling(error: any): void {
  console.log('error', error);
  }
}
