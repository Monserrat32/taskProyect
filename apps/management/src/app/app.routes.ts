import { Route } from '@angular/router';

export const appRoutes: Route[] = [


    {
        path:'dashboard',
        loadComponent:()=> import ('./dashboard/dashboard.component'),
        children:[

            {
                path:'plataform',
                title:'Plataform Launch',
                loadComponent: () => import('./dashboard/pages/platform-launch/platform-launch.component'),
            },
            {
                path:'marketing',
                title:'Marketing Plan',
                loadComponent: () => import('./dashboard/pages/marketing-plan/marketing-plan.component'),
            },
            {
                path:'road-map',
                title:'Road Map',
                loadComponent: () => import('./dashboard/pages/road-map/road-map.component'),
            }
        ]
    },
    {
        path:'',
        redirectTo: '/dashboard/plataform',
        pathMatch: 'full'
    }
];
