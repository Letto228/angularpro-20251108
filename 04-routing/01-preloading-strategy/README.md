# Preloading strategy

`Preloading strategy` дает возможность предзагружать чанки до их непосредственного использования в приложении

Стратегии преоставляемые Angular:

- `NoPreloading` (*default*) - не предзагружает чанки

- `PreloadAllModules` - предзагружает все чанки не используемые пользователем при запуске приложения.

## Custom preloading strategy

Шалон создания кастомной стратегии:

```ts
@Injectable({
 providedIn: 'root',
})
export class CustomPreloading implements PreloadingStrategy {
    // `preload` вызывается для каждого лениво загружаемого пути, кроме того, что уже загружен
    preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
        if (...) {
            // если хотим предзагрузить чанк - возвращаем из метода результат вызова функции полученной во втором аргументе метода `preload` - `load()`
            return load();
        }

        // если предзагрузка не требуется - возвращаем фиктивный поток of(null) или EMPTY
        return of(null);
    }
}
```

> [!NOTE]
>
> Из `preload` метода нужно вернуть поток, соответсвенно логика предзагрузки может быть асинхронной и инкапсулироваться в потоке
>
> Шаблон:
>
> ```ts
> @Injectable({
>    providedIn: 'root',
> })
> export class CustomPreloading implements PreloadingStrategy {
>       readonly preloadPageService = inject(PreloadPageService);
>
>       // `preload` вызывается для каждого лениво загружаемого пути, кроме того, что уже загружен
>       preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
>           return this.preloadPageService.needPreload$(route.path).pipe(
>               take(1),
>               switchMap(needPreload => needPreload ? load() : EMPTY,
>           );
>       }
>  }
>  ```
