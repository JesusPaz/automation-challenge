import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private agreeTermsCheck: ElementFinder;
  private toCheckoutBtn: ElementFinder;

  constructor () {
    this.agreeTermsCheck = $('#cgv');
    this.toCheckoutBtn = $('#form > p > button > span');
  }

  public async agreeTermsCheckClick(): Promise<void> {
    await this.agreeTermsCheck.click();
  }

  public async toCheckoutBtnClick(): Promise<void> {
    await this.toCheckoutBtn.click();
  }
}
