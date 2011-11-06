/* 
  What:     todo.js
  Author:   Eivind Ingebrigtsen (t98) 
  Purpose:  Todo App for browser   

*/


(function(){
  var toDo = function(){
    var w = window,
        s = w.localStorage,
        d = s['todo-items'] || [],
        list = $('#todo_items'),
        input = $('#todo'),
        t = Handlebars.compile('');

   return {
   };    
  }();  
  window.toDo = toDo;
})();