import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'tech-moments',
    loadChildren: () =>
      import('./features/tech-moments/tech-moments.module').then(m => m.TechMomentsModule),
  },
  {
    path: 'af-events',
    loadChildren: () =>
      import('./features/af-events/af-events.module').then(m => m.AfEventsModule),
  },
  {
    path: 'lcm-tracker',
    loadChildren: () =>
      import('./features/lcm-tracker/lcm-tracker.module').then(m => m.LcmTrackerModule),
  },
  {
    path: 'coach-tips',
    loadChildren: () =>
      import('./features/coach-tips/coach-tips.module').then(m => m.CoachTipsModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
