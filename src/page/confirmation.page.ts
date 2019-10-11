import { $, ElementFinder } from 'protractor';

export class ConfirmationPage {
  private confirmationMsg: ElementFinder;

  constructor () {
    this.confirmationMsg = $('.panel-body > p:nth-child(1)');
  }

  public async getConfimMsg(): Promise<string> {
    return await this.confirmationMsg.getText();
  }
}
