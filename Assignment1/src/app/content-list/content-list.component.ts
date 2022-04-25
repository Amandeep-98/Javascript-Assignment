import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  type: string = '';
  type1: string = 'drama';
  type2: string = 'adventure';
  type3: string = 'animation';
  contentExist = false;
  contentDoesNotExist = false;
  movieList = [{
    id: 0,
    name: "The Shawshank Redemption",
    type: ['drama'],
    imageUrl: "../../assets/img/movie1.jpg",
    body: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",    
  },
  {
    id: 1,
    name: 'Fight Club',
    type: ['drama'],
    imageUrl: "../../assets/img/movie2.jpg",
    body: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    
  },
  {
    id: 2,
    name: 'City of God',
    type: ['adventure'],
    imageUrl: '../../assets/img/movie3.jpg',
    body: 'In the slums of Rio, two kids paths diverge as one struggles to become a photographer and the other a kingpin.',
    
  },
  {
    id: 3,
    name: "The Lion King",
    type: ['animation'],
    imageUrl: "../../assets/img/movie4.jpg",
    body: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    
  },
  {
    id: 4,
    name: "Cinema Paradiso",
    type: ['drama'],
    imageUrl: "../../assets/img/movie5.jpg",
    body: "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.",
    
  },
  {
    id: 5,
    name: "Paths of Glory",
    type: ['drama', 'adventure'],
    imageUrl: "../../assets/img/movie6.jpg",
    body: "After refusing to attack an enemy position, a general accuses the soldiers of cowardice and their commanding officer must defend them.",
    
  },
  {
    id: 6,
    name: "Lawrence of Arabia",
    type: ['adventure'],
    imageUrl: "../../assets/img/movie7.jpg",
    body: "The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.",
    
  },
  {
    id: 7,
    name: "WALL·E",
    type: ['animation'],
    imageUrl: "../../assets/img/movie8.jpeg",
    body: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
    
  }
]; 

firstcard = "firstcard";
card = "card"


  constructor() {
    
   }

  ngOnInit(): void {
  }

  // displayIdAndHeader(index:number){
  //   console.log("content's id ", index);
  //   console.log("content's title ", this.movieList[index].name);
  // }

  filterMovieType(type:any, e:any){
    e.preventDefault();
    console.log(type);

    this.contentExist =false;
    this.contentDoesNotExist = false;

   let result = this.movieList.filter(function(item){
     return  item.name.toLocaleLowerCase().includes(type.toLocaleLowerCase());
   })
   console.log("result", result);
  result.length ? this.contentExist =true : this.contentDoesNotExist = true;
  }

}
