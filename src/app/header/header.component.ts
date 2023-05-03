import {Component, OnInit} from '@angular/core';
import {Category} from "../models";
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';
import {CategoryService} from "../category.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  categories: Category[];
  SearchTitle: string;
  constructor(private router: Router, private categoryService: CategoryService) {
    this.categories = [
      {ID: 1, Name: 'Спортивные костюмы'},
      {ID: 2, Name: 'Рашгарды'},
      {ID: 3, Name: 'Футболки'},
      {ID: 4, Name: 'Кроссовки'},
    ];
    this.SearchTitle = "";

  }

  ResetTitle(){
    this.SearchTitle = "";
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>{
      this.router.navigate([uri, this.SearchTitle])
      this.ResetTitle();
  });
  }

  ngOnInit(): void {

  }

  getCategories(){
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
