import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private toCheckoutBtn: ElementFinder;

  constructor () {
    this.toCheckoutBtn = $('[style*="display: block;"] .button-container > a');
  }

  public async clickToCheckoutBtn(): Promise<void> {
    await this.toCheckoutBtn.click();
  }
}
