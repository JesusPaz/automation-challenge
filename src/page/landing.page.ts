import { $, ElementFinder } from 'protractor';

export class LandingPage {
  private addDoctorBtn: ElementFinder;

  constructor () {
    this.addDoctorBtn = $('a.list-group-item:nth-child(1)');
  }

  public async addDoctorBtnClick(): Promise<void> {
    await this.addDoctorBtn.click();
  }
}
