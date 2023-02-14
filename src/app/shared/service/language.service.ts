import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  public constructor(public translate: TranslateService) {
    this.setLanguageDefault();
  }

  private setLanguageDefault() {
    if (!JSON.parse(JSON.stringify(localStorage.getItem('lang'))))
      localStorage.setItem('lang', 'en');
    const lang =
      JSON.parse(JSON.stringify(localStorage.getItem('lang'))) ?? 'en';
    this.translate.use(lang);
    document
      .getElementsByTagName('html')[0]
      .setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    this.lang = lang;
  }

  public lang: string = 'en';
  public setLanguage(lang: string): void {
    if (localStorage.getItem('lang') !== lang) {
      this.translate.use(lang);
      localStorage.setItem('lang', lang);
      location.reload();
    }
  }
}
