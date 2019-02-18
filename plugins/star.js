export default {
  methods: {
    initStar(target) {
      const canvas = target;
      const ctx = canvas.getContext('2d');
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      this.createStar(ctx, width, height, 200);
      this.timer = setInterval(() => {
        this.draw(ctx);
        this.blink(width, height);
      }, 200);
    },
    createStar(ctx, width, height, amount) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.stars = this.getStars(amount);
    },
    getStars(amount) {
      let stars = []
      while (amount--) {
        stars.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          r: Math.random() + 0.6
        })
      }
      return stars;
    },
    draw(ctx) {
      const {
        width,
        height
      } = this;
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = '#fff'
      this.stars.forEach(star => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI)
        ctx.fill()
      });
    },
    blink(width, height) {
      this.stars = this.stars.map((star, idx) => {
        let sign = Math.random() > 0.5 ? 1 : -1
        star.r += sign * 0.2
        if (star.r < 0) {
          // star.r = -star.r
          star.r = 0
        } else if (star.r > 1) {
          star.r -= 0.2
        } else if (star.r == 0) {
          star.x = Math.random() * width;
          star.y = Math.random() * height;
        }
        return star;
      })
    },
  },
}
