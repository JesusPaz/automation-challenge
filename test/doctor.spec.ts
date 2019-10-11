import { browser } from 'protractor';
import { LandingPage } from '../src/page/landing.page';
import { DoctorDataPage } from '../src/page/doctor-data.page';
import { ConfirmationDoctorPage } from '../src/page/confirmation-doctor.page';

describe('Add a new doctor', () => {

  const landingPage: LandingPage = new LandingPage();
  const doctorDataPage: DoctorDataPage = new DoctorDataPage();
  const confirmationDoctorPage: ConfirmationDoctorPage = new ConfirmationDoctorPage();

  it('fill all the data to create a new docor', async () => {
    await browser.get('http://automatizacion.herokuapp.com/jpaz/');

    await landingPage.addDoctorBtnClick();

    await doctorDataPage.sendNameKeys();
    await doctorDataPage.sendLastNameKeys();
    await doctorDataPage.sendIdKeys();
    await doctorDataPage.clickSubmitBtn();

    await expect(confirmationDoctorPage.getConfimMsg())
      .toBe('Datos guardados correctamente.');
  });
});
