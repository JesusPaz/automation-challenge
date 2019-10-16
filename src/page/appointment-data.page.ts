import { $, ElementFinder } from 'protractor';

export class AppointmentDataPage {
  private doctorIdKey: ElementFinder;
  private patientIdKey: ElementFinder;
  private dateKey: ElementFinder;
  private submitBtn: ElementFinder;

  constructor () {
    this.doctorIdKey = $('div.form-group:nth-child(3) > input:nth-child(2)');
    this.patientIdKey = $('div.form-group:nth-child(2) > input:nth-child(2)');
    this.dateKey = $('#datepicker');
    this.submitBtn = $('.btn');
  }

  public async sendDoctorIdKeys(doctorId): Promise<void> {
    await this.doctorIdKey.sendKeys(doctorId);
  }

  public async sendPatientIdKeys(patientId): Promise<void> {
    await this.patientIdKey.sendKeys(patientId);
  }

  public async sendDateKeyKeys(date): Promise<void> {
    await this.dateKey.sendKeys(date);
  }

  public async clickSubmitBtn(): Promise<void> {
    await this.submitBtn.click();
  }
}
