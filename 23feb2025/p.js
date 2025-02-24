function test() {
    if (true) {
      var a = 10;
      let b = 20;
      const c = 30;
    }
    console.log(a); // ✅ Works (function-scoped)
    console.log(b); // ❌ Error (block-scoped)
  }
  

  test ()