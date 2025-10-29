var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// unplugin-civet:/Users/mike/Projects/ansi-regex/index.civet.jsx
function ansiRegex({ onlyFirst = false } = {}) {
  const pattern = /(?:\x1B][\s\S]*?(?:\x07|\x1B\\|\x9C))|(?:[\x1B\x9B][\\[()#;?]*(?:\d{1,4}(?:[;:]\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~])/;
  return new RegExp(pattern, onlyFirst ? void 0 : "g");
}
__name(ansiRegex, "ansiRegex");
export {
  ansiRegex as default
};
