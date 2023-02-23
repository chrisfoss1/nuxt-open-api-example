export type Pagination = {
  CurrentPage: number;
  TotalPages: number;
  PageSize: number;
  TotalCount: number;
  Checksum: string;
  OrderBy: string;
  Descending: boolean;
  HasPrevious: boolean;
  HasNext: boolean;
};
