import { PageEvent } from "@angular/material/paginator";

export const initialPage: PageEvent = {
    pageIndex: 0,
    pageSize: 20,
    length: 200
}

export const enum ViewTypes {
    TABLE =  'table',
    CARD = 'card'
}

export const viewTypes = {
    TABLE: ViewTypes.TABLE,
    CARD: ViewTypes.CARD
}

export const pageSizeOptions = [5, 10, 20, 25];