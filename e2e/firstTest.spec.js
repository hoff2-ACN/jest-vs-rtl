describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('starts getting time messages once you press the button', async () => {
    const button = element(by.id('getTime'));
    await button.tap();
  });
});
