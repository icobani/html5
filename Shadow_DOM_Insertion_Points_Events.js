/**
 * Created by ibrahimcobani on 16/07/2017.
 */

var CommentProto = Object.create(HTMLElement.prototype);
CommentProto.createdCallback = function () {
  var template = document.querySelector('template');
  var shadow = this.createShadowRoot();
  shadow.appendChild(document.importNode(template.content, true))
};

document.registerElement('comment-Form', {
  prototype: CommentProto
});