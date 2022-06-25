const functions = require('./functions');

test('character count', () =>{
    const result = functions.stringLength("Frederick");
    expect(result).toBe(9);

});

test('null', () =>{
    const result = functions.stringLength("");
    expect(result).toBeUndefined();
});

test('null', () =>{
    const result = functions.stringLength("AnkomahFrederick");
    expect(result).toBeUndefined();
});