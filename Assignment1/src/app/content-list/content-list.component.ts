import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  contentcard = "contentcard";
  firstcard = "firstcard";
  nodisplay = "nodisplay";
  displayblock = "displayblock"
  contentList = [{
    id: 1,
    title: "Self Design Crew Neck Casual Men Black, Grey Sweater",
    description: "Special PriceGet extra 20% off upto ₹50 on 1 item(s) (price inclusive of discount)",
    prize: "Rs 565",
    imgURL:  '../../assets/img/shirt.jpeg',
    type:  "",
    tags: ["S", "M", "L", "XL", "XXL"],
  },
{
  id: 2,
    title: "Crystal-01 Grey Sports,Walking,Training,Gym",
    description: "Special PriceGet extra 20% off upto ₹50 on 1 item(s) (price inclusive of discount)",
    prize: "Rs 1,249",
    imgURL:  '../../assets/img/shoe.jpeg',
    type: "" ,
    tags: ["S", "M", "L", "XL", "XXL"],
},
{
  id: 3,
    title: "Crystal-01 Grey  Anarkali Gown  (Pink)",
    description: "Special PriceGet extra 20% off upto ₹50 Partner OfferSign up for Flipkart",
    prize: "Rs 549",
    imgURL:  '../../assets/img/gown.jpeg',
    type:  "",
    tags: ["S", "M", "L", "XL", "XXL"],
},
{
  id: 4,
    title: "Full Sleeve Solid Men Casual Jacket",
    description: "Special PriceGet extra 34% off (price inclusive of discount)",
    prize: "804",
    imgURL:  "../../assets/img/shirt1.jpeg",
    type:  "",
    tags: ["S", "M", "L", "XL", "XXL"],
},
{
  id: 5,
    title: "Full Sleeve Solid Men Casual Jacket",
    description: "Special PriceGet extra 34% off (price inclusive of discount)",
    prize: "804",
    imgURL:  "../../assets/img/shirt2.jpeg",
    type:  "",
    tags: [],
},
]

  constructor() { }

  ngOnInit(): void {
  }

  imageClick(index:any){
    console.log("index", index, "header", this.contentList[index].title);
  }

}
