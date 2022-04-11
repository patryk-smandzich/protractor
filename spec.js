describe('Enter Patryk Name', function() {
 it('should add a Name as Patryk', function() {
 browser.get('https://angularjs.org');
 element(by.model('yourName')).sendKeys('Patryk');
  var name= element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
expect(name.getText()).toEqual('Hello Patryk error');
  });
});