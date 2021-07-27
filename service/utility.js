export const getFormattedDate = () => {
  return moment(new Date().toISOString()).format("YYYY-MM-DD");
};
