import {Component} from "@angular/core"
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})

export class SearchComponent {
  user:any = null;
  show:boolean = false;
  constructor(private http: Http) {
  }

  private getUser(userId) {
    return this.http.get('https://user-registration-rv.herokuapp.com/'+userId)
                .map((res: Response) => res.json())
                .subscribe(data => {
                  if(data == null) {
                    this.show = false;
                    alert("Sin resultados");
                  } else{
                    this.show = true;
                    this.user = data;
                  }
              });
  }

}
