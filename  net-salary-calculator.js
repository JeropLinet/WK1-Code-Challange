function tax(incomeSalary){
    let tax = 0;
    let grossTax = 0;
    let rated = 0; 
    switch (incomeSalary){
    case incomeSalary > 0 && incomeSalary <= 24000:
        //Multiplying the income salary by the rate of tax outputs the grossTax
        grossTax = (incomeSalary*0.10);
        //the amount of money deducted to pay the tax is the difference between the income salary and the gross salary
        tax = incomeSalary - grossTax;
    
    case incomeSalary >= 24001 && incomeSalary <= 32333:
        rated = (incomeSalary - 24000) * 0.25;
        grossTax = 2400 + rated
        tax = incomeSalary-grossTax;
    case incomeSalary >= 32334 && incomeSalary <= 500000:
        rated = (incomeSalary - 32333) * 0.30;
        grossTax = 2400 + 2083.25 + rated
        tax = incomeSalary-grossTax;
    case incomeSalary >= 500001 && incomeSalary <= 800000:
        rated = (incomeSalary - 500000) * 0.325;
        grossTax = 2400 + 2083.25 + 140300.1 + rated
        tax = incomeSalary-grossTax;  
    case incomeSalary > 800000:
        rated = (incomeSalary - 800000) * 0.35;
        grossTax = 2400 + 2083.25 + 140300.1 + 97500 + rated
        tax = incomeSalary-grossTax;
    break }
    return tax;
}