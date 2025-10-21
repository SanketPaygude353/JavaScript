( function chai(){   //=====>named iife
    console.log("DB Connected");
})();

((name)=>{
    console.log(`DB2 Connected ${name}`);
})("sanket")