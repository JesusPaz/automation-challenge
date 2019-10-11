import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private toCheckoutBtn: ElementFinder;

  constructor () {
    this.toCheckoutBtn = $('.cart_navigation span');
  }

  public async clickToCheckoutBtn(): Promise<void> {
    await this.toCheckoutBtn.click();
  }
}
