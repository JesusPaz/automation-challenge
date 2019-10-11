import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private bankWireBtn: ElementFinder;

  constructor () {
    this.bankWireBtn = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async bankWireBtnClick(): Promise<void> {
    await this.bankWireBtn.click();
  }
}
