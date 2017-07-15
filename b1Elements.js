/**
 * Created by ibrahimcobani on 15/07/2017.
 */


/**
 *
 * @type {HTMLElement}
 *
 * b1-comment button custom element sample
 * Bu örnekte bir custom element denemesi yapıldı.
 *
 */
var b1CommentProto = Object.create(HTMLElement.prototype);

b1CommentProto.createdCallback = function () {
  this.innerHTML =
      "<h2>Aexpense Açıklama Girişi</h2>" +
      "<textarea style='width: 300px; height: 100px'>" +
      "   Kabak kafalı keriz kralın, kabak kafalı keriz" +
      "kızının kara kıllı kaniş köpeği kara kulplu fanusu kırınca." +
      "Kabak kafalı keris kralın kabak kafalı keriz kızının kocası kara kıllı kaniş köpeğinin kafasını kesti." +
      "</textarea></br>" +
      "<button is='b1-button'></button>";
};

var b1Comment = document.registerElement('b1-comment', {
  prototype: b1CommentProto
});

// #Option 2
//var comment = new b1Comment();
//document.body.appendChild(comment)

// #Option 3
//var comment = document.createElement('b1-comment');
//document.body.appendChild(comment);

// #Option 4
//document.body.innerHTML = '<b1-comment/>';

/**
 * b1-button
 *
 * is = "b1-buton"
 *
 * @type {HTMLButtonElement}
 */


var ProtoButton = Object.create(HTMLButtonElement.prototype);

ProtoButton.createdCallback = function () {
  this.innerHTML = "Kaydet";
  this.value = "Tamam";
  this.style.color = "orange";
};

var b1Button = document.registerElement('b1-button', {
  prototype: ProtoButton,
  extends: 'button'
});

// #Option 2
//var b1button = new b1Button();
//document.body.appendChild(b1button);

// #Option 3
//var b1button = document.createElement('button', 'b1-button');
//document.body.appendChild(b1button);


// #Option 4
//document.body.innerHTML = '<button is="b1-button"/>';


var ProtoHelloWorld = Object.create(HTMLElement.prototype);
ProtoHelloWorld.createdCallback = function () {
  this.innerHTML = "<h1>Hello World </h1>";

};

// Element'in eklenmesi
ProtoHelloWorld.attachedCallback = function () {
  console.log('Eklendi.');
};


// Element'in çıkartılması
ProtoHelloWorld.detachedCallback = function () {
  console.log('Çıkartıldı.');
};

// Attribute değerinin değişmesi durumunda aşağıdaki callback fonksiyonunun içinde yakalayabiliyoruz.
ProtoHelloWorld.attributeChangedCallback = function (attrName, oldVal, newVal) {
  console.log(attrName + ', ' + oldVal + ', ' + newVal);
};


var Hello = document.registerElement('hello-world', {
  prototype: ProtoHelloWorld
});


document.querySelector('hello-world').setAttribute('test', 1);
document.querySelector('hello-world').setAttribute('test', 4);
document.querySelector('hello-world').setAttribute('test', 12);
document.querySelector('hello-world').remove();