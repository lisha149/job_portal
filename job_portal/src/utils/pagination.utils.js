const Pagination = (resultPerPage, queryString) => {
  const currentPage = Number(queryString.page) || 1;
  const skipData = resultPerPage * (currentPage - 1);
  return {
    offset: skipData,
    limit: resultPerPage,
  };
};
module.exports = Pagination;
