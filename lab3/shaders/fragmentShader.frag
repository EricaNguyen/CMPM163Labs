uniform vec3 colorA;
uniform vec3 colorB;
uniform vec3 colorC;

varying vec3 vUv;

void main() {
  //gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0); //rgba, return blue
  gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0);
  //gl_FragColor = vec4(mix(colorA+vUv.x, colorB+vUv.y, colorC*vUv.z), 1.0);
}
