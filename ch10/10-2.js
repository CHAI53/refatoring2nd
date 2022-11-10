function disabilityAmount(employee) {
  if (isNotEligibleForDisability(employee)) {
    return 0;
  }
  return 1;
}

function isNotEligibleForDisability(employee) {
  return (
    employee.seniority < 2 ||
    employee.monthsDisabled > 12 ||
    employee.isPartTime
  );
}
