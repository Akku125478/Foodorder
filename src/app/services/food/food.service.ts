import { Injectable } from '@angular/core';
import { Tag } from 'src/shared/models/Tag';
import { Food } from 'src/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodByTag(tag:string):Food[]{
    // return tag == 'All'?
    // this.getAll() :this.getAll().filter(food=>food.tags?.includes(tag))
    if(tag == 'All'){
      return this.getAll()
    }else{
      return this.getAll().filter(food=>food.tags?.includes(tag))
    }
  }

  getAllTag():Tag[]{
    return [
      {name:'All',count:14},
      {name:'FastFood',count:5},
      {name:'Pizza',count:2},
      {name:'Lunch',count:3},
      {name:'Dinner',count:2},
      {name:'Burger',count:1},
      {name:'Breakfast',count:1},
      {name:'SlowFood',count:1},
      

      
    ]
  }
  getAll():Food[]{
    return [
      {
        id:1,
        name:'Mayo Burger',
        cookTime:'10-20',
        price:80,
        favorite:false,
        origins:['USA','Italy'],
        star :4.5,
        imageUrl:"/assets/food-1.jpg",
        tags:['FastFood','Burger']
      },
      {
        id:2,
        name:'Chees Burger',
        cookTime:'20-30',
        price:100,
        favorite:false,
        origins:['USA','Mexico'],
        star :2,
        imageUrl:"/assets/food-2.jpg",
        tags:['FastFood','Burger']
      },
      {
        id:3,
        name:'Mashroom Pizza',
        cookTime:'25-30',
        price:300,
        favorite:false,
        origins:['Italy'],
        star :4.5,
        imageUrl:"/assets/food-3.jpg",
        tags:['FastFood','Pizza']
      },
      {
        id:4,
        name:'Burger Fries',
        cookTime:'20-30',
        price:150,
        favorite:true,
        origins:['Italy'],
        star :4.5,
        imageUrl:"/assets/food-4.jpg",
        tags:['FastFood','Lunch']
      },
      {
        id:5,
        name:'Pastaa',
        cookTime:'10-20',
        price:100,
        favorite:false,
        origins:['Italy','USA'],
        star :3,
        imageUrl:"/assets/food-5.jpg",
        tags:['Breakfast']
      },
      {
        id:6,
        name:'Chiken Curry',
        cookTime:'30-45',
        price:250,
        favorite:true,
        origins:['India','Afrika'],
        star :5,
        imageUrl:"/assets/food-6.jpg",
        tags:['Lunch','Dinner']
      },
      {
        id:7,
        name:'Chiken Tikka',
        cookTime:'20-35',
        price:160,
        favorite:false,
        origins:['India','USA'],
        star :4.5,
        imageUrl:"/assets/food-7.jpg",
        tags:['Lunch','SlowFood']
      },
      {
        id:8,
        name:'Meat & Fries',
        cookTime:'30-40',
        price:260,
        favorite:false,
        origins:['Italy','India'],
        star :3.5,
        imageUrl:"/assets/food-8.jpg",
        tags:['FastFood','Dinner']
      }
    ]
  }
}
