export class Product {
  public barcode: string;
  public name: string;
  public description: string;

  constructor(barcode: string, name: string, description: string) {
    this.barcode = barcode;
    this.name = name;
    this.description = description;
  }
}
