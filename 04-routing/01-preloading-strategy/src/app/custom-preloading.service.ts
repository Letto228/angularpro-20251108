import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingService implements PreloadingStrategy {
  // `preload` вызывается для каждого лениво загружаемого пути, кроме того, что уже загружен
  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
      if (route.data && 'needPreload' in route.data) {
          // если хотим предзагрузить чанк - возвращаем из метода результат вызова функции полученной во втором аргументе метода `preload` - `load()`
          return load();
      }

      // если предзагрузка не требуется - возвращаем фиктивный поток of(null) или EMPTY
      return EMPTY;
  }
}