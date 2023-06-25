function greeting(user){
    const curTime = new Date();
    const curHour = curTime.getHours();
    let greet = "";
    if (curHour >= 23 || (curHour >=0 && curHour < 5)) {
        greet = "Good night";
      };
      if (curHour >= 5 && curHour < 11) {
        greet = "Good morning";
      };
       if (curHour >= 11 && curHour < 17) {
        greet = "Good afternoon";
      } 
      if (curHour >= 17 && curHour < 23){
        greet = "Good evening";
      };
      return greet;
}
module.exports = {greeting};