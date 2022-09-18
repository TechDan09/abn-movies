export const extractYear = date => {
  if (!date || !date.length || typeof date !== 'string') {
    return '';
  }

  return new Date(date).getFullYear().toString();
};
