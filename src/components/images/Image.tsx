// import React, { useEffect } from 'react';
// import LazyLoad, { forceVisible } from 'react-lazyload';

// import styled from 'styled-components';
// // import { images } from '../../utils/images';

// interface Styles {
//   display?: string;
//   margin?: string;
//   padding?: string;
//   maxWidth?: string;
//   width?: string;
//   height?: string;
// }

// interface Props extends Styles {
//   src: string;
// }

// const Img = styled.img<Styles>`
//   display: block;
//   margin: ${({ margin }) => margin || ''};
//   padding: ${({ padding }) => padding || ''};
//   max-width: ${({ maxWidth }) => maxWidth || ''};
//   width: ${({ width }) => width || '100%'};
//   height: ${({ height }) => height || '100%'};
// `;

// // export const Image: React.FC<Props> = ({ src }) => {
// //   useEffect(() => {
// //     forceVisible();
// //   }, []);

// //   // return !images ? null : (
// //   //   <LazyLoad once>
// //   //     <picture>{/* <Img src={images[src]} alt={images[src]} /> */}</picture>
// //   //   </LazyLoad>
// //   // );
// // };
