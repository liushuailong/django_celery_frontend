<template>
  <div id="d3">
    <div class="d3-example">
      <a href="https://observablehq.com/@d3/gallery" target="_blank">
        <h3>
          D3 示例
        </h3>
      </a>
    </div>
    <svg width="500" height="270">
      <g style="transform: translate(0, 10px)">
        <path :d="line" />
      </g>
    </svg>
  </div>
</template>

<script>
import * as d3 from 'd3';
export default {
  name: "d3",
  data() {
    return {
      data: [99, 71, 78, 25, 36, 92],
      line: '',
    };
  },
  mounted() {
    this.calculatePath();
  },
  methods: {
    getScales() {
      const x = d3.scaleTime().range([0, 430]);
      const y = d3.scaleLinear().range([210, 0]);
      d3.axisLeft().scale(x);
      d3.axisBottom().scale(y);
      x.domain(d3.extent(this.data, (d, i) => i));
      y.domain([0, d3.max(this.data, d => d)]);
      return { x, y };
    },
    calculatePath() {
      const scale = this.getScales();
      const path = d3.line()
        .x((d, i) => scale.x(i))
        .y(d => scale.y(d));
      this.line = path(this.data);
    },
  },
}
</script>

<style scoped>
  #d3 {
    width: 800px;
    margin: 10px auto;
  }
  svg {
    width: 100%;
    margin: 25px auto;

  }

  path {
    fill: none;
    stroke: #76BF8A;
    stroke-width: 3px
  }
  .d3-example {
    width:800px;
    margin: 20px auto 20px;
    text-align: center;
  }

</style>