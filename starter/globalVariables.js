
//function to use automation ids in test search for elements
protractor.By.addLocator('automationId', function (toState, opt_parentElement) {
    var using = opt_parentElement || document;
    var possibleAnchors = using.querySelectorAll('*[data-automation-id="' + toState +'"]');
    var result = null;
    if (possibleAnchors.length === 1) {
      result = possibleAnchors[0];
    } else {
      result = possibleAnchors;
    }
    return result;
  });

export function byAutomationId(id) {
    return by.automationId(id);
}

module.exports = {

    //CONSTANTS:
    TEST_URL : 'https://j1hp01s5.trials.alfresco.com/',
    USERNAME : 'guest@example.com',
    PASSWORD : 'Password',
    USER_EMAIL : 'raul.tecar@gmail.com',

    //ELEMENT IDs:
    LOGIN_USERNAME : byAutomationId('username'),
    LOGIN_PASSWORD : byAutomationId('password'),
    LOGIN_BUTTON : byAutomationId('login-button'),
    NEW_DROPDOWN : byAutomationId('create-button'),
    CREATE_FOLDER : by.id('app.create.folder'),
    CREATE_DIALOG_TITLE : by.css("[id*=mat-dialog-title-]"),
    CREATE_DIALOG_NAME : by.id('adf-folder-name-input'),
    CREATE_DIALOG_CREATE : by.id('adf-folder-create-button'),
    CREATE_DIALOG_CANCEL : by.id('adf-folder-cancel-button'),
    TABLE_ELEMENT : byAutomationId('datatable-row-0'),
    SNACKBAR : by.className('mat-simple-snackbar'),
    CONTEXT_MENU_DELETE : by.id('app.context.menu.delete')

}

