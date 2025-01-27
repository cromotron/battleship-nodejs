const assert = require('assert').strict;
const gameController = require("../GameController/gameController.js");
const letters = require("../GameController/letters.js");
const position = require("../GameController/position.js")

describe('getHitShipCounterTests', function () {

  it('should return position if there is a ship at the shooting position', function () {
    var ships = gameController.InitializeShips();
    counter = 1;
    ships.forEach(ship => {
      for (var i = 1; i <= ship.size; i++) {
        column = letters.get(counter);
        ship.addPosition(new position(letters.get(counter), i))
      }
      counter++;
    })
    var actual = gameController.getHitShipCounter(ships, new position(letters.B, 3));
    assert.ok(actual === 1);
  });

  it('should return -1 if there is no ship at the shooting position', function () {
    var ships = gameController.InitializeShips();
    counter = 1;
    ships.forEach(ship => {
      for (var i = 1; i <= ship.size; i++) {
        ship.addPosition(new position(letters.get(counter), i))
      }
      counter++;
    })
    var actual = gameController.getHitShipCounter(ships, new position(letters.G, 1));
    assert.strictEqual(actual, -1);
  });

  it('should throw an exception if positstion is undefined', function () {
    var ships = gameController.InitializeShips();
    assert.throws(
      () => {
        var actual = gameController.getHitShipCounter(ships, undefined);
      }
    )
  });

  it('should throw an exception if ship is undefined', function () {
    assert.throws(
      () => {
        var actual = gameController.getHitShipCounter(undefined, new position(letters.G, 1));
      }
    )
  });
});