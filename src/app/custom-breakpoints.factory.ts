import { BreakPoint, DEFAULT_BREAKPOINTS } from '@angular/flex-layout';
import { validateSuffixes } from '@angular/flex-layout';

const CUSTOM = {
  'xs'    : 'screen and (max-width: 399px)',
  'gt-xs' : 'screen and (min-width: 400px)',
  'sm'    : 'screen and (min-width: 400px) and (max-width: 799px)',
  'gt-sm' : 'screen and (min-width: 800x)',
  'md'    : 'screen and (min-width: 800px) and (max-width: 1239px)',
  'gt-md' : 'screen and (min-width: 1240px)',
  'lg'    : 'screen and (min-width: 1240px) and (max-width: 1497px)',
  'gt-lg' : 'screen and (min-width: 1480px)',
  'xl'    : 'screen and (min-width: 1480px) and (max-width: 5000px)',
};

function updateMediaQuery(it: BreakPoint) {
  const mq = CUSTOM[ it.alias ];
  if ( !!mq ) {
    it.mediaQuery = mq;
  }
  return it;
}

export function CUSTOM_BREAKPOINT_FACTORY() {
  return validateSuffixes(  DEFAULT_BREAKPOINTS.map(updateMediaQuery) );
}
