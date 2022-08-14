const renewDriverLicense = (yearOfBirth: number, currentYear: number, yearOfIssue: number) => {

    let driverLicensePeriod = currentYear - yearOfIssue
    let age = currentYear - yearOfBirth

    if (age <= 20) {
        return driverLicensePeriod >= 5 ? true : false
    } else if (age <= 50 || age >= 20) {
        return driverLicensePeriod >= 10 ? true : false
    } else if (age > 50) {
        return driverLicensePeriod >= 15 ? true : false
    }

}


console.log(renewDriverLicense(2003, 2022, 2021)) 