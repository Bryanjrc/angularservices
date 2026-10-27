import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-personas-api-component',
  standalone: false,
  styleUrl: './personas-api-component.css',
  templateUrl: './personas-api-component.html',
})
export class PersonasApiComponent implements OnInit {
  public personas!: Array<Persona>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicePersonas
  ){}
  async ngOnInit(): Promise<void> {
    // try{
    //   this.personas = await this._service.getPersonasAsync();
    //   this._cdr.detectChanges();
    // }catch(error){
    //   console.error("Error en el Api", error);
    // }


    // this._service.getPersonasPromise().then((response) => {
    //   this.personas = response;
    //   this._cdr.detectChanges();
    // }).catch((error:any) => {
    //   console.error("Error en el Api", error);
    // })

    //Si devolvemos un Observable con la petición, nos subscribimos
    //a su promesa
    this._service.getPersonas().subscribe({
      next: (response) => {
        this.personas = response;
        this._cdr.detectChanges();
      }, error: (error) => {
        console.error("Error en el Api", error);
      }
    })
  }
}
