const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", function(event) {
    $("#result").disabled = true;
});

$("#format").addEventListener("keyup", e => {
  const value = $("#format").value;
  if (validText(value)) {
    $("#result").value = trimText(convertToOneLine(value));
  } else {
    $("#result").value = "";
  }
});

const validText = text => {
  if (!text) {
    return false;
  }
  if (typeof text !== "string") {
    return false;
  }
  return true;
};

const trimText = text => {
  return text.replace(/^\s+|\s+$/g, "").trim();
};

const convertToOneLine = text => {
  return text.replace(/\s+/g, " ").trim();
};