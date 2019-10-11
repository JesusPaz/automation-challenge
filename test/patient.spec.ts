import { browser } from 'protractor';
import { LandingPage } from '../src/page/landing.page';
import { PatientDataPage } from '../src/page/patient-data.page';
import { ConfirmationPage } from '../src/page/confirmation.page';

describe('Add a new patient', () => {

  const landingPage: LandingPage = new LandingPage();
  const patientDataPage: PatientDataPage = new PatientDataPage();
  const confirmationPage: ConfirmationPage = new ConfirmationPage();

  it('fill all the data to create a new patient', async () => {
    await browser.get('http://automatizacion.herokuapp.com/jpaz/');

    await landingPage.addPatientBtnClick();

    await patientDataPage.sendNameKeys();
    await patientDataPage.sendLastNameKeys();
    await patientDataPage.sendIdKeys();
    await patientDataPage.clickPrepaidHealthCheckBtn();
    await patientDataPage.clickSubmitBtn();

    await expect(confirmationPage.getConfimMsg())
      .toBe('Datos guardados correctamente.');

  });
});
