"use strict";
const salary = 7500;
const friendSalaries = [7500, 12354, 5432, 3456, 9880, 34531];
const friends = ['sakib', 'rakib', 'Nakib', 'Dakib'];
friendSalaries[0] = 10500;
friendSalaries.push(13100);
//  friendSalaries[4] = '9800';
//  friendSalaries.push = '3456';
friends.push('Bakib');
friends[2] = 'Qakib';
//  friends.push(32451);
let max = 0;
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
    }
}
