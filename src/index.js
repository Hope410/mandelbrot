const { createColors, rgbHex } = require('color-map');

const canvas = document.getElementById('cnvs');
const width = 500;
const height = 500;

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
      
const scalefactor = 0.001;

const 
  pmin = p_center - scalefactor, 
  pmax = p_center + scalefactor, 
  qmin = q_center - scalefactor, 
  qmax = q_center + scalefactor,
  max_iterations = 255,
  infinity_border = 10;

const repeat = (a, n, b = []) => n > 0 ? repeat(a, n - 1, b.concat(a(n))) : b;

const map = repeat((i) => createColors([0, 0, 128 + i*8], [255, 16*15 - i*15, 0], 16), 16);
// console.log(map)

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

        drawDot(i, j, rgbHex(map[q]));
      }else{
        drawDot(i, j, `rgba(0, 0, 0)`);
      }
    })
  });
}

render();

// let z = 0;
// for(let i = 0; i < 3; i++){
//   z = math.add(math.square(z), math.complex(2, i));
// }

// console.log(z)