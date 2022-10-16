const employee = {
    name: 'sam',
    streetAdress: '11 Broadway',
};

function updateEmployeeWithKeyAndValue(employee, key, value) {

    const newObj = { ...employee };
    newObj[key] = value;
    return employee, newObj;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;

}


function deleteFromEmployeeByKey(employee, key) {
    const newObj = { ...employee };
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;

}





