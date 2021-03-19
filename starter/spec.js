// spec.js

describe('ADF Demo App', function() {

  let EC = protractor.ExpectedConditions;
  let rightClick = protractor.Button.RIGHT;

 it('test', async function() {

  console.log("Open browser");
  await browser.get(globalVariables.TEST_URL);

  console.log("Do login");
  await element(globalVariables.LOGIN_USERNAME).sendKeys(globalVariables.USERNAME);
  await element(globalVariables.LOGIN_PASSWORD).sendKeys(globalVariables.PASSWORD);
  await element(globalVariables.LOGIN_BUTTON).click();

  console.log("Create new folder");
  await element(globalVariables.NEW_DROPDOWN).click();
  await element(globalVariables.CREATE_FOLDER).click();
  expect(await element(globalVariables.CREATE_DIALOG_TITLE).isPresent()).toBe(true);
  await element(globalVariables.CREATE_DIALOG_NAME).sendKeys(globalVariables.USER_EMAIL);
  await element(globalVariables.CREATE_DIALOG_CREATE).click();
  await browser.wait(EC.presenceOf(element(globalVariables.TABLE_ELEMENT)), 5000, 'Element took too long to appear in DOM.');
  expect(await element(globalVariables.TABLE_ELEMENT).getText()).toContain(globalVariables.USER_EMAIL);

  console.log("Create another folder with same name");
  await element(globalVariables.NEW_DROPDOWN).click();
  await element(globalVariables.CREATE_FOLDER).click();
  expect(await element(globalVariables.CREATE_DIALOG_TITLE).isPresent()).toBe(true);
  await element(globalVariables.CREATE_DIALOG_NAME).sendKeys(globalVariables.USER_EMAIL);
  await element(globalVariables.CREATE_DIALOG_CREATE).click();
  expect(await element(globalVariables.CREATE_DIALOG_TITLE).isPresent()).toBe(true);
  expect(await element(globalVariables.SNACKBAR).getText()).toEqual("There's already a folder with this name. Try a different name.");
  await element(globalVariables.CREATE_DIALOG_CANCEL).click();
  expect(await element(globalVariables.CREATE_DIALOG_TITLE).isPresent()).toBe(false);

  console.log("Delete entry")
  await element(globalVariables.TABLE_ELEMENT).click();
  await browser.actions().click(element(globalVariables.TABLE_ELEMENT), rightClick).perform();
  await element(globalVariables.CONTEXT_MENU_DELETE).click();

 })
});