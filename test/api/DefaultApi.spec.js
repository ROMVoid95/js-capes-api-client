/*
 * Galacticraft Capes API
 * Galacticraft Cape API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GalacticraftCapesApi);
  }
}(this, function(expect, GalacticraftCapesApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GalacticraftCapesApi.DefaultApi();
  });

  describe('(package)', function() {
    describe('DefaultApi', function() {
      describe('pingGet', function() {
        it('should call pingGet successfully', function(done) {
          // TODO: uncomment pingGet call and complete the assertions
          /*

          instance.pingGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(GalacticraftCapesApi.ApiResponse);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("RETURN OK");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
