import { createColors, rgbHex } from 'color-map';

import Vue from 'vue';

new Vue({
  data: {
    width: 1000,
    height: 1000,
    canvas: null,
    ctx: null,
    
    p_center: -0.793301078177363,
    q_center: 0.16093721735804,
    scalefactor: 1,

    max_iterations: 255,
    infinity_border: 10,
    
    status: 'Рендерится..',
  },
  
  computed: {
    pmin(){ return this.p_center - 1/this.scalefactor}, 
    pmax(){ return this.p_center + 1/this.scalefactor}, 
    qmin(){ return this.q_center - 1/this.scalefactor}, 
    qmax(){ return this.q_center + 1/this.scalefactor},
  },
  mounted(){    
    this.canvas = this.$refs.canvas;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    
    this.ctx = this.canvas.getContext('2d');
    
    setTimeout(this.render, 300);
  },
  
  methods: {
    render(){
      this.status = 'Рендерится..';
      
      const {
        pmin, pmax, qmin, qmax, width, height,
        
        max_iterations, infinity_border,
      } = this;
      this.image = math.zeros(width, height);
      
      console.log(0,0,width,height);
      
      const prange = this.linspace(pmin, pmax, width);
      const qrange = this.linspace(qmin, qmax, height);

      prange.forEach((p, ip) => {
        qrange.forEach((q, iq) => {
          const c = [p, q];
          // console.log(c)
          let z = [0, 0];

          for(let k = 0; k < max_iterations; k++){
            z = this.complexAdd(this.complexMultiply(z, z), c);

            if(this.abs(z) > infinity_border){
              // console.log(c);
              this.image._data[ip][iq] = k;
              break;
            }
          }

        })
      })

      // image = math.transpose(image);
      // console.log(image);
      this.image._data.forEach((p, i) => {
        p.forEach((q, j) => {
          this.drawDot(i, j, rgbHex(this.getColour(q, max_iterations)));
        })
      });
      
      this.status = `Готово!`;
    },
    drawDot(x, y, color) {
      this.ctx.fillStyle = color;
      this.ctx.fillRect(x, y, 1, 1);
    },
    getColour(n) {
      if (n < this.max_iterations && n > 0) {
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
      }else{
        return [0,0,0];
      }
    },
    linspace(min, max, fractions){
      const range = max - min;
      return [...new Array(fractions)].map((_, i) => 
        +math.format(
          min + (range/fractions)*i, {precision: 14}
        )
      );
    },
    abs(c){
      return Math.sqrt(c[0]*c[0] + c[1]*c[1])
    },
    complexAdd(c1, c2){
      return [c1[0] + c2[0], c1[1] + c2[1]];
    },
    complexMultiply(c1, c2){
      return [c1[0]*c2[0] - c1[1]*c2[1], c1[0]*c2[1] + c1[1]*c2[0]];
    }
  }
}).$mount('#app')

// let z = 0;
// for(let i = 0; i < 3; i++){
//   z = math.add(math.square(z), math.complex(2, i));
// }

// console.log(z)