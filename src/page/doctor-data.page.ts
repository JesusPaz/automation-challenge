import { $, ElementFinder } from 'protractor';

export class DoctorDataPage {
  private nameKey: ElementFinder;
  private lastNameKey: ElementFinder;
  private idKey: ElementFinder;
  private submitBtn: ElementFinder;

  constructor () {
    this.nameKey = $('#name');
    this.lastNameKey = $('#last_name');
    this.idKey = $('#identification');
    this.submitBtn = $('.btn');
  }

  public async sendNameKeys(name): Promise<void> {
    await this.nameKey.sendKeys(name);
  }

  public async sendLastNameKeys(lastName): Promise<void> {
    await this.lastNameKey.sendKeys(lastName);
  }

  public async sendIdKeys(id): Promise<void> {
    await this.idKey.sendKeys(id);
  }

  public async clickSubmitBtn(): Promise<void> {
    await this.submitBtn.click();
  }
}
