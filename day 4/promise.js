const myPromise = new Promise((resolve, reject) => {
    let age = 17;
    if (age >= 18) {
        resolve("Eligible for voting.");
    } else {
        reject("Not eligible for voting.");
    }
}
)


const checkEligibility = async () => {
   try{
    const msg = await myPromise;
    console.log(msg);
   } catch (error) {
    console.error(error);
   }
}
checkEligibility();




//console.log(myPromise);
//myPromise
    //.then((msg)=>console.log(msg))
    //.catch((error)=>console.log(error));