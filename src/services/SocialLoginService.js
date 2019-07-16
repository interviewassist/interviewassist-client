function injectGoogleLogin(document) {
  const head = document.querySelector("head");

  var script = document.createElement("SCRIPT");
  script.setAttribute("src", "https://apis.google.com/js/platform.js");
  script.setAttribute("defer", "");

  head.appendChild(script);
}

export { injectGoogleLogin };
