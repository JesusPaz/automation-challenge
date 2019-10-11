import { $, ElementFinder } from 'protractor';

export class PatientDataPage {
  private nameKey: ElementFinder;
  private lastNameKey: ElementFinder;
  private idKey: ElementFinder;
  private submitBtn: ElementFinder;
  private prepaidHealthCheck: ElementFinder;
  private idValue;

  constructor () {
    this.nameKey = $('div.form-group:nth-child(1) > input:nth-child(2)');
    this.lastNameKey = $('div.form-group:nth-child(2) > input:nth-child(2)');
    this.idKey = $('div.form-group:nth-child(5) > input:nth-child(2)');
    this.prepaidHealthCheck = $('.checkbox > label:nth-child(1) > input:nth-child(1)');
    this.submitBtn = $('.btn');
    this.idValue = Math.floor(Math.random() * (999999999 - 9999)) + 9999;
  }

  public async sendNameKeys(): Promise<void> {
    await this.nameKey.sendKeys('Paci');
  }

  public async sendLastNameKeys(): Promise<void> {
    await this.lastNameKey.sendKeys('Ente');
  }

  public async sendIdKeys(): Promise<void> {
    await this.idKey.sendKeys(this.idValue);
  }

  public async clickPrepaidHealthCheckBtn(): Promise<void> {
    await this.prepaidHealthCheck.click();
  }

  public async clickSubmitBtn(): Promise<void> {
    await this.submitBtn.click();
  }
}
