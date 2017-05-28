import { trigger, state, animate, AnimationEntryMetadata, transition, style } from '@angular/core';

// export const fadeInAnimation: AnimationEntryMetadata =
//     trigger('routeAnimation', [
//         state('*',
//             style({ opacity: 1 })
//         ),
//         transition(':enter', [
//             style({ opacity: 0 }),
//             animate('0.5s ease-in')
//         ]),
//     ]);
export const fadeInAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        position: ''
      })
    ),
    transition(':enter', [
      style({
        opacity: 0
      }),
      animate('0.3s ease-in')
    ]),
  ]);