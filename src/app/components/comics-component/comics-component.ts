import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceComics } from '../../services/service.comic';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comics-component',
  standalone: false,
  styleUrl: './comics-component.css',
  templateUrl: './comics-component.html',
})
export class ComicsComponent implements OnInit {
  public arrayComics!: Array<Comic>;

  constructor(private _cdr: ChangeDetectorRef,
    private _serviceComics: ServiceComics) {}

    ngOnInit(): void {
      this._serviceComics.getComics().then(data => {
        this.arrayComics = data;
        this._cdr.detectChanges();
      })
    }

}

