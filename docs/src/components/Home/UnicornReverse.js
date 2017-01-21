import React from 'react';
import Anime from 'react-anime';

function UnicornReverse (props) {
  return (
    <Anime easing="linear" opacity={[0, 1]} translateX={[191, 0]} delay={(e, i) => 2000} duration={(e, i) => 750}>
      <svg height="205px" width="191px" version="1.1" viewBox="0 0 191 205">
      	<defs/>
      	<g id="Page-1" fill="none" stroke="none" strokeWidth="1">
      		<g id="Home" transform="translate(-1249.000000, -448.000000)">
      			<g id="UniRev" transform="translate(1249.000000, 448.000000)">
      				<polygon id="Path-12" fill="#FF9EF8" points="41 94 42 108 24 162 38 182 60 152 73 151 53 181 73 174 89 136 105 153 81 205 191 205 190 103 172 91 190 69 172 69 191 49 159 56 158 49 174 44 163 34 166 18 161 24 143 20 119 27 139 16 107 9 94 20 103 1 77 11 69 35 65 7 48 43 48 25 37 53 37 63 23 62 42 81 19 81"/>
      				<polygon id="Path-13" fill="#D0FFFE" points="41 94 65 85 83 50 86 24 101 44 128 47 172 91 190 69 172 69 191 49 159 56 158 49 174 44 163 34 166 18 161 24 143 20 119 27 139 16 107 9 94 20 104 0 77 10 69 35 65 7 48 43 48 25 36 54 37 63 23 62 41 81 19 81"/>
      				<polygon id="Path-8" fill="#8574FF" points="50 71 1 23 60 62"/>
      				<polygon id="Path-7" fill="#000000" points="0 94 0 104 5 104 5 109 8 109 8 112 38 112 38 107 44 107 44 104 52 104 52 108 58 108 58 114 86 114 86 110 93 110 93 107 98 107 98 103 103 103 103 99 121 99 120 96"/>
      				<rect height="4" id="Rectangle-3" width="5" fill="#8574FF" x="26" y="98"/>
      				<rect height="5" id="Rectangle-4" width="3" fill="#8574FF" x="35" y="98"/>
      				<rect height="5" id="Rectangle" width="4" fill="#8574FF" x="22" y="103"/>
      				<rect height="5" id="Rectangle-2" width="4" fill="#8574FF" x="31" y="103"/>
      				<rect height="4" id="Rectangle-5" width="3" fill="#8574FF" x="78" y="97"/>
      				<rect height="3" id="Rectangle-6" width="4" fill="#8574FF" x="74" y="102"/>
      				<rect height="3" id="Rectangle-7" width="4" fill="#8574FF" x="70" y="107"/>
      				<rect height="3" id="Rectangle-8" width="6" fill="#8574FF" x="78" y="107"/>
      				<rect height="5" id="Rectangle-9" width="3" fill="#8574FF" x="83" y="102"/>
      				<rect height="5" id="Rectangle-10" width="3" fill="#8574FF" x="86" y="97"/>
      			</g>
      		</g>
      	</g>
      </svg>
    </Anime>
  );
}

export default UnicornReverse;
