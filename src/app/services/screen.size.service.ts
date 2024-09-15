import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { breakpoinst } from '../consts/breakpoints';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
    isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([`(max-width: ${breakpoinst.smallScreenSize})`])
    .pipe(map((result) => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) {}
}
