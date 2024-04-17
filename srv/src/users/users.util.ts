export function createPaginationLinks(page: number, limit: number, total: number) {
  const totalPages = Math.ceil(total / limit);
  return {
    first: `/users?page=1&limit=${limit}`,
    prev: page > 1 ? `/users?page=${page - 1}&limit=${limit}` : null,
    next: page < totalPages ? `/users?page=${page + 1}&limit=${limit}` : null,
    last: `/users?page=${totalPages}&limit=${limit}`,
  };
}
