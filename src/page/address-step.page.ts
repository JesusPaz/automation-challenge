import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private toCheckoutBtn: ElementFinder;

  constructor () {
    this.toCheckoutBtn = $('#center_column > form > p > button > span');
  }

  public async toCheckoutBtnClick(): Promise<void> {
    await this.toCheckoutBtn.click();
  }
}
