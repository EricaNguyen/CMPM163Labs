uniform vec3 colorC;

varying vec3 vUv;

void main() {
  gl_FragColor = vec4(colorC*vUv,1.0);
}
