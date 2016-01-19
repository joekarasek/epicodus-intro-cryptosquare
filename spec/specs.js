describe("normalizeText", function(){
  it("return string with uppercase changed to lowercase", function(){
    expect(normalizeText("ABCDEFG")).to.equal("abcdefg");
  });
});
