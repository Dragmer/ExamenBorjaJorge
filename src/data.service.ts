import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/index";

@Injectable()
export class DataService {

  private menssageSource = new BehaviorSubject<string>("mensaje de prueba");
  currentMessage = this.menssageSource.asObservable()
  constructor(){

  }
  changeMessage (message : string) {
    this.menssageSource.next(message)
  }
}
