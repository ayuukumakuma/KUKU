<template>
  <div>
    <div v-show="shape === 'circle'" :style="`fill: ${color}`">
      <svg
        xml:space="preserve"
        width="100"
        height="100"
        viewBox="237.5 196.5 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M287.8 199a47.6 47.6 0 1 1 0 95.2 47.6 47.6 0 0 1 0-95.2z"
          style="
            opacity: 1;
            fill-opacity: 1;
            fill-rule: nonzero;
            stroke: #212121;
            stroke-width: 4.762;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-dashoffset: 0;
            stroke-opacity: 1;
          "
          vector-effect="non-scaling-stroke"
        />
      </svg>
    </div>
    <div v-show="shape === 'drop'" :style="`fill: ${color}`">
      <svg
        xml:space="preserve"
        style="width: 110px; height: 110px; opacity: 1"
        viewBox="0 20 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M258 32.2C196.4 106.5 83.8 212.6 83.8 338c0 87 78 157.4 174.3 157.4 96.2 0 174.2-70.5 174.2-157.4 0-125.3-112.6-231.5-174.3-305.8z"
          style="
            fill-opacity: 1;
            stroke: #212121;
            stroke-width: 24.6958;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
      </svg>
    </div>
    <div v-show="shape === 'heart'" :style="`fill: ${color}`">
      <svg width="100" height="110" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M70.4 18.9c-8 0-15.5 3.8-20.5 9.8-4.9-6-12.5-9.8-20.4-9.8-14 0-25 11.3-25 25.9C4.6 62.5 20 77 43.5 99l6.5 6.2 6.6-6.2C80 77 95.3 62.5 95.3 44.8c0-14.6-11-26-25-26z"
          style="
            fill-opacity: 1;
            stroke: #212121;
            stroke-width: 4.9974;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-dashoffset: 0;
            stroke-opacity: 1;
          "
        />
      </svg>
    </div>
    <div v-show="shape === 'hexagon'" :style="`fill: ${color}`">
      <svg
        xml:space="preserve"
        width="100"
        height="100"
        viewBox="170.5 157 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m244 163.4 23.3 43.8L244 251h-46.5l-23.4-44 23.3-43.7z"
          style="
            opacity: 1;
            fill-opacity: 1;
            fill-rule: nonzero;
            stroke: #212121;
            stroke-width: 4.5174;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-dashoffset: 0;
            stroke-opacity: 1;
          "
          vector-effect="non-scaling-stroke"
        />
      </svg>
    </div>
    <div v-show="shape === 'pentagon'" :style="`fill: ${color}`">
      <svg
        xml:space="preserve"
        width="100"
        height="100"
        viewBox="157.5 164 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m165.2 201.8 42.1-32.5 42.2 32.5-16 52.7h-52.2z"
          style="
            opacity: 1;
            fill-opacity: 1;
            fill-rule: nonzero;
            stroke: #212121;
            stroke-width: 4.2406;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-dashoffset: 0;
            stroke-opacity: 1;
          "
          vector-effect="non-scaling-stroke"
        />
      </svg>
    </div>
    <div v-show="shape === 'rhombus'" :style="`fill: ${color}`">
      <svg
        xml:space="preserve"
        width="110"
        height="110"
        viewBox="148 130.3 110 110"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          style="
            opacity: 1;
            fill-opacity: 1;
            stroke: #212121;
            stroke-width: 8;
            stroke-linecap: square;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
            paint-order: stroke markers fill;
          "
          d="m162.3 185.7 40.5-50.6 41.3 49.8-40.6 50.7z"
        />
      </svg>
    </div>
    <div v-show="shape === 'square'" :style="`fill: ${color}`">
      <svg
        xml:space="preserve"
        width="100"
        height="100"
        viewBox="97 175 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M106.2 183.2h82.2v83.2h-82.2Z"
          style="
            opacity: 1;
            fill-opacity: 1;
            fill-rule: nonzero;
            stroke: #212121;
            stroke-width: 4.13;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-dashoffset: 0;
            stroke-opacity: 1;
          "
          vector-effect="non-scaling-stroke"
        />
      </svg>
    </div>
    <div v-show="shape === 'star'" :style="`fill: ${color}`">
      <svg
        xml:space="preserve"
        width="100"
        height="100"
        viewBox="209.8 152 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m259.5 155 15 28.6 32.6 4.2-23.4 24 7 32.2-31.3-14.9-31.4 15 7-32.3-23-24 32.3-4.3z"
          style="
            opacity: 1;
            fill-opacity: 1;
            fill-rule: nonzero;
            stroke: #212121;
            stroke-width: 5.0365;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-dashoffset: 0;
            stroke-opacity: 1;
          "
          vector-effect="non-scaling-stroke"
        />
      </svg>
    </div>
    <div v-show="shape === 'triangle'" :style="`fill: ${color}`">
      <svg
        xml:space="preserve"
        width="110"
        height="100"
        viewBox="180 219 111.1 101"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m260.9 267.3 25.6 45.3H184l25.7-45.3 25.5-45.4z"
          style="
            opacity: 1;
            fill-opacity: 1;
            fill-rule: nonzero;
            stroke: #212121;
            stroke-width: 4.8645;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-dashoffset: 0;
            stroke-opacity: 1;
          "
          vector-effect="non-scaling-stroke"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shape: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  },
}
</script>
