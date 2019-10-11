import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private toCartButton: ElementFinder;

  constructor () {
    this.toCartButton = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async clickAddCartButton(): Promise<void> {
    await this.toCartButton.click();
  }
}
