import {Component} from "@angular/core"
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent {
  user = {};

  constructor(private http: Http) {
  }

  private saveUser() {
    if(this.hasError(this.user)){
      alert("Error, Ingrese todos los datos");
    }
    else{
      const headers = new Headers({"Content-Type":"application/json"});
      this.http.post(
          "https://user-registration-rv.herokuapp.com//",
          this.user,
          {headers:headers}
        ).subscribe(data => {
          if(data.ok){
            alert("Usuario registrado exitosamente");
          }
        },
          err => {
            if(err.status == 302)
              alert("El usuario ya se encuentra registrado");
            else
              alert("Existe un error, revise los datos ingresados");
        }
      );
    }

  }

  private hasError(obj) {
    let arrObj = Object.values(obj);
    if (arrObj.length != 10){
      return true;
    }
    arrObj.forEach(function(value){
        if (value == ""){
          return true;
        }
    });
    return false;
  }
}
