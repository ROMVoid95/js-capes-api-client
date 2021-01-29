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
    instance = new GalacticraftCapesApi.TypeApi();
  });

  describe('(package)', function() {
    describe('TypeApi', function() {
      describe('createType', function() {
        it('should call createType successfully', function(done) {
          // TODO: uncomment, update parameter values for createType call
          /*
          var body = new GalacticraftCapesApi.Type();
          body.type = "legacy";

          instance.createType(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteType', function() {
        it('should call deleteType successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteType call
          /*
          var typeName = "typeName_example";

          instance.deleteType(typeName, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTypeByName', function() {
        it('should call getTypeByName successfully', function(done) {
          // TODO: uncomment, update parameter values for getTypeByName call and complete the assertions
          /*
          var typeName = "typeName_example";

          instance.getTypeByName(typeName, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(GalacticraftCapesApi.Type);
            expect(data.type).to.be.a('string');
            expect(data.type).to.be("legacy");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateType', function() {
        it('should call updateType successfully', function(done) {
          // TODO: uncomment, update parameter values for updateType call
          /*
          var typeName = "typeName_example";
          var body = new GalacticraftCapesApi.Type();
          body.type = "legacy";

          instance.updateType(typeName, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

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