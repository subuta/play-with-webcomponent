// import FreeStyle from 'free-style';
// import postcssJs from 'postcss-js';
// import autoprefixer from 'autoprefixer';
//
// const Style = FreeStyle.create();
// const prefixer = postcssJs.sync([
//   autoprefixer
// ]);
//
// // Register a new style, to host
// Style.registerRule(':host', prefixer({
//   flex: '0 0 33.3%'
// }));
//
// var CardStyle = Style.registerStyle(prefixer({
//   border: '1px solid #ddd',
//   margin: 8,
//   height: 100,
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center'
// }));
//
// document.registerElement(
//   'x-card',
//   {
//     prototype: Object.create(
//       HTMLElement.prototype, {
//         createdCallback: {
//           value: function () {
//             console.log('here I am ^_^ ');
//             console.log('with content: ', this.textContent);
//             this.className = 'number-' + 1;
//             this.innerHTML = `
//             <h1>${this.textContent}</h1>
//             `
//           }
//         },
//         attachedCallback: {
//           value: function () {
//             console.log('live on DOM ;-) ');
//           }
//         },
//         detachedCallback: {
//           value: function () {
//             console.log('leaving the DOM :-( )');
//           }
//         },
//         attributeChangedCallback: {
//           value: function (name, previousValue, value) {
//             if (previousValue == null) {
//               console.log(
//                 'got a new attribute ', name,
//                 ' with value ', value
//               );
//             } else if (value == null) {
//               console.log(
//                 'somebody removed ', name,
//                 ' its value was ', previousValue
//               );
//             } else {
//               console.log(
//                 name,
//                 ' changed from ', previousValue,
//                 ' to ', value
//               );
//             }
//           }
//         }
//       })
//   }
// );
//
// skate.define('x-card', {
//   render(elem) {
//     // By separating the strings (and not using template literals or string
//     // concatenation) it ensures the strings are diffed indepenedently. If
//     // you select "Count" with your mouse, it will not deselect whenr endered.
//     return [
//       skate.h('style', Style.getStyles()),
//       skate.h('div', {class: CardStyle}, skate.h('slot'))
//     ];
//   }
// });
