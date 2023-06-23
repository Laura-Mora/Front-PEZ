import { Injectable } from '@angular/core';
import { NetService } from '../Utils/net.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Usuario } from '../Model/Usuario/usuario';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Programa } from '../Model/Programa/programa';
import { HttpHeaders } from '@angular/common/http';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  USER = "user";
  TOKEN = "token"

  constructor(
    private net: NetService,
    private http: HttpClient
  ) { }

  loginPost(url: string, msg: { username: string, password: string }): Observable<HttpResponse<Usuario>> {
    const formData = new FormData();
    formData.append('username', msg.username);
    formData.append('password', msg.password);
  
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
  
    const respuesta = this.http.post(
      url,
      formData,
      {
        withCredentials: true,
        observe: 'response',
        headers: headers
      }
    );
  
    return respuesta as Observable<HttpResponse<Usuario>>;
  }

  login(username: string, password: string) {
    const url = `${environment.baseUrl}/usuario/login`;
    console.log(username);
    console.log(password);
    return this.loginPost(url,
      {
        "username": username,
        "password": password
      }
    );
  }

  generateUniqueId(): number {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 9000) + 1000; // Genera un número aleatorio de 4 dígitos
  
    return timestamp + random;
  }
  
  
  register(
    nombre: string,
    email: string,
    password: string,
    programas: number[],
    tipo: string
  ): Observable<HttpResponse<Usuario>> {
    const url = `${environment.baseUrl}/usuario/signup`;
    const id = this.generateUniqueId();
  
    const headers = new HttpHeaders().set('Content-Type', 'application/json'); // Configurar el encabezado
  
    const data = {
      id: id,
      nombre: nombre,
      correo: email,
      contrasenia: password,
      id_programa: programas,
      tipo: tipo
    };
  
    console.log(headers);
    console.log(JSON.stringify(data));
  
    return this.http.post<Usuario>(url, data, { headers: headers, observe: 'response' });
  }
  

  findUser() {
    const url = `${environment.baseUrl}/user/current`;
    return this.net.get<Usuario>(url);
  }

  getUser(): Usuario | null {
    const userString: string | null = sessionStorage.getItem('user');
    if (userString !== null) {
      return JSON.parse(userString) as Usuario;
    }
    return null;
  }
  
  getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN);
  }

  updateUserSession(){
    
    const userString: string | null = sessionStorage.getItem('user');
    if (userString !== null) {
      const usuario = JSON.parse(userString) as Usuario;
      const id = usuario.id; 
      const url = `${environment.baseUrl}/usuario/${id}`;

      axios.get(url).then(response => {
      const usuario = response.data; // Aquí tienes el objeto de usuario retornado por el backend
      console.log(usuario);
      this.storeUser(usuario,this.TOKEN);
      // Aquí puedes realizar las operaciones necesarias con el usuario
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
  

  storeUser(u: Usuario, token: string) {
    sessionStorage.setItem('user', JSON.stringify(u));
    sessionStorage.setItem('token', token);
  }

  logout() {
    const user = this.getUser();
    if (user) {
      try {
        sessionStorage.removeItem("perso" + user.correo);
      } catch (error) {
        console.log("No se le borra el perfil de personalización");
      }
    }
    sessionStorage.removeItem(this.USER);
    sessionStorage.removeItem(this.TOKEN);
    return this.http.post(`${environment.baseUrl}/usuario/logout`, '', {
      withCredentials: true
    });
  }
  

  isAuthorized(allowedRoles: string[]): boolean {
    // check if the list of allowed roles is empty, if empty,
    // authorize the user to access the page
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }

    const user: Usuario | null = this.getUser();

    // console.log('object', allowedRoles);
    // console.log('usuario', user.roles);

    let valido = false;

    /*user.roles.forEach(
      (rol: string) => {
        if (allowedRoles.includes(rol)) {
          valido = true;
        }
      }
    )*/

    return valido;
  }
}


