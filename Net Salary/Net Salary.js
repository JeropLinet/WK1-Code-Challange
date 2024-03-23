let grossPay = 30000
switch (grossPay) {
    case grossPay>0 && grossPay<=5999:
        deduction=150
    case grossPay>=6000 && grossPay<=7999:
        deduction=300
    case grossPay>=8000 && grossPay<=11999:
        deduction=400
    case grossPay>=12000 && grossPay<=14999:
         deduction=500
    case grossPay>=15000 && grossPay<=19999:
        deduction=600
    case grossPay>=20000 && grossPay<=24999:
        deduction=750
    case grossPay>=25000 && grossPay<=29999:
        deduction=850
    case grossPay>=30000 && grossPay<=34999:
        deduction=900
     break
        
}

console.log( grossPay+"Your deduction is " + deduction)