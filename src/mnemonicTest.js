
var ethers = require("ethers");
<<<<<<< HEAD
var fs = require("fs");
var metasafe = require('metasafe-eth');
// const words240 = require("./240words");

=======
const words240 = require("./240words");
const metasafe = require('metasafe-eth');
>>>>>>> 2d60e8d6f80ab39ea2c103643c5c47043dd39b03

// checkDuplicates = names =>
// names.reduce((a, b) => ({ ...a,
// [b]: (a[b] || 0) + 1
// }), {})

// analysis = async(wordss) => {
//     let mnemonicValid = ethers.utils.HDNode.isValidMnemonic(wordss.join(" "));
//     let duplicates = checkDuplicates(wordss);
//     let duplicateGrade = 40;
//     let consecutiveGrade = 30;       
//     let from10Grade = 30;
//     let theWords = [];
//     let theWords2 = [];

//     for(let [key, value] of Object.entries(duplicates)){
//       if(value > 1) {
//         duplicateGrade = duplicateGrade-(value* 3);
//       }
//     }

//     for(let i=0; i<wordss.length-1;i++) {
//       if((wordss[i].charCodeAt(0) - wordss[i+1].charCodeAt(0)) == 0){
//         theWords.push(wordss[i]);
//       }
//     }
//     if(theWords.length >= 2){
//       consecutiveGrade = consecutiveGrade - (theWords.length *2.5);
//   }

//   for(let i=0; i<words240.length;i++){
//     for(let j=0;j<wordss.length;j++){
//         if(words240[i] == wordss[j]){
//             // console.log(words[i]);
//             /// logic for if 4 or more words, it's risky
//             theWords2.push(wordss[i]);
//         }
//     }
// }
// if(theWords2.length >= 4){
//     from10Grade = from10Grade-(theWords2.length*2.5)
// }

// return [duplicateGrade,consecutiveGrade,from10Grade];


// }


//   generateMnemonic = async() => {
//     try{
//         console.log("starting... this may take some time. Enjoy a coffee dear programmer.");
//         let goodMnemonics = 0;
//         let badMnemonics = 0;
//         for(let i=0; i<100000000;i++){
//           var mnemonic = ethers.utils.HDNode.entropyToMnemonic(ethers.utils.randomBytes(16));
//           var mnemonic = mnemonic.split(" ");
//           let x = await analysis(mnemonic); 
  
//           if(x[0]+x[1]+x[2] === 100){
//             goodMnemonics++;
//           } else {
//             badMnemonics++;
//           }
//         }
//         console.log('good mnemonics: ',goodMnemonics);
//         console.log('bad mnemonics: ', badMnemonics);
//     }

//     catch(err){
//         console.log(err.message);
//     }
//     }

    // generateMnemonic2 = async() => {
    //   try{
    //       console.log("starting... this may take some time. Enjoy a coffee dear programmer.");
    //       let goodmnemonic = 0;
    //       for(let i=0; i<1000000;i++){
    //         var mnemonic = ethers.utils.HDNode.entropyToMnemonic(ethers.utils.randomBytes(16));
    //         var mnemonic = mnemonic.split(" ");
    //         let x = await analysis(mnemonic); 
    
    //         if(x[0]+x[1]+x[2] === 100){
    //           console.log(mnemonic);
    //           goodmnemonic++;
    //         } else {
    //           continue;
    //         }
    //       }
    //       console.log(goodmnemonic);

    //   }
  
    //   catch(err){
    //       console.log(err.message);
    //   }
    //   }

<<<<<<< HEAD
  //   generateMnemonic3 = async () => {
  //     try{
  //       console.log("starting... this may take some time. Enjoy a coffee dear programmer.");
  //       let goodMnemonics = 0;
  //       let badMnemonics = 0;
  //       for(let i=0; i<10000;i++){
  //         var mnemonic = ethers.utils.HDNode.entropyToMnemonic(ethers.utils.randomBytes(32));
  //         var mnemonic = mnemonic.split(" ");
  //         let x = await analysis(mnemonic); 
  //         console.log(i);
  //         if(x[0]+x[1]+x[2] === 100){
  //           goodMnemonics++;
  //         } else {
  //           badMnemonics++;
  //         }
  //       }
  //       console.log('good mnemonics: ',goodMnemonics);
  //       console.log('bad mnemonics: ', badMnemonics);
  //     } catch(err){
  //       console.log(err.message);
  //     }
  // }



  generateMnemonic4 = async () => {
    try{
      console.log("starting... this may take some time. Enjoy a coffee dear programmer.");
      let goodMnemonics = 0;
      let badMnemonics = 0;
      let start = new Date();
      for(let i=0; i<1000000;i++){
        var mnemonic = ethers.utils.HDNode.entropyToMnemonic(ethers.utils.randomBytes(16));
        var mnemonic = mnemonic.split(" ");
        let x = await metasafe.analysis12(mnemonic); 
        if(x[0]+x[1]+x[2] === 100){
          goodMnemonics++;
          fs.appendFileSync('test2.txt',`mnemonic ${mnemonic} |good| score: 100, iteration #${i}`+"\n");
        } else {
          badMnemonics++;
          fs.appendFileSync('test2.txt',`mnemonic ${mnemonic} |bad| score: ${x[0]+x[1]+x[2]}, iteration #${i}`+"\n");
=======
    generateMnemonic3 = async () => {
      try{
        console.log("starting... this may take some time. Enjoy a coffee dear programmer.");
        let goodMnemonics = 0;
        let badMnemonics = 0;
        for(let i=0; i<10000;i++){
          var mnemonic = ethers.utils.HDNode.entropyToMnemonic(ethers.utils.randomBytes(16));
          var mnemonic = mnemonic.split(" ");
          let x = await metasafe.analysis12(mnemonic); 
          console.log(i);
          if(x[0]+x[1]+x[2] === 100){
            goodMnemonics++;
          } else {
            badMnemonics++;
          }
>>>>>>> 2d60e8d6f80ab39ea2c103643c5c47043dd39b03
        }
      }
      fs.appendFileSync('test2.txt',`goods: ${goodMnemonics}`+"\n");
      fs.appendFileSync('test2.txt',`bads: ${badMnemonics}`+"\n");
      let end = new Date() - start;
      console.log(end/1000);

    } catch(err){
      console.log(err.message);
    }
}

generateMnemonic4();