import _ from 'lodash'

import { TableProps } from './interface'
import {
  NoDataWrapper,
  PaginationWrapper,
  SortButton,
  StyledTable,
  TableHeading,
  Tbody,
  Td,
  Th,
  Thead,
  THeadRow,
  Tr
} from './style'
import { FaArrowIosDown, FaArrowIosUp } from '../../assets/icons/svgComponents'
import { IconContainer } from '../../common/style'
import { ASYNC_THUNK_STATUS,TableSchema } from './interface'
import {
  convertDateToString,
  convertStringToDate
} from '../../utils/dateFunctions'
import toggleSort from '../../utils/tableActionHandlers'
import { CustomDatePicker } from '../datePicker/DatePicker'
import {FloatingInput} from '../floatingInput/FloatingInput'
import {PaginationWithItemCount} from '../Pagination/PaginationWithItemCount'
import Spinner from '../spinner/Spinner'
import React from 'react'

function Table(props: TableProps) {
  const {
    tableSchema,
    data,
    onChange = () => {},
    searchQuires = {},
    loadingStatus,
    noDataMessage,
    defaultQuires,
    actionFunction,
    totalRecordCount,
    setQuires,
    expandedItem = [],
    dataId,
    subTableData = {},
    subTableSchema = []
  } = props
  const isLoading = loadingStatus === ASYNC_THUNK_STATUS.LOADING
  const isNodataAvailable =
    loadingStatus !== ASYNC_THUNK_STATUS.LOADING && data.length === 0
  const isTableContentAvailable =
    loadingStatus !== ASYNC_THUNK_STATUS.LOADING || data.length !== 0
  console.log(subTableData)
  const getTableHeader = (schema: TableSchema) => {
    if (schema.searchField === 'input') {
      return (
        <FloatingInput
          label={schema.header()}
          name={schema.fieldName ?? ''}
          value={searchQuires[schema.fieldName ?? '']}
          onChange={(value: string) => onChange(schema.fieldName ?? '', value)}
        />
      )
    } else if (schema.searchField === 'DatePicker') {
      return (
        <CustomDatePicker
          date={convertStringToDate(searchQuires[schema.fieldName ?? ''])}
          setDate={(value: Date | null) => {
            let dateStrVal = ''
            if (value !== null) {
              dateStrVal = convertDateToString(value)
            }
            onChange(schema.fieldName ?? '', dateStrVal)
          }}
        />
      )
    } else if (schema.searchField === 'DateRangePicker') {
      let startDate: Date | null = null
      let endDate: Date | null = null
      if (
        searchQuires[schema.fieldName ?? ''] !== undefined &&
        searchQuires[schema.fieldName ?? ''] !== null &&
        searchQuires[schema.fieldName ?? ''] !== ''
      ) {
        const dateRangeArr = searchQuires[schema.fieldName ?? ''].split('-')
        if (dateRangeArr[0] !== null)
          startDate = convertStringToDate(dateRangeArr[0])
        if (dateRangeArr[1] !== undefined && dateRangeArr[1] !== null)
          endDate = convertStringToDate(dateRangeArr[1])
      }

      return (
        <CustomDatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          setDateRange={(dateRange: [Date | null, Date | null]) => {
            let sStartDate = ''
            let sEndDate = ''
            let completeDate = ''
            if (dateRange[0] !== null) {
              sStartDate = convertDateToString(dateRange[0])
              completeDate += sStartDate
            }
            if (dateRange[1] !== null) {
              sEndDate = convertDateToString(dateRange[1])
              completeDate += '-' + sEndDate
            }

            onChange(schema.fieldName ?? '', completeDate)
          }}
        />
      )
    }
    return <>{schema.header()}</>
  }

  const isSortActive = (field: string | undefined) => {
    return field === searchQuires.orderby
  }

  const onChangeSort = (field: string) => {
    const orderby = toggleSort(
      searchQuires.orderby,
      field,
      defaultQuires.orderby
    )
    setQuires({ ...searchQuires, orderby, offset: 0 })
  }
  console.log(data)
  return (
    <>
      <StyledTable>
        <Thead>
          <THeadRow>
            {tableSchema.map((schema: TableSchema, index) => (
              <Th key={`${schema.pathToValue}${index}`}>
                <TableHeading>
                  {getTableHeader(schema)}
                  {schema.isSortable !== undefined &&
                    Boolean(schema.isSortable) && (
                      <SortButton
                        onClick={() => onChangeSort(schema.fieldName ?? '')}
                      >
                        <IconContainer
                          isActive={isSortActive(schema.fieldName)}
                        >
                          <FaArrowIosUp />
                        </IconContainer>
                        <IconContainer
                          isActive={isSortActive(`-${schema.fieldName ?? ''}`)}
                        >
                          <FaArrowIosDown />
                        </IconContainer>
                      </SortButton>
                    )}
                </TableHeading>
              </Th>
            ))}
          </THeadRow>
        </Thead>
        <Tbody>
          {isTableContentAvailable &&
            data.map((value, index) => (
              <>
                {' '}
                <Tr key={index}>
                  {tableSchema.map((schema: TableSchema, index) => (
                    <Td key={`${schema.header()}${index}`}>
                      {schema.dataFormatFunction != null
                        ? schema.dataFormatFunction(
                            value,
                            actionFunction,
                            expandedItem
                          )
                        : _.get(value, schema.pathToValue)}
                    </Td>
                  ))}
                </Tr>
                {(expandedItem?.includes(String(_.get(value, dataId))) ??
                  false) && (
                  <Tr>
                    <td
                      colSpan={tableSchema.length}
                      style={{ padding: '7px 7px 7px 30px' }}
                    >
                      <table
                        style={{
                          width: '100%',
                          border: '1px solid #373737',
                          borderRadius: '8px'
                        }}
                      >
                        <Thead>
                          <THeadRow>
                            {subTableSchema.map(
                              (subSchema: TableSchema) => (
                                <Th key={subSchema.header()}>
                                  {subSchema.header()}
                                </Th>
                              )
                            )}
                          </THeadRow>
                        </Thead>
                        <Tbody>
                          {subTableData[String(_.get(value, dataId))] !==
                            undefined &&
                            subTableData[String(_.get(value, dataId))].map(
                              (dt: any) => (
                                <Tr key={dt.series_instance_uid}>
                                  {subTableSchema.map(
                                    (subSchemaNew: TableSchema, index) => (
                                      <>
                                        <Td key={index}>
                                          {subSchemaNew.dataFormatFunction !=
                                          null
                                            ? subSchemaNew.dataFormatFunction(
                                                dt,
                                                actionFunction,
                                                expandedItem
                                              )
                                            : _.get(
                                                dt,
                                                subSchemaNew.pathToValue
                                              )}
                                        </Td>
                                      </>
                                    )
                                  )}
                                </Tr>
                              )
                            )}
                        </Tbody>
                      </table>
                    </td>
                  </Tr>
                )}
              </>
            ))}
        </Tbody>
      </StyledTable>
      {isLoading && (
        <NoDataWrapper>
          <Spinner />
        </NoDataWrapper>
      )}
      {isNodataAvailable && <NoDataWrapper>{noDataMessage}</NoDataWrapper>}
      <PaginationWrapper>
        <PaginationWithItemCount
          limit={parseInt(defaultQuires.limit, 10)}
          offset={parseInt(searchQuires.offset, 10)}
          totalRecords={totalRecordCount}
          hidePagination={isLoading}
          changeOffset={(offset: number) => {
            onChange('offset', String(offset))
          }}
        />
      </PaginationWrapper>
    </>
  )
}

export {Table}
