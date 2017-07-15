/**
 * Created by ibrahimcobani on 15/07/2017.
 */


/**
 * Shadow DOM ekleme örneği
 * @type {Element}
 *
 * template elementi kullanılarak yapılıyor.
 *
 */
var host = document.getElementById("host");
var root = host.createShadowRoot();
var fasulye = document.getElementById("fasulyeden");
//root.innerHTML = "<h2>Geçler alköl var mı?</h2>";
root.appendChild(document.importNode(fasulye.content, true));

// bu Light DOM objesini getirdi.
console.log(document.querySelector("h1"));

// Buda Shadow DOM objesini getirdi.
console.log(root.querySelector("h1"));
console.log(root.getElementById("msg").innerHTML);


/**
 * Modüle tarzı bu şekilde
 * @type {{sayHi}}
 */
var module = (function () {
  return {
    sayHi: function () {
      console.log('Hi');
    },
    sayMerhaba: function () {
      console.log('Merhaba')
    }
  };
}());


module.sayHi();
module.sayMerhaba();