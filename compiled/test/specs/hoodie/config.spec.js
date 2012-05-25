// Generated by CoffeeScript 1.3.1

define('specs/hoodie/config', ['mocks/hoodie', 'hoodie/config'], function(HoodieMock, Config) {
  return describe("Config", function() {
    beforeEach(function() {
      this.hoodie = new HoodieMock;
      return this.config = new Config(this.hoodie);
    });
    describe(".constructor(@hoodie, options)", function() {
      return it("should default @prefix to 'hoodie'", function() {
        var config;
        config = new Config(this.hoodie);
        return expect(config.namespace).toBe('hoodie');
      });
    });
    describe(".set(key, value)", function() {
      beforeEach(function() {
        return spyOn(this.hoodie.store, "update");
      });
      return it("should save a $config with key: value", function() {
        this.config.set('funky', 'fresh');
        return expect(this.hoodie.store.update).wasCalledWith('$config', 'hoodie', {
          funky: 'fresh'
        });
      });
    });
    describe(".get(key)", function() {
      beforeEach(function() {
        spyOn(this.hoodie.store, "load").andReturn(this.hoodie.defer().resolve({
          funky: 'fresh'
        }));
        return this.config = new Config(this.hoodie);
      });
      return it("should get the config using store", function() {
        return expect(this.config.get('funky')).toBe('fresh');
      });
    });
    return describe(".remove(key)", function() {
      beforeEach(function() {
        return spyOn(this.hoodie.store, "update").andReturn('promise');
      });
      return it("should remove the config using store", function() {
        this.config.remove('funky');
        return expect(this.hoodie.store.update).wasCalledWith('$config', 'hoodie', {
          funky: void 0
        });
      });
    });
  });
});