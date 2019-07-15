const { createColors, rgbHex } = require('color-map');

const canvas = document.getElementById('cnvs');
const width = 2500;
const height = 2500;

canvas.width = width;
canvas.height = height;

let image = math.zeros(width, height);
const ctx = canvas.getContext('2d');

const drawDot = (x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
};

const 
    p_center = -0.793191078177363, 
    q_center = 0.16093721735804;
      
const scalefactor = 2;

const 
  pmin = p_center - scalefactor, 
  pmax = p_center + scalefactor, 
  qmin = q_center - scalefactor, 
  qmax = q_center + scalefactor,
  max_iterations = 255,
  infinity_border = 10;

const repeat = (a, n, b = []) => n > 0 ? repeat(a, n - 1, b.concat(a(n))) : b;

const getColour = (n, max) => {
  if (n < max && n > 0) {
    let i = n % 16;
    let map = new Array(16);
    
    map[0] = [66, 30, 15];
    map[1] = [25, 7, 26];
    map[2] = [9, 1, 47];
    map[3] = [4, 4, 73];
    map[4] = [0, 7, 100];
    map[5] = [12, 44, 138];
    map[6] = [24, 82, 177];
    map[7] = [57, 125, 209];
    map[8] = [134, 181, 229];
    map[9] = [211, 236, 248];
    map[10] = [241, 233, 191];
    map[11] = [248, 201, 95];
    map[12] = [255, 170, 0];
    map[13] = [204, 128, 0];
    map[14] = [153, 87, 0];
    map[15] = [106, 52, 3];
    return map[i];
  }
}

const linspace = (min, max, fractions) => {
  const range = max - min;
  return [...new Array(fractions)].map((_, i) => 
    +math.format(
      math.evaluate(`${min} + (${range}/${fractions})*${i}`), {precision: 14}
    )
  );
}

const abs = c => math.sqrt(math.add(c.re*c.re, c.im*c.im));

// console.log(math)
// console.log(linspace(pmin, pmax, width))

const status = document.getElementById('status');

status.innerHTML = `Рендерится..<br>`;

const render = () => {
  const prange = linspace(pmin, pmax, width);
  const qrange = linspace(qmin, qmax, height);

  prange.forEach((p, ip) => {
    qrange.forEach((q, iq) => {
      const c = math.complex(p, q);
      // console.log(c)
      let z = 0;

      for(let k = 0; k < max_iterations; k++){
        z = math.add(math.pow(z, 2), c);

        if(abs(z) > infinity_border){
          // console.log(c);
          image._data[ip][iq] = k;
          break;
        }
      }
      
    })
  })

  // image = math.transpose(image);
  // console.log(image);
  image._data.forEach((p, i) => {
    p.forEach((q, j) => {
      if(q != 0){

        drawDot(i, j, rgbHex(getColour(q, max_iterations)));
      }else{
        drawDot(i, j, `rgba(0, 0, 0)`);
      }
    })
  });
  status.innerHTML = ``;
}

setTimeout(render, 300);

// let z = 0;
// for(let i = 0; i < 3; i++){
//   z = math.add(math.square(z), math.complex(2, i));
// }

// console.log(z)