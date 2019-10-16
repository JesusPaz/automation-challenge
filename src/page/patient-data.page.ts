import { $, ElementFinder } from 'protractor';

export class PatientDataPage {
  private nameKey: ElementFinder;
  private lastNameKey: ElementFinder;
  private idKey: ElementFinder;
  private submitBtn: ElementFinder;
  private prepaidHealthCheck: ElementFinder;

  constructor () {
    this.nameKey = $('div.form-group:nth-child(1) > input:nth-child(2)');
    this.lastNameKey = $('div.form-group:nth-child(2) > input:nth-child(2)');
    this.idKey = $('div.form-group:nth-child(5) > input:nth-child(2)');
    this.prepaidHealthCheck = $('.checkbox > label:nth-child(1) > input:nth-child(1)');
    this.submitBtn = $('.btn');
  }

  public async sendNameKeys(name): Promise<void> {
    await this.nameKey.sendKeys(name);
  }

  public async sendLastNameKeys(lastName): Promise<void> {
    await this.lastNameKey.sendKeys(lastName);
  }

  public async sendIdKeys(id): Promise<void> {
    await this.idKey.sendKeys(id);
  }

  public async clickPrepaidHealthCheckBtn(): Promise<void> {
    await this.prepaidHealthCheck.click();
  }

  public async clickSubmitBtn(): Promise<void> {
    await this.submitBtn.click();
  }
}
