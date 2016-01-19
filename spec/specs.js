describe("normalizeText", function(){
  it("return string with uppercase changed to lowercase", function(){
    expect(normalizeText("ABCDEFG")).to.equal("abcdefg");
  });
  it("return string with all special characters removed", function(){
    expect(normalizeText("aabb#$%.aabb")).to.equal("aabbaabb");
  });
  it("return a string with all spaces removed", function(){
    expect(normalizeText("aa bb aa bb")).to.equal("aabbaabb");
  });
});

describe("isSquare", function(){
  it("return false if the value entered is not a square", function(){
    expect(isSquare(15)).to.equal(false);
  });
  it("return true if the value entered is a square", function(){
    expect(isSquare(16)).to.equal(true);
  });
});
// find smallest square value that is greater than the string length.
describe("getCryptoSize", function(){
  it("return crypto square size for string that have a legth that is a perfect square", function(){
    expect(getCryptoSize("asdfasdfg")).to.equal(3);
  });
  it("return crypto square size for string that is not a perfect square", function(){
    expect(getCryptoSize("asdfa")).to.equal(3);
  });
});
