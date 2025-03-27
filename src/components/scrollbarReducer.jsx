// import Scrollbar, {ScrollbarPlugin} from 'smooth-scrollbar';

// const options = {
//     damping: 0.1,
//     thumbMinSize: 20,
//     renderByPixels: true,
//     continuousScrolling: true,
//     delegateTo: document,
//     plugins: {
//         disableScroll: {
//             direction: 'x',
//         },
//     }
// }

// class ModalPlugin extends ScrollbarPlugin {
//     static pluginName = 'modal';

//     static defaultOptions = {
//         open: false,
//     };

//     transformDelta(delta, e) {
//         return this.options.open ? {x: 0, y: 0} : delta;
//     }
// }

// class DisableScrollPlugin extends ScrollbarPlugin {
//     static pluginName = 'disableScroll';

//     static defaultOptions = {
//         direction: 'x',
//     };

//     transformDelta(delta, e) {
//         if (this.options.direction) {
//             delta[this.options.direction] = 0;
//         }

//         return {...delta};
//     }
// }

// Scrollbar.use(ModalPlugin,);
// Scrollbar.use(DisableScrollPlugin);

// export const initialState = {
//     options: options,
// }

// const scrollbarReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INIT':
//             if (action.container) {
//                 state[action.scrollbar] = Scrollbar.init(action.container, action.options || options)
//                 state[action.scrollbar].track.xAxis.element.remove()
//             }
//             return {...state}

//         default:
//             return {...state}
//     }
// }
// export default scrollbarReducer
