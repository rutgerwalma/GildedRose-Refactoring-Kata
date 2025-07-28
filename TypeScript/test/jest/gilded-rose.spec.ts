import { Item, GildedRose } from "@/gilded-rose";

describe("Backstage pass", () => {
  it("should expire", () => {
    const backstagePass = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      0,
      50
    );
    const gildedRose = new GildedRose([backstagePass]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});

describe("Conjured item", () => {
  it("should degrade twice as fast", () => {
    const conjuredItem = new Item("Conjured Eierbal", 4, 10);
    const gildedRose = new GildedRose([conjuredItem]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });
});
