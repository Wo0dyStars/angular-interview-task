import { PageEvent } from "@angular/material/paginator";

export const initialPage: PageEvent = {
    pageIndex: 0,
    pageSize: 20,
    length: 200
}

export const pageSizeOptions = [5, 10, 20, 25];