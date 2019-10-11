import { $, ElementFinder } from 'protractor';

export class SingInStepPage {
  private emailKey: ElementFinder;
  private passwordKey: ElementFinder;
  private submitBtn: ElementFinder;

  constructor () {
    this.emailKey = $('#email');
    this.passwordKey = $('#passwd');
    this.submitBtn = $('#SubmitLogin > span');
  }

  public async sendEmailKeys(): Promise<void> {
    await this.emailKey.sendKeys('aperdomobo@gmail.com');
  }

  public async sendPsswordKeys(): Promise<void> {
    await this.passwordKey.sendKeys('WorkshopProtractor');
  }

  public async clickSubmitBtn(): Promise<void> {
    await this.submitBtn.click();
  }
}
