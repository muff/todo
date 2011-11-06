describe("todo app", function(){
  var input = $('#todo'),
      list = $('#todo_items'),
      todo = window.toDo;
      
  it('should have an input to add todo items', function(){
    expect(input.length).toBe(1);
    expect(input.prop('nodeName')).toBe('INPUT');
  });
  it('should have a list for todo items', function(){
    expect(list.length).toBe(1);
    expect(list.prop('nodeName')).toBe('UL');
  });
  
  
});