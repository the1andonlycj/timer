let timesArr = process.argv.slice(2);
timesArr = timesArr.sort();
//we have a numerically sorted array of items that were passed in.
for (let sec of timesArr) {
  //we're cycling through the array of times
  Number(sec);
  //force them to be numbers instead of other elements/turn them into NaN
  if (sec <= 0 || isNaN(sec)) {
    //if it's not a valid number (above zero), we offer sass.
    console.log("Well that's not a valid number... I'll ignore that one.");
  } else {
    const machineTime = sec * 1000; 
    setTimeout(() => {
      process.stdout.write(".");
    }, machineTime)
  }
}

