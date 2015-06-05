describe("medianCache()",function(){
  it("should return the median", function(){
    var m = MedianCache();

    expect(m(100)).to.equal(100);
    expect(m(0)).to.equal(50);
    expect(m(50)).to.equal(50);
  });

});

describe("Stack()",function(){
  
  it('has a functional push and pop', function(){
    var s = new Stack;
    s.push(1);
    s.push(2);
    expect(s.pop()).to.equal(2);
    expect(s.pop()).to.equal(1);
    expect(s.pop()).to.equal(undefined);
  });

  it('has a functional size property', function(){
    var s = new Stack;
    s.push(1);
    s.push(2);
    expect(s.size()).to.equal(2);
  });

});
  
describe("Queue()",function(){

  it('has a functional enqueue and dequeue', function(){
    var x = new Queue;
    x.enqueue(1);
    x.enqueue(2);
    expect( x.dequeue() ).to.equal(1);
    expect( x.dequeue() ).to.equal(2);
    expect( x.dequeue() ).to.equal(undefined);
 });

  it('has a functional size property', function(){
    var x = new Queue;
    x.enqueue(1);
    x.enqueue(2);
    expect( x.size() ).to.equal(2);
  });


});


describe("LinkedList()",function(){
  it('can accept new nodes values with addToTail()',function(){
    var x = new LinkedList;
    x.addToTail(1);
    expect(x.head.value).to.equal(1);
    x.addToTail(2);
    expect(x.head.value).to.equal(1);
  });

  it('can properly remove from head', function(){
    var x = new LinkedList;
    x.addToTail(1);
    x.addToTail(2);
    x.addToTail(3);
    expect(x.head.value).to.equal(1);

    x.removeFromHead();
    expect(x.head.value).to.equal(2);
  });

  it('has a working size method',function(){
    var x = new LinkedList;
    x.addToTail(1);
    x.addToTail(2);
    x.addToTail(3);
    expect(x.size() ).to.equal(3); 
  });

  it('has a working each method',function(){
    var x = new LinkedList;
    var m = [];

    for (var i=0;i<100;x.addToTail(i), i++){}

    x.each(function(val){m.push(val+1);});

    expect(m[0]).to.equal(1);
    expect(m[99]).to.equal(100);
  }); 

});


describe("Iou()",function(){
  //promises
  
  it('returns a function',function(){
    expect(Iou(function(val){return val;})).to.be.a('function');
  });

  it('should return an iou with then and resolve methods',function(){
    var x = new Iou(function(val){return val+1;});
    expect(x.then).to.be.a('function');
    expect(x.resolve).to.be.a('function');
  });

  it('iou.resolve() should return a value',function(){
    var x = new Iou(function(val){return val+1;});
    expect(x(12).resolve() ).to.equal(13);
  });


});