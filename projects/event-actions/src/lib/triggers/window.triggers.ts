import * as Actions from '../actions';

export default function(window: Window, store, eventNames: string[]) {
  if (eventNames.includes('online')) {
    window.addEventListener('online', ev => store.dispatch({ type: Actions.WINDOW_ONLINE, payload: ev }));
  }
  if (eventNames.includes('offline')) {
    window.addEventListener('offline', ev => store.dispatch({ type: Actions.WINDOW_OFFLINE, payload: ev }));
  }
  //   if(eventNames.includes('orientationchange'))  window.addEventListener('orientationchange', ev => store.dispatch({type: Actions.WINDOW_ORIENTATION_CHANGE, payload: ev}));
  //   window.addEventListener('pagehide', ev => store.dispatch({type: '', payload: ev}));
  //   window.addEventListener('pageshow', ev => store.dispatch({type: '', payload: ev}));
  //   window.addEventListener('resize', ev => store.dispatch({type: '', payload: ev}));
  //   window.addEventListener('scroll', ev => store.dispatch({type: '', payload: ev}));
  //   window.addEventListener('touchcancel', ev => store.dispatch({type: '', payload: ev}));
  //   window.addEventListener('touchend', ev => store.dispatch({type: '', payload: ev}));
  //   window.addEventListener('touchmove', ev => store.dispatch({type: '', payload: ev}));
  //   window.addEventListener('touchstart', ev => store.dispatch({type: '', payload: ev}));
  //   window.addEventListener('vrdisplayactivate', ev => store.dispatch({type: '', payload: ev}));
  //   window.addEventListener('vrdisplayblur', ev => store.dispatch({type: '', payload: ev}));
  //   window.addEventListener('vrdisplayconnect', ev => store.dispatch({type: '', payload: ev}));
  //   window.addEventListener('vrdisplaydeactivate', ev => store.dispatch({type: '', payload: ev}));
  //   window.addEventListener('vrdisplaydisconnect', ev => store.dispatch({type: '', payload: ev}));
  //   window.addEventListener('vrdisplayfocus', ev => store.dispatch({type: '', payload: ev}));
  //   window.addEventListener('vrdisplaypointerrestricted', ev => store.dispatch({type: '', payload: ev}));
  //   window.addEventListener('vrdisplaypointerunrestricted', ev => store.dispatch({type: '', payload: ev}));
  //   window.addEventListener('vrdisplaypresentchange', ev => store.dispatch({type: '', payload: ev}));
  //   window.addEventListener('', ev => store.dispatch({type: '', payload: ev}));
  //   window.addEventListener('orientationchange', ev => store.dispatch({type: '', payload: ev}));
}
