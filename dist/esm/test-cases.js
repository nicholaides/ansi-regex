var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/.pnpm/ansi-escapes@7.1.1/node_modules/ansi-escapes/base.js
var base_exports = {};
__export(base_exports, {
  ConEmu: () => ConEmu,
  beep: () => beep,
  clearScreen: () => clearScreen,
  clearTerminal: () => clearTerminal,
  clearViewport: () => clearViewport,
  cursorBackward: () => cursorBackward,
  cursorDown: () => cursorDown,
  cursorForward: () => cursorForward,
  cursorGetPosition: () => cursorGetPosition,
  cursorHide: () => cursorHide,
  cursorLeft: () => cursorLeft,
  cursorMove: () => cursorMove,
  cursorNextLine: () => cursorNextLine,
  cursorPrevLine: () => cursorPrevLine,
  cursorRestorePosition: () => cursorRestorePosition,
  cursorSavePosition: () => cursorSavePosition,
  cursorShow: () => cursorShow,
  cursorTo: () => cursorTo,
  cursorUp: () => cursorUp,
  enterAlternativeScreen: () => enterAlternativeScreen,
  eraseDown: () => eraseDown,
  eraseEndLine: () => eraseEndLine,
  eraseLine: () => eraseLine,
  eraseLines: () => eraseLines,
  eraseScreen: () => eraseScreen,
  eraseStartLine: () => eraseStartLine,
  eraseUp: () => eraseUp,
  exitAlternativeScreen: () => exitAlternativeScreen,
  iTerm: () => iTerm,
  image: () => image,
  link: () => link,
  scrollDown: () => scrollDown,
  scrollUp: () => scrollUp,
  setCwd: () => setCwd
});
import process from "node:process";

// node_modules/.pnpm/environment@1.1.0/node_modules/environment/index.js
var isBrowser = globalThis.window?.document !== void 0;
var isNode = globalThis.process?.versions?.node !== void 0;
var isBun = globalThis.process?.versions?.bun !== void 0;
var isDeno = globalThis.Deno?.version?.deno !== void 0;
var isElectron = globalThis.process?.versions?.electron !== void 0;
var isJsDom = globalThis.navigator?.userAgent?.includes("jsdom") === true;
var isWebWorker = typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var isDedicatedWorker = typeof DedicatedWorkerGlobalScope !== "undefined" && globalThis instanceof DedicatedWorkerGlobalScope;
var isSharedWorker = typeof SharedWorkerGlobalScope !== "undefined" && globalThis instanceof SharedWorkerGlobalScope;
var isServiceWorker = typeof ServiceWorkerGlobalScope !== "undefined" && globalThis instanceof ServiceWorkerGlobalScope;
var platform = globalThis.navigator?.userAgentData?.platform;
var isMacOs = platform === "macOS" || globalThis.navigator?.platform === "MacIntel" || globalThis.navigator?.userAgent?.includes(" Mac ") === true || globalThis.process?.platform === "darwin";
var isWindows = platform === "Windows" || globalThis.navigator?.platform === "Win32" || globalThis.process?.platform === "win32";
var isLinux = platform === "Linux" || globalThis.navigator?.platform?.startsWith("Linux") === true || globalThis.navigator?.userAgent?.includes(" Linux ") === true || globalThis.process?.platform === "linux";
var isIos = platform === "iOS" || globalThis.navigator?.platform === "MacIntel" && globalThis.navigator?.maxTouchPoints > 1 || /iPad|iPhone|iPod/.test(globalThis.navigator?.platform);
var isAndroid = platform === "Android" || globalThis.navigator?.platform === "Android" || globalThis.navigator?.userAgent?.includes(" Android ") === true || globalThis.process?.platform === "android";

// node_modules/.pnpm/ansi-escapes@7.1.1/node_modules/ansi-escapes/base.js
var ESC = "\x1B[";
var OSC = "\x1B]";
var BEL = "\x07";
var SEP = ";";
var isTerminalApp = !isBrowser && process.env.TERM_PROGRAM === "Apple_Terminal";
var isWindows2 = !isBrowser && process.platform === "win32";
var cwdFunction = isBrowser ? () => {
  throw new Error("`process.cwd()` only works in Node.js, not the browser.");
} : process.cwd;
var cursorTo = /* @__PURE__ */ __name((x, y) => {
  if (typeof x !== "number") {
    throw new TypeError("The `x` argument is required");
  }
  if (typeof y !== "number") {
    return ESC + (x + 1) + "G";
  }
  return ESC + (y + 1) + SEP + (x + 1) + "H";
}, "cursorTo");
var cursorMove = /* @__PURE__ */ __name((x, y) => {
  if (typeof x !== "number") {
    throw new TypeError("The `x` argument is required");
  }
  let returnValue = "";
  if (x < 0) {
    returnValue += ESC + -x + "D";
  } else if (x > 0) {
    returnValue += ESC + x + "C";
  }
  if (y < 0) {
    returnValue += ESC + -y + "A";
  } else if (y > 0) {
    returnValue += ESC + y + "B";
  }
  return returnValue;
}, "cursorMove");
var cursorUp = /* @__PURE__ */ __name((count = 1) => ESC + count + "A", "cursorUp");
var cursorDown = /* @__PURE__ */ __name((count = 1) => ESC + count + "B", "cursorDown");
var cursorForward = /* @__PURE__ */ __name((count = 1) => ESC + count + "C", "cursorForward");
var cursorBackward = /* @__PURE__ */ __name((count = 1) => ESC + count + "D", "cursorBackward");
var cursorLeft = ESC + "G";
var cursorSavePosition = isTerminalApp ? "\x1B7" : ESC + "s";
var cursorRestorePosition = isTerminalApp ? "\x1B8" : ESC + "u";
var cursorGetPosition = ESC + "6n";
var cursorNextLine = ESC + "E";
var cursorPrevLine = ESC + "F";
var cursorHide = ESC + "?25l";
var cursorShow = ESC + "?25h";
var eraseLines = /* @__PURE__ */ __name((count) => {
  let clear = "";
  for (let i = 0; i < count; i++) {
    clear += eraseLine + (i < count - 1 ? cursorUp() : "");
  }
  if (count) {
    clear += cursorLeft;
  }
  return clear;
}, "eraseLines");
var eraseEndLine = ESC + "K";
var eraseStartLine = ESC + "1K";
var eraseLine = ESC + "2K";
var eraseDown = ESC + "J";
var eraseUp = ESC + "1J";
var eraseScreen = ESC + "2J";
var scrollUp = ESC + "S";
var scrollDown = ESC + "T";
var clearScreen = "\x1Bc";
var clearViewport = `${eraseScreen}${ESC}H`;
var clearTerminal = isWindows2 ? `${eraseScreen}${ESC}0f` : `${eraseScreen}${ESC}3J${ESC}H`;
var enterAlternativeScreen = ESC + "?1049h";
var exitAlternativeScreen = ESC + "?1049l";
var beep = BEL;
var link = /* @__PURE__ */ __name((text, url) => [
  OSC,
  "8",
  SEP,
  SEP,
  url,
  BEL,
  text,
  OSC,
  "8",
  SEP,
  SEP,
  BEL
].join(""), "link");
var image = /* @__PURE__ */ __name((data, options = {}) => {
  let returnValue = `${OSC}1337;File=inline=1`;
  if (options.width) {
    returnValue += `;width=${options.width}`;
  }
  if (options.height) {
    returnValue += `;height=${options.height}`;
  }
  if (options.preserveAspectRatio === false) {
    returnValue += ";preserveAspectRatio=0";
  }
  const imageBuffer = Buffer.from(data);
  return returnValue + `;size=${imageBuffer.byteLength}:` + imageBuffer.toString("base64") + BEL;
}, "image");
var iTerm = {
  setCwd: /* @__PURE__ */ __name((cwd = cwdFunction()) => `${OSC}50;CurrentDir=${cwd}${BEL}`, "setCwd"),
  annotation(message, options = {}) {
    let returnValue = `${OSC}1337;`;
    const hasX = options.x !== void 0;
    const hasY = options.y !== void 0;
    if ((hasX || hasY) && !(hasX && hasY && options.length !== void 0)) {
      throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
    }
    message = message.replaceAll("|", "");
    returnValue += options.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=";
    if (options.length > 0) {
      returnValue += (hasX ? [message, options.length, options.x, options.y] : [options.length, message]).join("|");
    } else {
      returnValue += message;
    }
    return returnValue + BEL;
  }
};
var ConEmu = {
  setCwd: /* @__PURE__ */ __name((cwd = cwdFunction()) => `${OSC}9;9;${cwd}${BEL}`, "setCwd")
};
var setCwd = /* @__PURE__ */ __name((cwd = cwdFunction()) => iTerm.setCwd(cwd) + ConEmu.setCwd(cwd), "setCwd");

// unplugin-civet:/Users/mike/Projects/ansi-regex/fixtures/ansi-codes.civet.jsx
var ansi_codes_civet_exports = {};
__export(ansi_codes_civet_exports, {
  ansiCompatible: () => ansiCompatible,
  commonCodes: () => commonCodes,
  otherCode: () => otherCode,
  urxvt: () => urxvt,
  vt52Codes: () => vt52Codes
});
var vt52Codes = /* @__PURE__ */ new Map([
  ["A", ["Cursor up"]],
  ["B", ["Cursor down"]],
  ["C", ["Cursor right"]],
  ["D", ["Cursor left"]],
  ["H", ["Cursor to home"]],
  ["I", ["Reverse line feed"]],
  ["J", ["Erase to end of screen"]],
  ["K", ["Erase to end of line"]],
  ["S", ["Scroll up"]],
  ["T", ["Scroll down"]],
  ["Z", ["Identify"]],
  ["=", ["Enter alternate keypad mode"]],
  [">", ["Exit alternate keypad mode"]],
  ["1", ["Graphics processor on"]],
  ["2", ["Graphics processor off"]],
  ["<", ["Enter ANSI mode"]],
  ["s", ["Cursor save"]],
  ["u", ["Cursor restore"]]
]);
var ansiCompatible = /* @__PURE__ */ new Map([
  ["[176A", ["Cursor up Pn lines"]],
  ["[176B", ["Cursor down Pn lines"]],
  ["[176C", ["Cursor forward Pn characters (right)"]],
  ["[176D", ["Cursor backward Pn characters (left)"]],
  ["[176;176H", ["Direct cursor addressing, where Pl is line#, Pc is column#"]],
  ["[176;176f", ["Direct cursor addressing, where Pl is line#, Pc is column#"]],
  ["7", ["Save cursor and attributes"]],
  ["8", ["Restore cursor and attributes"]],
  ["#3", ["Change this line to double-height top half"]],
  ["#4", ["Change this line to double-height bottom half"]],
  ["#5", ["Change this line to single-width single-height"]],
  ["#6", ["Change this line to double-width single-height"]],
  ["[176;176;176;176;176;176;176m", ["Text Styles"]],
  ["[176;176;176;176;176;176;176q", ["Programmable LEDs"]],
  ["[K", ["Erase from cursor to end of line"]],
  ["[0K", ["Same"]],
  ["[1K", ["Erase from beginning of line to cursor"]],
  ["[2K", ["Erase line containing cursor"]],
  ["[J", ["Erase from cursor to end of screen"]],
  ["[0J", ["Same"]],
  ["[2J", ["Erase entire screen"]],
  ["[P", ["Delete character"]],
  ["[0P", ["Delete character (0P)"]],
  ["[2P", ["Delete 2 characters"]],
  ["(A", ["United Kingdom (UK) (Character Set G0)"]],
  [")A", ["United Kingdom (UK) (Character Set G1)"]],
  ["(B", ["United States (USASCII) (Character Set G0)"]],
  [")B", ["United States (USASCII) (Character Set G1)"]],
  ["(0", ["Special graphics/line drawing set (Character Set G0)"]],
  [")0", ["Special graphics/line drawing set (Character Set G1)"]],
  ["(1", ["Alternative character ROM (Character Set G0)"]],
  [")1", ["Alternative character ROM (Character Set G1)"]],
  ["(2", ["Alternative graphic ROM (Character Set G0)"]],
  [")2", ["Alternative graphic ROM (Character Set G1)"]],
  ["H", ["Set tab at current column"]],
  ["[g", ["Clear tab at current column"]],
  ["[0g", ["Same"]],
  ["[3g", ["Clear all tabs"]],
  ["[6n", ["Cursor position report"]],
  ["[176;176R", ["(response; Pl=line#; Pc=column#)"]],
  ["[5n", ["Status report"]],
  ["[c", ["(response; terminal Ok)"]],
  ["[0c", ["(response; teminal not Ok)"]],
  ["[?1;176c", ["response; where Ps is option present:"]],
  ["c", ["Causes power-up reset routine to be executed"]],
  ["#8", ['Fill screen with "E"']],
  ["[2;176y", ["Invoke Test(s), where Ps is a decimal computed by adding the numbers of the desired tests to be executed"]]
]);
var commonCodes = /* @__PURE__ */ new Map([
  ["[176A", ["Move cursor up n lines", "CUU"]],
  ["[176B", ["Move cursor down n lines", "CUD"]],
  ["[176C", ["Move cursor right n lines", "CUF"]],
  ["[176D", ["Move cursor left n lines", "CUB"]],
  ["[176;176H", ["Move cursor to screen location v,h", "CUP"]],
  ["[176;176f", ["Move cursor to screen location v,h", "CUP"]],
  ["[176;176r", ["Set top and bottom lines of a window", "DECSTBM"]],
  ["[176;176R", ["Response: cursor is at v,h", "CPR"]],
  ["[?1;1760c", ["Response: terminal type code n", "DA"]],
  ["[20h", ["Set new line mode", "LMN"]],
  ["[?1h", ["Set cursor key to application", "DECCKM"]],
  ["[?3h", ["Set number of columns to 132", "DECCOLM"]],
  ["[?4h", ["Set smooth scrolling", "DECSCLM"]],
  ["[?5h", ["Set reverse video on screen", "DECSCNM"]],
  ["[?6h", ["Set origin to relative", "DECOM"]],
  ["[?7h", ["Set auto-wrap mode", "DECAWM"]],
  ["[?8h", ["Set auto-repeat mode", "DECARM"]],
  ["[?9h", ["Set interlacing mode", "DECINLM"]],
  ["[20l", ["Set line feed mode", "LMN"]],
  ["[?1l", ["Set cursor key to cursor", "DECCKM"]],
  ["[?2l", ["Set VT52 (versus ANSI)", "DECANM"]],
  ["[?3l", ["Set number of columns to 80", "DECCOLM"]],
  ["[?4l", ["Set jump scrolling", "DECSCLM"]],
  ["[?5l", ["Set normal video on screen", "DECSCNM"]],
  ["[?6l", ["Set origin to absolute", "DECOM"]],
  ["[?7l", ["Reset auto-wrap mode", "DECAWM"]],
  ["[?8l", ["Reset auto-repeat mode", "DECARM"]],
  ["[?9l", ["Reset interlacing mode", "DECINLM"]],
  ["N", ["Set single shift 2", "SS2"]],
  ["O", ["Set single shift 3", "SS3"]],
  ["[m", ["Turn off character attributes", "SGR0"]],
  ["[0m", ["Turn off character attributes", "SGR0"]],
  ["[1m", ["Turn bold mode on", "SGR1"]],
  ["[2m", ["Turn low intensity mode on", "SGR2"]],
  ["[4m", ["Turn underline mode on", "SGR4"]],
  ["[5m", ["Turn blinking mode on", "SGR5"]],
  ["[7m", ["Turn reverse video on", "SGR7"]],
  ["[8m", ["Turn invisible text mode on", "SGR8"]],
  ["[9m", ["strikethrough on", "--"]],
  ["[22m", ["bold off (see below)", "--"]],
  ["[23m", ["italics off", "--"]],
  ["[24m", ["underline off", "--"]],
  ["[27m", ["inverse off", "--"]],
  ["[29m", ["strikethrough off", "--"]],
  ["[30m", ["set foreground color to black", "--"]],
  ["[31m", ["set foreground color to red", "--"]],
  ["[32m", ["set foreground color to green", "--"]],
  ["[33m", ["set foreground color to yellow", "--"]],
  ["[34m", ["set foreground color to blue", "--"]],
  ["[35m", ["set foreground color to magenta (purple)", "--"]],
  ["[36m", ["set foreground color to cyan", "--"]],
  ["[37m", ["set foreground color to white", "--"]],
  ["[39m", ["set foreground color to default (white)", "--"]],
  ["[40m", ["set background color to black", "--"]],
  ["[41m", ["set background color to red", "--"]],
  ["[42m", ["set background color to green", "--"]],
  ["[43m", ["set background color to yellow", "--"]],
  ["[44m", ["set background color to blue", "--"]],
  ["[45m", ["set background color to magenta (purple)", "--"]],
  ["[46m", ["set background color to cyan", "--"]],
  ["[47m", ["set background color to white", "--"]],
  ["[49m", ["set background color to default (black)", "--"]],
  ["[H", ["Move cursor to upper left corner", "cursorhome"]],
  ["[;H", ["Move cursor to upper left corner", "cursorhome"]],
  ["[f", ["Move cursor to upper left corner", "hvhome"]],
  ["[;f", ["Move cursor to upper left corner", "hvhome"]],
  ["M", ["Move/scroll window down one line", "RI"]],
  ["E", ["Move to next line", "NEL"]],
  ["H", ["Set a tab at the current column", "HTS"]],
  ["[g", ["Clear a tab at the current column", "TBC"]],
  ["[0g", ["Clear a tab at the current column", "TBC"]],
  ["[3g", ["Clear all tabs", "TBC"]],
  ["[K", ["Clear line from cursor right", "EL0"]],
  ["[0K", ["Clear line from cursor right", "EL0"]],
  ["[1K", ["Clear line from cursor left", "EL1"]],
  ["[2K", ["Clear entire line", "EL2"]],
  ["[J", ["Clear screen from cursor down", "ED0"]],
  ["[0J", ["Clear screen from cursor down", "ED0"]],
  ["[1J", ["Clear screen from cursor up", "ED1"]],
  ["[2J", ["Clear entire screen", "ED2"]],
  ["[c", ["Identify what terminal type", "DA"]],
  ["[0c", ["Identify what terminal type (another)", "DA"]],
  ["c", ["Reset terminal to initial state", "RIS"]],
  ["[2;1y", ["Confidence power up test", "DECTST"]],
  ["[2;2y", ["Confidence loopback test", "DECTST"]],
  ["[2;9y", ["Repeat power up test", "DECTST"]],
  ["[2;10y", ["Repeat loopback test", "DECTST"]],
  ["[0q", ["Turn off all four leds", "DECLL0"]],
  ["[1q", ["Turn on LED #1", "DECLL1"]],
  ["[2q", ["Turn on LED #2", "DECLL2"]],
  ["[3q", ["Turn on LED #3", "DECLL3"]],
  ["[4q", ["Turn on LED #4", "DECLL4"]]
]);
var otherCode = /* @__PURE__ */ new Map([
  ["7", ["Save cursor position and attributes", "DECSC"]],
  ["8", ["Restore cursor position and attributes", "DECSC"]],
  ["=", ["Set alternate keypad mode", "DECKPAM"]],
  [">", ["Set numeric keypad mode", "DECKPNM"]],
  ["(A", ["Set United Kingdom G0 character set", "setukg0"]],
  [")A", ["Set United Kingdom G1 character set", "setukg1"]],
  ["(B", ["Set United States G0 character set", "setusg0"]],
  [")B", ["Set United States G1 character set", "setusg1"]],
  ["(0", ["Set G0 special chars. & line set", "setspecg0"]],
  [")0", ["Set G1 special chars. & line set", "setspecg1"]],
  ["(1", ["Set G0 alternate character ROM", "setaltg0"]],
  [")1", ["Set G1 alternate character ROM", "setaltg1"]],
  ["(2", ["Set G0 alt char ROM and spec. graphics", "setaltspecg0"]],
  [")2", ["Set G1 alt char ROM and spec. graphics", "setaltspecg1"]],
  ["#3", ["Double-height letters, top half", "DECDHL"]],
  ["#4", ["Double-height letters, bottom half", "DECDHL"]],
  ["#5", ["Single width, single height letters", "DECSWL"]],
  ["#6", ["Double width, single height letters", "DECDWL"]],
  ["#8", ["Screen alignment display", "DECALN"]],
  ["5n", ["Device status report", "DSR"]],
  ["0n", ["Response: terminal is OK", "DSR"]],
  ["3n", ["Response: terminal is not OK", "DSR"]],
  ["6n", ["Get cursor position", "DSR"]]
]);
var urxvt = /* @__PURE__ */ new Map([
  ["[5~", ["URxvt.keysym.Prior"]],
  ["[6~", ["URxvt.keysym.Next"]],
  ["[7~", ["URxvt.keysym.Home"]],
  ["[8~", ["URxvt.keysym.End"]],
  ["[A", ["URxvt.keysym.Up"]],
  ["[B", ["URxvt.keysym.Down"]],
  ["[C", ["URxvt.keysym.Right"]],
  ["[D", ["URxvt.keysym.Left"]],
  ["[3;5;5t", ["URxvt.keysym.C-M-q"]],
  ["[3;5;606t", ["URxvt.keysym.C-M-y"]],
  ["[3;1605;5t", ["URxvt.keysym.C-M-e"]],
  ["[3;1605;606t", ["URxvt.keysym.C-M-c"]],
  ["]710;9x15bold\x07", ["URxvt.keysym.font"]]
]);

// unplugin-civet:/Users/mike/Projects/ansi-regex/test-cases.civet.jsx
function generateTestCases() {
  let ret;
  const testCases = [];
  ret = testCases;
  function push(assertion) {
    return testCases.at(-1).assertions.push(assertion);
  }
  __name(push, "push");
  function matches(input, ...expectedOutput) {
    return push({ assertion: "matches", input, expectedOutput });
  }
  __name(matches, "matches");
  function splits(input, ...expectedOutput) {
    return push({ assertion: "splits", input, expectedOutput });
  }
  __name(splits, "splits");
  function matchesAllOf(input) {
    return matches(input, input);
  }
  __name(matchesAllOf, "matchesAllOf");
  function doesNotMatch(input) {
    return matches(input, ...[]);
  }
  __name(doesNotMatch, "doesNotMatch");
  function testCase(name, fn) {
    testCases.push({ testCase: name, assertions: [] });
    return fn();
  }
  __name(testCase, "testCase");
  testCase("match ansi code in a string", () => {
    matches(
      "foo\x1B[4mcake\x1B[0m",
      "\x1B[4m",
      "\x1B[0m"
    );
    splits(
      "foo\x1B[4mcake\x1B[0m",
      "foo",
      "\x1B[4m",
      "cake",
      "\x1B[0m"
    );
    matches(
      "\x1B[4mcake\x1B[0m",
      "\x1B[4m",
      "\x1B[0m"
    );
    matches(
      "foo\x1B[4mcake\x1B[0m",
      "\x1B[4m",
      "\x1B[0m"
    );
    matches(
      "\x1B[0m\x1B[4m\x1B[42m\x1B[31mfoo\x1B[39m\x1B[49m\x1B[24mfoo\x1B[0m",
      "\x1B[0m",
      "\x1B[4m",
      "\x1B[42m",
      "\x1B[31m",
      "\x1B[39m",
      "\x1B[49m",
      "\x1B[24m",
      "\x1B[0m"
    );
    return matches(
      "foo\x1B[mfoo",
      "\x1B[m"
    );
  });
  testCase("match ansi code from ls command", () => {
    return matches(
      "\x1B[00;38;5;244m\x1B[m\x1B[00;38;5;33mfoo\x1B[0m",
      "\x1B[00;38;5;244m",
      "\x1B[m",
      "\x1B[00;38;5;33m",
      "\x1B[0m"
    );
  });
  testCase("match reset;setfg;setbg;italics;strike;underline sequence in a string", () => {
    matches(
      "\x1B[0;33;49;3;9;4mbar\x1B[0m",
      "\x1B[0;33;49;3;9;4m",
      "\x1B[0m"
    );
    return matches("foo\x1B[0;33;49;3;9;4mbar", "\x1B[0;33;49;3;9;4m");
  });
  testCase("match clear tabs sequence in a string", () => {
    return matches("foo\x1B[0gbar", "\x1B[0g");
  });
  testCase("match clear line from cursor right in a string", () => {
    return matches("foo\x1B[Kbar", "\x1B[K");
  });
  testCase("match clear screen in a string", () => {
    return matches("foo\x1B[2Jbar", "\x1B[2J");
  });
  testCase("match terminal link", () => {
    const results = [];
    for (const ST of ["\x07", "\x1B\\", "\x9C"]) {
      matches(
        `\x1B]8;k=v;https://example-a.com/?a_b=1&c=2#tit%20le${ST}click\x1B]8;;${ST}`,
        `\x1B]8;k=v;https://example-a.com/?a_b=1&c=2#tit%20le${ST}`,
        `\x1B]8;;${ST}`
      );
      results.push(matches(
        `\x1B]8;;mailto:no-reply@mail.com${ST}mail-me\x1B]8;;${ST}`,
        `\x1B]8;;mailto:no-reply@mail.com${ST}`,
        `\x1B]8;;${ST}`
      ));
    }
    ;
    return results;
  });
  testCase("match terminal link with plus in URL", () => {
    const results1 = [];
    for (const ST of ["\x07", "\x1B\\", "\x9C"]) {
      const seqOpen = `\x1B]8;;https://www.example.com/?q=hello+world${ST}`;
      const seqClose = `\x1B]8;;${ST}`;
      const value = `${seqOpen}hello${seqClose}`;
      results1.push(splits(value, seqOpen, "hello", seqClose));
    }
    ;
    return results1;
  });
  testCase('match "change icon name and window title" in string', () => {
    return matches(
      "\x1B]0;sg@tota:~/git/\x07\x1B[01;32m[sg@tota\x1B[01;37m misc-tests\x1B[01;32m]$",
      "\x1B]0;sg@tota:~/git/\x07",
      "\x1B[01;32m",
      "\x1B[01;37m",
      "\x1B[01;32m"
    );
  });
  testCase("match colon-separated sequence arguments", () => {
    return matchesAllOf("\x1B[38:2:68:68:68:48:2:0:0:0m");
  });
  testCase("match colon-separated underline variants", () => {
    matchesAllOf("\x1B[4:0m");
    matchesAllOf("\x1B[4:1m");
    matchesAllOf("\x1B[4:2m");
    matchesAllOf("\x1B[4:3m");
    matchesAllOf("\x1B[4:4m");
    return matchesAllOf("\x1B[4:5m");
  });
  testCase("match colon-separated indexed color (38:5)", () => {
    return matchesAllOf("\x1B[38:5:123m");
  });
  testCase("match colon-separated indexed background color (48:5)", () => {
    return matchesAllOf("\x1B[48:5:200m");
  });
  testCase("match colon-separated underline color palette index (58:5)", () => {
    return matchesAllOf("\x1B[58:5:200m");
  });
  testCase("match colon-separated RGB colors (38:2::R:G:B and 48:2::R:G:B)", () => {
    matchesAllOf("\x1B[38:2::12:34:56m");
    return matchesAllOf("\x1B[48:2::200:201:202m");
  });
  testCase("match colon-separated underline color RGB (58:2::R:G:B)", () => {
    return matchesAllOf("\x1B[58:2::255:0:0m");
  });
  testCase("match colon-separated RGBA foreground/background (38:6, 48:6)", () => {
    matchesAllOf("\x1B[38:6::255:0:0:128m");
    return matchesAllOf("\x1B[48:6::0:0:0:64m");
  });
  testCase("colon-separated sequences should not overconsume", () => {
    const samples = [
      "\x1B[4:5m",
      "\x1B[38:5:123m",
      "\x1B[58:2::255:0:0m",
      "\x1B[38:2::12:34:56m",
      "\x1B[48:2::200:201:202m"
    ];
    const results2 = [];
    for (const inputString of samples) {
      results2.push(splits(inputString + "X", inputString, "X"));
    }
    ;
    return results2;
  });
  testCase("does not match bracketed text without ESC", () => {
    doesNotMatch("[38:2:68:68:68m");
    doesNotMatch("[4:5m");
    doesNotMatch("some [0m text");
    return doesNotMatch("plain [58:2::255:0:0m words");
  });
  testCase("does not match incomplete CSI", () => {
    return doesNotMatch("\x1B[");
  });
  testCase("does not match ESC followed by unsupported final", () => {
    return doesNotMatch("pre\\x1B`post");
  });
  const consumptionCharacters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+1234567890-=[]{};':"./>?,\\|`;
  function splitsWitoutOverconsumption(escapeCode, ...expectedSplitOutput) {
    if (!expectedSplitOutput.length) {
      expectedSplitOutput.push(escapeCode);
    }
    const results3 = [];
    for (const chr of consumptionCharacters) {
      results3.push(splits(escapeCode + chr, ...expectedSplitOutput, chr));
    }
    ;
    return results3;
  }
  __name(splitsWitoutOverconsumption, "splitsWitoutOverconsumption");
  for (const [codeSetKey, codeSetValue] of Object.entries(ansi_codes_civet_exports)) {
    for (const [code, codeInfo] of codeSetValue) {
      if (!!(typeof code === "string" && /\d$/.test(code))) continue;
      const ecode = `\x1B${code}`;
      testCase(`${codeSetKey} - ${code} \u2192 ${codeInfo[0]}`, () => {
        const string = `hel${ecode}lo`;
        matches(string, ecode);
        return splits(string, "hel", ecode, "lo");
      });
      testCase(`${codeSetKey} - ${code} should not overconsume`, () => {
        return splitsWitoutOverconsumption(ecode);
      });
    }
  }
  {
    const {
      cursorTo: cursorTo2,
      // takes 1 or 2 integer arguments
      cursorMove: cursorMove2,
      // takes 1 or 2 integer arguments
      eraseLines: eraseLines2,
      // takes 1 integer argument, generates multiple ansi codes
      // takes 1 integer argument
      cursorUp: cursorUp2,
      cursorDown: cursorDown2,
      cursorForward: cursorForward2,
      cursorBackward: cursorBackward2,
      // specific functions
      link: link2,
      image: image2,
      iTerm: iTerm2,
      ConEmu: ConEmu2,
      setCwd: setCwd2,
      // strings that are multiple ansi codes
      clearViewport: clearViewport2,
      // ignored because it's a different set of basic codes on different termainals and not worth testing
      clearTerminal: _clearTerminal_IGNORE_ME,
      // static codes that are just strings
      ...ansiEscapeStaticCodes
    } = base_exports;
    for (const [key, escapeCode] of Object.entries(ansiEscapeStaticCodes)) {
      testCase(`ansi-escapes ${key} (string)`, () => {
        return splitsWitoutOverconsumption(escapeCode);
      });
    }
    testCase("ansi-escapes clearViewport", () => {
      return splitsWitoutOverconsumption(
        clearViewport2,
        "\x1B[2J",
        "\x1B[H"
      );
    });
    testCase("ansi-escapes cursorMove", () => {
      return splitsWitoutOverconsumption(
        cursorMove2(12, 34),
        "\x1B[12C",
        "\x1B[34B"
      );
    });
    testCase("ansi-escapes eraseLines", () => {
      return splitsWitoutOverconsumption(
        eraseLines2(2),
        "\x1B[2K",
        "\x1B[1A",
        "\x1B[2K",
        "\x1B[G"
      );
    });
    testCase("ansi-escapes cursorTo (arity (1, 2])", () => {
      splitsWitoutOverconsumption(cursorTo2(1));
      splitsWitoutOverconsumption(cursorTo2(23));
      splitsWitoutOverconsumption(cursorTo2(4, 56));
      splitsWitoutOverconsumption(cursorTo2(45, 5));
      return splitsWitoutOverconsumption(cursorTo2(78, 90));
    });
    let ref;
    for (const name in ref = {
      cursorUp: cursorUp2,
      cursorDown: cursorDown2,
      cursorForward: cursorForward2,
      cursorBackward: cursorBackward2
    }) {
      const fn = ref[name];
      testCase(`ansi-escapes ${name} (arity 1)`, () => {
        splitsWitoutOverconsumption(fn(1));
        return splitsWitoutOverconsumption(fn(23));
      });
    }
    testCase("ansi-escapes link", () => {
      return splitsWitoutOverconsumption(
        link2("click here", "http://example.com"),
        "\x1B]8;;http://example.com\x07",
        "click here",
        "\x1B]8;;\x07"
      );
    });
    testCase("ansi-escapes image", () => {
      const buffer = Buffer.from([1, 3, 3, 7]);
      splitsWitoutOverconsumption(image2(buffer));
      splitsWitoutOverconsumption(image2(buffer, { width: 234, height: 1, preserveAspectRatio: true }));
      return splitsWitoutOverconsumption(image2(buffer, { width: "auto", height: "auto", preserveAspectRatio: false }));
    });
    testCase("ansi-escapes setCwd (which is juse iTerm.setCwd followed by ConEmu.setCwd)", () => {
      splitsWitoutOverconsumption(setCwd2("~/Desktop"), iTerm2.setCwd("~/Desktop"), ConEmu2.setCwd("~/Desktop"));
      return splitsWitoutOverconsumption(setCwd2("/My Projects"), iTerm2.setCwd("/My Projects"), ConEmu2.setCwd("/My Projects"));
    });
    testCase("ansi-escapes ConEmu setCwd", () => {
      splitsWitoutOverconsumption(ConEmu2.setCwd("~/Desktop"));
      return splitsWitoutOverconsumption(ConEmu2.setCwd("/My Projects"));
    });
    testCase("ansi-escapes iTerm setCwd", () => {
      splitsWitoutOverconsumption(iTerm2.setCwd("~/Desktop"));
      return splitsWitoutOverconsumption(iTerm2.setCwd("/My Projects"));
    });
    testCase("ansi-escapes iTerm annotation", () => {
      splitsWitoutOverconsumption(iTerm2.annotation("Some annotation message"));
      return splitsWitoutOverconsumption(iTerm2.annotation("Some annotation message", { x: 1, y: 2, length: 40, isHidden: true }));
    });
  }
  return ret;
}
__name(generateTestCases, "generateTestCases");
export {
  generateTestCases
};
