tion questionSolver(page, question, answer) {
  return new Promise(function (resolve, reject) {
    let questionWillBeClickedPromise = question.click();
    questionWillBeClickedPromise
      .then(function () {
        let waitForEditorPromise = waitAndClick(
          ".monaco-editor.no-user-select.vs",
          page
        );
        return waitForEditorPromise;
      })
      .then(function () {
        return waitAndClick(".checkbox-input", page);
      })
      .then(function () {
        return page.waitForSelector(".text-area.custominput");
      })
      .then(function () {
        return page.type(".text-area.custominput", answer, { delay: 20 });
      })
      .then(function () {
        let ctrlonHoldPromise = page.keyboard.down('Control');
        return ctrlonHoldPromise
      }).then(function(){
        let AisPressedPromise = page.keyboard.press('A' , {delay : 20});
        return AisPressedPromise
      }).then(function(){
         let XisPressedPromise = page.keyboard.press('X' , {delay:20})
         return XisPressedPromise
      }).then(function(){
         let ctrlIsReleasedPromise = page.keyboard.up('Control')
         return ctrlIsReleasedPromise
      }).then(function () {
        let waitForEditorPromise = waitAndClick(
          ".monaco-editor.no-user-select.vs",
          page
        );
        return waitForEditorPromise;
      }).then(function () {
        let ctrlonHoldPromise = page.keyboard.down('Control');
        return ctrlonHoldPromise
      }).then(function(){
        let AisPressedPromise = page.keyboard.press('A' , {delay : 20});
        return AisPressedPromise
      }).then(function(){
        let VisPressedPromise = page.keyboard.press('V' , {delay:20})
        return VisPressedPromise
     }).then(function(){
      let ctrlIsReleasedPromise = page.keyboard.up('Control')
      return ctrlIsReleasedPromise
   }).then(function(){
      return page.click('.hr-monaco__run-code' , {delay : 20})
   }).then(function(){
     resolve()
   }).catch(function(err){
     console.log(err)
   })
  });
}