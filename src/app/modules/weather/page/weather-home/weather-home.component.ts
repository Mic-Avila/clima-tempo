import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class weatherHomeComponent implements OnInit{

  private readonly destroy$: Subject<void> = new Subject
  cidade = 'Belo Horizonte'
  dadosDaBusca!: WeatherDatas
  iconeBusca = faMagnifyingGlass

  constructor(private weatherService: WeatherService){}


  ngOnInit(): void {
    this.buscaDados(this.cidade)
  }

  buscaDados(cidade: string){
     this.weatherService.buscaDadosAPI(cidade)
     .pipe(takeUntil(this.destroy$))
     .subscribe({
      next: (resposta)=> {
        resposta && (this.dadosDaBusca = resposta)
        console.log(this.dadosDaBusca)
      },
      error:(error) => {console.log(error)}
     })
  }

  onSubmit(){
    this.buscaDados(this.cidade)
    this.cidade = ''
  }

  ngOnDestroy(): void {
  this.destroy$.next()
  this.destroy$.complete()
  }
}
