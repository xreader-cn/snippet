///
/// https://jsfiddle.net/bipen/dyfRa/
///

$.extend($.expr[":"], {
"containsIN": function(elem, i, match, array) {
    return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});
