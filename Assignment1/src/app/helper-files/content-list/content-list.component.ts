import { Content } from '../content-interface';

export class ContentList {
  private contentArray:Content[]
  constructor() {
    this.contentArray = [];
   }

   get contentList(){
    return this.contentArray;
  }

  addContent(contentItem:Content){
    this.contentArray.push(contentItem)
  }

  noOfItemsInContentList(){
    return this.contentArray.length;
  }

  getHtml(index: number): string{
   
    let itemAtIndex = this.contentArray[index]
    return `<div class="title">${itemAtIndex.title}</div>
            <div class="description">${itemAtIndex.description}</div>
            <div class="creator">${itemAtIndex.creator}</div>
            <div class="image"><img src="${itemAtIndex.imgURL}" width="200"></div>
            <div class="type">${itemAtIndex.type}</div>`;
  }

}
