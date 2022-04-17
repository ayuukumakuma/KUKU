<template>
  <div>
    <div v-show="shape === 'circle'" :style="`fill: ${color}`">
      <svg
        xml:space="preserve"
        width="120"
        height="120"
        viewBox="237.5 196.5 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M287.802 199.006a47.62 47.619 0 1 1 0 95.238 47.62 47.619 0 0 1 0-95.238z"
          style="
            opacity: 1;
            fill-opacity: 1;
            fill-rule: nonzero;
            stroke: #212121;
            stroke-width: 4.7619;
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
        width="120"
        height="120"
        style="width: 100px; height: 100px; opacity: 1"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M257.7 27c-55.6 74.3-157.3 180.4-157.3 305.8a157.3 157.3 0 1 0 314.7 0c0-125.3-101.7-231.4-157.4-305.7z"
          style="
            fill-opacity: 1;
            stroke: #212121;
            stroke-width: 23.47;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
        />
      </svg>
    </div>
    <div v-show="shape === 'heart'" :style="`fill: ${color}`">
      <svg
        xml:space="preserve"
        width="120"
        height="120"
        viewBox="197.2 157 101 101"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M75 0c13.8 0 25 13.5 25 30 0 45.9-50 68.8-50 70 0-1.2-50-24-50-70C0 13.4 11.3 0 25 0c13.9 0 25 9.1 25 25.7C50 9.1 61.1 0 75 0z"
          style="
            stroke: #212121;
            stroke-width: 5.05;
            stroke-dasharray: none;
            stroke-linecap: butt;
            stroke-dashoffset: 0;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            fill-rule: nonzero;
            opacity: 1;
            fill-opacity: 1;
            stroke-opacity: 1;
          "
          transform="translate(197.7 157.5)"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    </div>
    <div v-show="shape === 'hexagon'" :style="`fill: ${color}`">
      <svg
        xml:space="preserve"
        width="120"
        height="120"
        viewBox="170.5 157 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m245.1 158 24.6 49-24.6 49.2h-49L171.4 207 196 158z"
          style="
            opacity: 1;
            fill-opacity: 1;
            fill-rule: nonzero;
            stroke: #212121;
            stroke-width: 4.91;
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
        width="120"
        height="120"
        viewBox="157.5 157.5 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m158.9 195.8 48.7-37.2 48.7 37.2-18.6 60.3h-60.2z"
          style="
            opacity: 1;
            fill-opacity: 1;
            fill-rule: nonzero;
            stroke: #212121;
            stroke-width: 4.8724;
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
        width="120"
        height="120"
        viewBox="148 130.3 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          style="
            opacity: 1;
            fill-opacity: 1;
            stroke: #212121;
            stroke-width: 1.1746;
            stroke-linecap: square;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-opacity: 1;
            paint-order: stroke markers fill;
          "
          transform="matrix(.62612 -.77973 .63824 .76984 0 0)"
          d="M6.2 241H69v62.6H6.2z"
        />
      </svg>
    </div>
    <div v-show="shape === 'square'" :style="`fill: ${color}`">
      <svg
        xml:space="preserve"
        width="120"
        height="120"
        viewBox="97 175 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M99.4 177.4h95.3v95.3H99.4Z"
          style="
            opacity: 1;
            fill-opacity: 1;
            fill-rule: nonzero;
            stroke: #212121;
            stroke-width: 4.7619;
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
        width="120"
        height="120"
        viewBox="209.8 152 100 95"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M259.9 154.2 274 185l33.8 4-25 23.1 6.6 33.3-29.6-16.6-29.7 16.6 6.6-33.3-25-23 33.8-4.2z"
          style="
            opacity: 1;
            fill-opacity: 1;
            fill-rule: nonzero;
            stroke: #212121;
            stroke-width: 4.8025;
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
        width="120"
        height="120"
        viewBox="180 219 101 101"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m255 269.7 24.5 49h-97.9l24.5-49 24.4-49z"
          style="
            opacity: 1;
            fill-opacity: 1;
            fill-rule: nonzero;
            stroke: #212121;
            stroke-width: 4.9415;
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
