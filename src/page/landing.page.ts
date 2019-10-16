import { $, ElementFinder } from 'protractor';

export class LandingPage {
  private addDoctorBtn: ElementFinder;
  private addPatientBtn: ElementFinder;
  private bookAppointmentBtn: ElementFinder;

  constructor () {
    this.addDoctorBtn = $('a.list-group-item:nth-child(1)');
    this.addPatientBtn = $('a.list-group-item:nth-child(2)');
    this.bookAppointmentBtn = $('a.list-group-item:nth-child(6)');
  }

  public async addDoctorBtnClick(): Promise<void> {
    await this.addDoctorBtn.click();
  }

  public async addPatientBtnClick(): Promise<void> {
    await this.addPatientBtn.click();
  }

  public async bookAppointmentBtnClick(): Promise<void> {
    await this.bookAppointmentBtn.click();
  }
}
