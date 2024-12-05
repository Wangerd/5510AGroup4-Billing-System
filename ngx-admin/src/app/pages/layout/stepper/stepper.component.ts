import {Component, HostBinding, OnInit, SimpleChanges} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {NewsService} from '../news.service';
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';


@Component({
  selector: 'ngx-stepper',
  templateUrl: 'stepper.component.html',
  styleUrls: ['stepper.component.scss'],
})
export class StepperComponent implements OnInit {

  firstForm: UntypedFormGroup;
  secondForm: UntypedFormGroup;
  thirdForm: UntypedFormGroup;

  firstCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };

  pageSize = 10;

  constructor(private fb: UntypedFormBuilder,
              private newsService: NewsService,
              private toastrService: NbToastrService) {
  }

  loadNext(cardData) {
    if (cardData.loading) { return; }

    cardData.loading = true;
    cardData.placeholders = new Array(this.pageSize);
    this.newsService.load(cardData.pageToLoadNext, this.pageSize)
      .subscribe(nextNews => {
        cardData.placeholders = [];
        cardData.news.push(...nextNews);
        cardData.loading = false;
        cardData.pageToLoadNext++;
      });
  }

  private index: number = 0;

  @HostBinding('class')
  classes = 'example-items-rows';

  positions = NbGlobalPhysicalPosition;


  showToast(position, status) {
    this.index += 1;
    // this.toastrService.show(status || 'Success', `Toast ${this.index}`, { position, status });
    this.toastrService.show(status || 'Success', `Account Withdrawal Submit`, { position, status });
  }

  ngOnInit() {
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });

  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }
  checked1 = true;
  checked2 = true;
  checked3 = true;
  checked4 = true;

  toggle1(checked: boolean) {
    this.checked1 = false;
    console.log(this.checked1);
  }
  toggle2(checked: boolean) {
    this.checked2 = false;
    console.log(this.checked2);
  }
  toggle3(checked: boolean) {
    this.checked3 = false;
    console.log(this.checked3);
  }
  toggle4(checked: boolean) {
    this.checked4 = false;
    console.log(this.checked4);
  }
  handlePaymentHistory() {
    this['router'] .navigate(['././e-commerce/e-commerce.component']);
  }
}
