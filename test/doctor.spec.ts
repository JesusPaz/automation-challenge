import { browser } from 'protractor';
import { LandingPage } from '../src/page/landing.page';
import { DoctorDataPage } from '../src/page/doctor-data.page';
import { ConfirmationPage } from '../src/page/confirmation.page';

describe('Add a new doctor', () => {

  const landingPage: LandingPage = new LandingPage();
  const doctorDataPage: DoctorDataPage = new DoctorDataPage();
  const confirmationPage: ConfirmationPage = new ConfirmationPage();

  it('fill all the data to create a new doctor', async () => {
    await browser.get('http://automatizacion.herokuapp.com/jpaz/');

    await landingPage.addDoctorBtnClick();

    await doctorDataPage.sendNameKeys();
    await doctorDataPage.sendLastNameKeys();
    await doctorDataPage.sendIdKeys();
    await doctorDataPage.clickSubmitBtn();

    await expect(confirmationPage.getConfimMsg())
      .toBe('Datos guardados correctamente.');
  });
});
