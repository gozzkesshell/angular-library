export class Book {
  constructor(private id: string, private title: string, private author: string, private date: Date){
  }
  getId(){
    return this.id;
  }
  getTitle(){
    return this.title;
  }
  getAuthor(){
    return this.author;
  }
  getDate(){
    return this.date;
  }
}
