QUnit.module("romai", function () {
  QUnit.test("Létezik-e a romai?", function (assert) {
    assert.ok(romaiNem, "létezik a romai");
  });
  QUnit.test("Függvény-e a romai?", function (assert) {
    assert.ok(typeof romaiNem === "function", "fv a romai");
  });
  QUnit.test("1", function (assert) {
    assert.equal(romaiNem(arabSzamok[i]), romaiSzamok[i]);
  });
  QUnit.test("2", function (assert) {
    assert.equal(romaiNem(arabSzamok[i]), romaiSzamok[i]);
  });
  QUnit.test("5", function (assert) {
    assert.equal(romaiNem(arabSzamok[i]), romaiSzamok[i]);
  });
  QUnit.test("38", function (assert) {
    assert.equal(romaiNem(arabSzamok[i]), romaiSzamok[i]);
  });
});
