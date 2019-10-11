import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    this.tShirtMenu = $('#block_top_menu > ul > li:nth-child(3) > a');
  }

  public async goToTShirtMenu(): Promise<void> {
    await this.tShirtMenu.click();
  }
}
