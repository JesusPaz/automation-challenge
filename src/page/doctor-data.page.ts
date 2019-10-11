import { $, ElementFinder } from 'protractor';

export class DoctorDataPage {
  private nameKey: ElementFinder;
  private lastNameKey: ElementFinder;
  private idKey: ElementFinder;
  private submitBtn: ElementFinder;
  private idValue;

  constructor () {
    this.nameKey = $('#name');
    this.lastNameKey = $('#last_name');
    this.idKey = $('#identification');
    this.submitBtn = $('.btn');
    this.idValue = Math.floor(Math.random() * (999999999 - 9999)) + 9999;
  }

  public async sendNameKeys(): Promise<void> {
    await this.nameKey.sendKeys('Doc');
  }

  public async sendLastNameKeys(): Promise<void> {
    await this.lastNameKey.sendKeys('Tor');
  }

  public async sendIdKeys(): Promise<void> {
    await this.idKey.sendKeys(this.idValue);
  }

  public async clickSubmitBtn(): Promise<void> {
    await this.submitBtn.click();
  }
}
