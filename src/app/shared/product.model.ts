export class Product {
  public name: string;
  public price: number;
  public image: string;
  public categoryId: string;

  constructor(name: string, price: number, image: string, categoryId: string) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.categoryId = categoryId;
  }
}
