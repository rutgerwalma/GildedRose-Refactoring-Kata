export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    function updateAgedBrie(item: Item) {
      if (item.quality < 50) item.quality++;
    }

    function updateBackstagePass(item: Item) {
      if (item.sellIn <= 0) item.quality = 0;
      else if (item.sellIn <= 5) item.quality += 3;
      else if (item.sellIn <= 10) item.quality += 2;
      else item.quality++;
    }

    function updateDefault(item: Item) {
      item.quality -= item.sellIn <= 0 ? 2 : 1;
      if (item.quality < 0) item.quality = 0;
    }

    function updateConjured(item: Item) {
      item.sellIn < 0 ? (item.quality -= 4) : (item.quality -= 2);
    }

    function clampQuality(item: Item) {
      if (item.quality > 50) item.quality = 50;
      if (item.quality < 0) item.quality = 0;
    }

    this.items.forEach((item) => {
      if (item.name === "Sulfuras, Hand of Ragnaros") return;
      if (item.name === "Aged Brie") updateAgedBrie(item);
      else if (item.name.includes("Backstage pass")) updateBackstagePass(item);
      else if (item.name.includes("Conjured")) updateConjured(item);
      else updateDefault(item);

      clampQuality(item);
      item.sellIn--;
    });
    return this.items;
  }
}
