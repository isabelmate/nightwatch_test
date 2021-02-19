//** Hotel Rates **
// 6 al 10 abril 1 room 2 guests --> aprilDateRates
// 18 al 21 mayo 1 room 2 guests --> mayDateRates

//** Hotel NoRates **
// 6 al 10 abril 1 room 2 guests --> aprilDateNorates
// 18 al 21 mayo 1 room 2 guests --> mayDateNorates

function testUrl(browser, url) {
    browser
        .url(url)
        .waitForElementPresent('body')
        .waitForElementPresent('.mi-rs-rooms-listing');

    // alojamiento, select room
    browser
        // .verify.containsText('h2', 'Single Room')
        .saveScreenshot('./screenshots/withExtra/1databoard.png')
        .click('.mi-rs-rooms-listing .mi-rs-room:first-child .mi-rs-rate-qty .mi-rs-rate-select-room-btn')

    // 'Elegir extras'
    browser
        .waitForElementPresent('.mi-rs-extras-listing')
        .click('.mi-rs-extras-listing:first-child .mi-rs-extra-footer .mi-rs-add-btn').pause(600)
        .saveScreenshot('./screenshots/withExtra/2extraadded.png')
        .click('.mi-rs-cart-resume .mi-rs-cart-btn')


    // 'Rellenar form'
    browser
        .setValue('#clientName', 'Nombre de reserva')
        .setValue('#clientSurname', 'Apellido de reserva')

        .setValue('#clientEmail', 'algo@gmail.com')
        .setValue('#clientPhone', '677374859')

        .setValue('#clientCardNumber', '747446746')

        .saveScreenshot('./screenshots/withExtra/3formcompleted.png')
        .end();

}


module.exports = {

  tags: ['withExtra', 'noRatesExtra', 'ratesExtra'],

  '@disabled': false,

  // 'mobile': function (browser) {
  //   testUrl(browser, browser.globals.mobile)
  // },

  '6/10 Abril Hotel Rates': function (browser) {
    testUrl(browser, browser.globals.aprilDateRates)
  },

  '18/21 Mayo Hotel Rates': function (browser) {
    testUrl(browser, browser.globals.mayDateRates)
  },

  '6/10 Abril Hotel NoRates': function (browser) {
    testUrl(browser, browser.globals.aprilDateNorates)
  },

  '18/21 Mayo Hotel NoRates': function (browser) {
    testUrl(browser, browser.globals.mayDateNorates)
  },


  afterEach : function(browser) {
    {
      browser.end();
    }
  }

}
