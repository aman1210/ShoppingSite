export class Category{
  public id: string;
  public title: string;
  public image: string;
  public categoryColor: string;

  constructor(id: string,title: string, image: string,categoryColor: string,){
    this.id = id;
    this.title = title;
    this.image = image;
    this.categoryColor = categoryColor;
  }
}