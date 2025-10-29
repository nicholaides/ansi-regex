var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// unplugin-civet:/Users/mike/Projects/ansi-regex/index.civet.jsx
var index_civet_exports = {};
__export(index_civet_exports, {
  default: () => ansiRegex
});
module.exports = __toCommonJS(index_civet_exports);
function ansiRegex({ onlyFirst = false } = {}) {
  const pattern = /(?:\x1B][\s\S]*?(?:\x07|\x1B\\|\x9C))|(?:[\x1B\x9B][\\[()#;?]*(?:\d{1,4}(?:[;:]\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~])/;
  return new RegExp(pattern, onlyFirst ? void 0 : "g");
}
__name(ansiRegex, "ansiRegex");
