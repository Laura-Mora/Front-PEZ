import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'suge-asignaturas',
    loadChildren: () => import('./suge-asignaturas/suge-asignaturas.module').then( m => m.SugeAsignaturasPageModule)
  },
  {
    path: 'busqueda-asignaturas',
    children:[
      {
        path:"",
        loadChildren: () => 
          import('./busqueda-asignaturas/busqueda-asignaturas.module').then( 
            m => m.BusquedaAsignaturasPageModule)
      },
      {
        path:":asignaturaID",
        loadChildren: () => 
          import('./busqueda-asignaturas/datos-asignatura/datos-asignatura.module').then( 
            m => m.DatosAsignaturaPageModule)
      }
    ]
  },
  {
    path: 'form-perso-asign',
    loadChildren: () => import('./form-perso-asign/form-perso-asign.module').then( m => m.FormPersoAsignPageModule)
  },
  {
    path: 'informe-avance',
    loadChildren: () => import('./informe-avance/informe-avance.module').then( m => m.InformeAvancePageModule)
  },
  {
    path: 'home-directores',
    loadChildren: () => import('./home-directores/home-directores.module').then( m => m.HomeDirectoresPageModule)
  },
  {
    path: 'reporte-asign',
    loadChildren: () => import('./reporte-asign/reporte-asign.module').then( m => m.ReporteAsignPageModule)
  },
  {
    path: 'parametrizar',
    loadChildren: () => import('./parametrizar/parametrizar.module').then( m => m.ParametrizarPageModule)
  },
  {
    path: 'opiniones-asignatura',
    children:[
      {
        path:":asignaturaID",
        loadChildren: () => import('./opiniones-asignatura/opiniones-asignatura.module').then( m => m.OpinionesAsignaturaPageModule)
    
      }
     ] 
  },
  {
    path: 'falta-programa',
    loadChildren: () => import('./falta-programa/falta-programa.module').then( m => m.FaltaProgramaPageModule)
  },
  {
    path: 'reporte-final',
    children: [
      {
        path:":programaSeleccionado",
        loadChildren: () => import('./reporte-final/reporte-final.module').then( m => m.ReporteFinalPageModule)
      }
    ]
    
  },
  {
    path: 'avance-progra-suge',
    children: [
      {
        path:":programaID",
        loadChildren: () => import('./avance-progra-suge/avance-progra-suge.module').then( m => m.AvancePrograSugePageModule)
      }
      
    ]
    
  },
  {
    path: 'sub-menu-avance-programa',
    loadChildren: () => import('./sub-menu-avance-programa/sub-menu-avance-programa.module').then( m => m.SubMenuAvanceProgramaPageModule)
  },
  {
    path: 'sub-menu-programa-suge',
    children: [
      {
        path:":programaID",
        loadChildren: () => import('./sub-menu-programa-suge/sub-menu-programa-suge.module').then( m => m.SubMenuProgramaSugePageModule)
      }
    ]
  },
  {
    path: 'falta-programa-suge',
    children: [
      {
        path:":programaID",
        loadChildren: () => import('./falta-programa-suge/falta-programa-suge.module').then( m => m.FaltaProgramaSugePageModule)
      }
    ]
  },
  {
    path: 'asignaturas-comun',
    children: [
      {
        path:":programaID",
        loadChildren: () => import('./asignaturas-comun/asignaturas-comun.module').then( m => m.AsignaturasComunPageModule)
      }
    ]
    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
