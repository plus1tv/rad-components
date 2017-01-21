
import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import Anime from 'react-anime';

const styles = StyleSheet.create({
  consolation: {
    display: 'flex',
    height: 91,
    width: '100%',
  }
});

function Consolation (props) {
  return (
    <Anime easing="linear" opacity={[0, 1]} delay={(e, i) => 1500}>
      <svg className={css(styles.consolation)} version="1.1" viewBox="0 0 393 91">
      	<defs/>
      	<g id="Page-1" fill="none" stroke="none" strokeWidth="1">
      		<g id="Home" fill="#D0FFFE" transform="translate(-115.000000, -67.000000)">
      			<g id="Constellation" transform="translate(311.500000, 112.500000) scale(-1, 1) translate(-311.500000, -112.500000) translate(115.000000, 67.000000)">
              <Anime loop={true} direction={"alternate"} easing="linear" opacity={[0, 1]} duration={(e, i) => 1000}>
        				<polygon id="Path-10" points="5.14285714 0 12.2142857 0 12.2142857 6.23333333 18 6.23333333 18 10.7666667 12.2142857 10.7666667 12.2142857 17 5.14285714 17 5.14285714 10.7666667 0 10.7666667 0 6.23333333 5.14285714 6.23333333"/>
              </Anime>
              <Anime loop={true} direction={"alternate"} easing="linear" opacity={[0, 1]} delay={(e, i) => 500} duration={(e, i) => 1000}>
                <polygon id="Path-11" points="63 21 55 20 60 25 57 30 63 28 67 34 67 27 72 25 67 22 67 17"/>
              </Anime>
              <Anime loop={true} direction={"alternate"} easing="linear" opacity={[0, 1]} delay={(e, i) => 1000} duration={(e, i) => 1000}>
        				<polygon id="Path-14" points="18 71 23 79 18 87 13 77"/>
              </Anime>
              <Anime loop={true} direction={"alternate"} easing="linear" opacity={[0, 1]} delay={(e, i) => 1500} duration={(e, i) => 1000}>
                <polygon id="Path-10" points="159.142857 70 166.214286 70 166.214286 76.2333333 172 76.2333333 172 80.7666667 166.214286 80.7666667 166.214286 87 159.142857 87 159.142857 80.7666667 154 80.7666667 154 76.2333333 159.142857 76.2333333"/>
              </Anime>
              <Anime loop={true} direction={"alternate"} easing="linear" opacity={[0, 1]} delay={(e, i) => 0} duration={(e, i) => 1000}>
            	   <polygon id="Path-11" points="212 13 204 12 209 17 206 22 212 20 216 26 216 19 221 17 216 14 216 9"/>
               </Anime>
              <Anime loop={true} direction={"alternate"} easing="linear" opacity={[0, 1]} delay={(e, i) => 500} duration={(e, i) => 1000}>
                 <polygon id="Path-11" points="132 57 124 56 129 61 126 66 132 64 136 70 136 63 141 61 136 58 136 53"/>
               </Anime>
              <Anime loop={true} direction={"alternate"} easing="linear" opacity={[0, 1]} delay={(e, i) => 1000} duration={(e, i) => 1000}>
                <polygon id="Path-14" points="127 1 132 9 127 17 122 7"/>
              </Anime>
              <Anime loop={true} direction={"alternate"} easing="linear" opacity={[0, 1]} delay={(e, i) => 1500} duration={(e, i) => 1000}>
        				<polygon id="Path-10" points="257.142857 4 264.214286 4 264.214286 10.2333333 270 10.2333333 270 14.7666667 264.214286 14.7666667 264.214286 21 257.142857 21 257.142857 14.7666667 252 14.7666667 252 10.2333333 257.142857 10.2333333"/>
              </Anime>
              <Anime loop={true} direction={"alternate"} easing="linear" opacity={[0, 1]} delay={(e, i) => 0} duration={(e, i) => 1000}>
                <polygon id="Path-11" points="315 25 307 24 312 29 309 34 315 32 319 38 319 31 324 29 319 26 319 21"/>
              </Anime>
              <Anime loop={true} direction={"alternate"} easing="linear" opacity={[0, 1]} delay={(e, i) => 500} duration={(e, i) => 1000}>
        				<polygon id="Path-14" points="270 75 275 83 270 91 265 81"/>
              </Anime>
              <Anime loop={true} direction={"alternate"} easing="linear" opacity={[0, 1]} delay={(e, i) => 1000} duration={(e, i) => 1000}>
        				<polygon id="Path-11" points="384 61 376 60 381 65 378 70 384 68 388 74 388 67 393 65 388 62 388 57"/>
              </Anime>
              <Anime loop={true} direction={"alternate"} easing="linear" opacity={[0, 1]} delay={(e, i) => 1500} duration={(e, i) => 1000}>
        				<polygon id="Path-14" points="379 5 384 13 379 21 374 11"/>
              </Anime>
      			</g>
      		</g>
      	</g>
      </svg>
    </Anime>
  );
}

export default Consolation;
