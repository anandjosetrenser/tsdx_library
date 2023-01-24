export type AsyncThunkStatus = 'idle' | 'loading' | 'failed'

export const ASYNC_THUNK_STATUS: Record<string, AsyncThunkStatus> = {
  IDLE: 'idle',
  LOADING: 'loading',
  FAILED: 'failed'
}

export interface TableSchema {
  header: () => string
  pathToValue: string
  searchField?:
    | 'input'
    | 'Action'
    | 'MultiSelect'
    | ''
    | 'DatePicker'
    | 'DateRangePicker'
  fieldName?: string
  dataFormatFunction?: (
    data: unknown,
    actionFunction?: Function,
    payload?: unknown
  ) => JSX.Element
  isSortable?: boolean
}

export interface TableProps {
  tableSchema: TableSchema[]
  data: any[]
  loadingStatus: AsyncThunkStatus
  defaultQuires: Record<string, any>
  searchQuires: Record<string, string>
  noDataMessage?: string
  onChange?: (name: string, value: string) => void
  actionFunction?: Function
  totalRecordCount: number
  setQuires: Function
  expandedItem?: string[]
  dataId: string
  subTableData?: Record<string, any[]>
  subTableSchema?: TableSchema[]
}

export interface NoDataProps {
  isLoading: boolean
  isDataAvailable: boolean
}
