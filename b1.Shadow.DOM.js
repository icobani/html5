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
root.appendChild(document.importNode(fasulye.content,true));