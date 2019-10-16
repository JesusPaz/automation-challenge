import { browser } from 'protractor';
import { LandingPage } from '../src/page/landing.page';
import { DoctorDataPage } from '../src/page/doctor-data.page';
import { PatientDataPage } from '../src/page/patient-data.page';
import { ConfirmationPage } from '../src/page/confirmation.page';
import { AppointmentDataPage } from '../src/page/appointment-data.page';

describe('Book an appointment', () => {

  const landingPage: LandingPage = new LandingPage();
  const doctorDataPage: DoctorDataPage = new DoctorDataPage();
  const confirmationPage: ConfirmationPage = new ConfirmationPage();
  const patientDataPage: PatientDataPage = new PatientDataPage();
  const appointmentDataPage: AppointmentDataPage = new AppointmentDataPage();

  const URL = 'http://automatizacion.herokuapp.com/jpaz/';
  const doctorId = Math.floor(Math.random() * (999999999 - 9999)) + 9999;
  const patientId = Math.floor(Math.random() * (999999999 - 9999)) + 9999;

  it('fill all the data to create a new doctor', async () => {
    await browser.get(URL);

    await landingPage.addDoctorBtnClick();

    await doctorDataPage.sendNameKeys('Doc');
    await doctorDataPage.sendLastNameKeys('Tor');
    await doctorDataPage.sendIdKeys(doctorId);

    await doctorDataPage.clickSubmitBtn();

    await expect(confirmationPage.getConfimMsg())
      .toBe('Datos guardados correctamente.');
  });

  it('fill all the data to create a new patient', async () => {
    await browser.get(URL);

    await landingPage.addPatientBtnClick();

    await patientDataPage.sendNameKeys('Paci');
    await patientDataPage.sendLastNameKeys('Ente');
    await patientDataPage.sendIdKeys(patientId);
    await patientDataPage.clickPrepaidHealthCheckBtn();

    await patientDataPage.clickSubmitBtn();

    await expect(confirmationPage.getConfimMsg())
      .toBe('Datos guardados correctamente.');

  });

  it('fill all the data to book and appointment', async () => {
    await browser.get(URL);

    await landingPage.bookAppointmentBtnClick();

    await appointmentDataPage.sendDateKeyKeys('10/10/2020');
    await appointmentDataPage.sendDoctorIdKeys(doctorId);
    await appointmentDataPage.sendPatientIdKeys(patientId);

    await appointmentDataPage.clickSubmitBtn();

    await expect(confirmationPage.getConfimMsg())
      .toBe('Datos guardados correctamente.');

  });
});
