//#1. This question could have been done using a function.
// However, functions will be discussed tomorrow. 
// That's why i didn't use a function here.
// This program can be tested by providing different values
// of sales and employeeType. The result can be checked
// using the sonsole method log();

    let commission = 0;
    let employeeType = 'salaried';
    let sales = 500;
    if (employeeType === 'salaried') {
       if (sales >= 0 && sales < 300){
        commission = 0;
        console.log(commission);
       }
       else if (sales <= 500) {
        commission = sales * 0.01;
        console.log(commission);
      }
       else { 
        commission = sales * 0.02;
        console.log(commission);
      }
     }
     else {
       if (sales >= 0 && sales <= 500){
         commission = sales * 0.02;
         console.log(commission);
       }
       else {
         commission = sales * 0.03;
         console.log(commission);
       }
     }

 




