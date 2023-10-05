import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contants } from 'src/app/constants/constants';
import { Tarjeta } from 'src/app/tarjeta/tarjeta';
import { SearchService } from '../search.service';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchKeyword: string = ""
  tarjetas:Tarjeta[]=[]
  constructor(private activatedRoute:ActivatedRoute,private searchService: SearchService) {

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.searchKeyword = params['titular']
      this.searchTarjeta()
    })

  }

  searchTarjeta() {
    this.searchService.getSeachMovie(this.searchKeyword).subscribe((res) => {
      this.tarjetas = res.tarjeta
      console.log(this.tarjetas);
    }, (error) => {
      SwalUtils.customMessageError('Error', "Error en la consulta")
      console.log(error);
      
    })
  }

  

}
