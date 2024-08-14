export const calculator = {
  addDays(quantity: number, targetDate: Date) {
    const dynamicDate = targetDate ?? new Date();

    const initialDate = Date.parse(dynamicDate.toDateString());

    return new Date(initialDate + quantity * 24 * 60 * 60 * 1000);
  },
};
