const puppeteer = require('puppeteer');

// Add content

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-abfedecbaaaddefbbdfccfebdd.examlyiopb.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.click('#addbtn');
    await page.type('#textcontent', 'testing');
    await page.click('#submitbtn');
    console.log('TESTCASE:test_case4:success');
    }
     catch(e){
      console.log('TESTCASE:test_case4:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();

// Update Content

  (async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.goto('https://8081-abfedecbaaaddefbbdfccfebdd.examlyiopb.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.click('#editbtn');
    await page.type('#textcontent', 'testing - change');
    await page.click('#updatebtn');
    console.log('TESTCASE:test_case5:success');
    } catch(e) {
      console.log('TESTCASE:test_case5:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  // Delete content

  (async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.goto('https://8081-abfedecbaaaddefbbdfccfebdd.examlyiopb.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.click('#deletebtn');
      console.log('TESTCASE:test_case6:success');
    } catch(e) {
      console.log('TESTCASE:test_case6:failure');
    }finally{
      await page.close();
  await browser.close();
    }
  })();