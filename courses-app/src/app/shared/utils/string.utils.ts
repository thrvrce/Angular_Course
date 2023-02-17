export const  withLeadZero = (stringNumber: string) => {
  return stringNumber.length === 1 ? `0${stringNumber}` : stringNumber
}
