import { useEffect } from 'react'

import { PaginationWithItemCountProps } from './interface'
import {
  PaginationButtons,
  PaginationContent,
  PaginationWrapper
} from './style'
import SvgArrowLeft from '../../assets/icons/svgComponents/ArrowLeft'
import SvgArrowRight from '../../assets/icons/svgComponents/ArrowRight'
import changePageSize from '../../utils/pagination'
import React from 'react'

function PaginationWithItemCount(
  props: PaginationWithItemCountProps
) {
  const { totalRecords, limit, offset, hidePagination, changeOffset } = props
  const isNextDisabled = totalRecords <= offset + limit
  const isPreviousDisabled = offset === 0

  /** Redirect to the previous page if all records in the current page is deleted */
  useEffect(() => {
    if (offset === totalRecords && totalRecords !== 0) {
      const updatedOffset = changePageSize('other', offset, limit, totalRecords)
      changeOffset(updatedOffset)
    }
  }, [offset, totalRecords])

  const getLastRecordNumber = () => {
    if (offset + limit > totalRecords) {
      return totalRecords
    }
    return offset + limit
  }

  const onClickPrevious = () => {
    if (!isPreviousDisabled) {
      const currentOffset = Number(offset)
      const updatedOffset = changePageSize(
        'previous',
        currentOffset,
        limit,
        totalRecords
      )
      changeOffset(updatedOffset)
    }
  }

  const onClickNext = () => {
    if (!isNextDisabled) {
      const currentOffset = Number(offset)
      const updatedOffset = changePageSize(
        'next',
        currentOffset,
        limit,
        totalRecords
      )
      changeOffset(updatedOffset)
    }
  }

  return (
    <>
      {totalRecords > limit &&
        totalRecords !== undefined &&
        !hidePagination && (
          <PaginationWrapper>
            <PaginationButtons
              onClick={onClickPrevious}
              disabled={isPreviousDisabled}
            >
              <SvgArrowLeft />
            </PaginationButtons>
            <PaginationContent>
              {offset + 1} - {getLastRecordNumber()} / {totalRecords}
            </PaginationContent>
            <PaginationButtons disabled={isNextDisabled} onClick={onClickNext}>
              <SvgArrowRight />
            </PaginationButtons>
          </PaginationWrapper>
        )}
    </>
  )
}

export {PaginationWithItemCount}
