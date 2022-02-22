function computeSalesCommission(isSalaried,sales) {
    let commission = 0;
    if (isSalaried) {
       if (sales >= 0 && sales < 300){
        commission = 0;
       }
       else if (sales <= 500) {
        commission = sales * 0.01;
      }
       else { 
        commission = 5 + (sales - 500) * 0.02;
      }
     }
     else {
       if (sales >= 0 && sales <= 500){
         commission = sales * 0.02;
       }
       else {
         commission = sales * 0.03;
       }
     }
     return commission;
   }
 console.log(computeSalesCommission('true', 900));