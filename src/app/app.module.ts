import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-tabset';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

import { appRoutes } from './routes';
import { CoreComponent } from './game/core/core.component';
import { BuildComponent } from './game/build/build.component';
import { ResearchComponent } from './game/research/research.component';
import { UnitsComponent } from './game/units/units.component';
import { ManufacturingComponent } from './game/manufacturing/manufacturing.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CoreComponent,
    BuildComponent,
    ResearchComponent,
    UnitsComponent,
    ManufacturingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes ),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
