import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmOrderBtn: ElementFinder;
  private confirmationMsg: ElementFinder;

  constructor () {
    this.confirmOrderBtn = $('#cart_navigation > button > span');
    this.confirmationMsg = $('#center_column > div > p > strong');
  }

  public async confirmOrderBtnClick(): Promise<void> {
    await this.confirmOrderBtn.click();
  }

  public async getConfimMsg(): Promise<string> {
    return await this.confirmationMsg.getText();
  }
}
