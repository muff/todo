describe("todo app", function(){
  var input = $('#todo'),
      list  = $('#todo_items'),
      btn   = $('#add'),
      todo  = window.toDo;

  it('should have an input to add todo items', function(){
    expect(input.length).toBe(1);
    expect(input.prop('nodeName')).toBe('INPUT');
  });

  it('should have a list for todo items', function(){
    expect(list.length).toBe(1);
    expect(list.prop('nodeName')).toBe('UL');
  });

  it('should have a button to add todo items', function(){
    expect(btn.length).toBe(1);
    expect(btn.prop('nodeName')).toBe('BUTTON');
  });

  xit('should be able to add todo items', function(){});
  xit('should be able to check items off', function(){});

  xit('should be not show checkeditems', function() {});
  xit('should be able to tag todo items with the use of #tag-name', function(){});

});