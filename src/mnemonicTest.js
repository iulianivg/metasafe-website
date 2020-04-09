
var ethers = require("ethers");
const words240 = require("./240words");
const metasafe = require('metasafe-eth');

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
        }
        console.log('good mnemonics: ',goodMnemonics);
        console.log('bad mnemonics: ', badMnemonics);
      } catch(err){
        console.log(err.message);
      }
  }

generateMnemonic3();