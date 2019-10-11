import { browser } from 'protractor';
import { MenuContentPage, ProductAddedModalPage, ProductListPage, OrderSummaryPage,
         SingInStepPage, AddressStepPage, ShippingStepPage, PaymentStepPage, BankPaymentPage } from '../src/page';

describe('Buy a t-shirt', () => {

  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const productListPage: ProductListPage = new ProductListPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const singInStepPage: SingInStepPage = new SingInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');

    await menuContentPage.goToTShirtMenu();
    await productAddedModalPage.clickAddCartButton();
    await productListPage.clickToCheckoutBtn();
    await orderSummaryPage.clickToCheckoutBtn();

    await singInStepPage.sendEmailKeys();
    await singInStepPage.sendPsswordKeys();
    await singInStepPage.clickSubmitBtn();

    await addressStepPage.toCheckoutBtnClick();

    await shippingStepPage.agreeTermsCheckClick();

    await shippingStepPage.toCheckoutBtnClick();
    await paymentStepPage.bankWireBtnClick();
    await bankPaymentPage.confirmOrderBtnClick();

    await expect(bankPaymentPage.getConfimMsg())
      .toBe('Your order on My Store is complete.');
  });
});
