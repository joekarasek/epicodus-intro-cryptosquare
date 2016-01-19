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
