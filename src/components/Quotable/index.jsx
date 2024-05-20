import { Tooltip } from 'react-tooltip'
import { useRef, useState, useEffect, useCallback } from 'react'
import { truncateString } from '../../utils'
import { FaTwitter } from 'react-icons/fa'

const Quotable = ({ children }) => {
  const [selectionStartIndex, setSelectionStartIndex] = useState(0)
  const [selectionEndIndex, setSelectionEndIndex] = useState(0)
  const [selectedText, setSelectedText] = useState('')

  const childrenRef = useRef()

  const removeAllSelectionFromWindow = () => {
    var selection = window.getSelection
      ? window.getSelection()
      : document.selection
    if (selection) {
      if (selection.removeAllRanges) {
        selection.removeAllRanges()
      } else if (selection.empty) {
        selection.empty()
      }
    }
  }

  const resetSelection = useCallback(() => {
    setSelectedText('')
    setSelectionStartIndex(0)
    setSelectionEndIndex(0)
    removeAllSelectionFromWindow()
  }, [])

  const handleClickOutside = useCallback(
    (event) => {
      if (childrenRef.current && !childrenRef.current.contains(event.target)) {
        if (selectedText) {
          resetSelection()
        }
      }
    },
    [selectedText, resetSelection]
  )

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [handleClickOutside])

  const getPreSelectedText = (children) => {
    if (selectedText.trim() === children) {
      return
    }
    if (typeof children === 'string') {
      return children.slice(0, selectionStartIndex)
    }

    if (Array.isArray(children)) {
      resetSelection()
    }

    return children
  }
  const getPostSelectedText = (children) => {
    if (selectedText.trim() === children) {
      return
    }

    if (typeof children === 'string') {
      return children.slice(selectionEndIndex)
    }

    if (Array.isArray(children)) {
      resetSelection()
    }
  }

  return (
    <>
      <span
        ref={childrenRef}
        onMouseUp={() => {
          const selection = window.getSelection()
          const selectionString = selection.toString()
          if (selectionString.trim()) {
            setSelectedText(selectionString)
            setSelectionStartIndex(
              selection.anchorOffset > selection.focusOffset
                ? selection.focusOffset
                : selection.anchorOffset
            )
            setSelectionEndIndex(
              selection.anchorOffset > selection.focusOffset
                ? selection.anchorOffset
                : selection.focusOffset
            )

            selection.removeAllRanges()
          }
        }}
        onMouseDown={() => {
          removeAllSelectionFromWindow()
          setSelectedText('')
          setSelectionStartIndex(0)
          setSelectionEndIndex(0)
        }}
      >
        {selectedText.length > 0 ? (
          <>
            <span>
              {getPreSelectedText(children)}
            </span>
            <span
              style={{
                userSelect: 'none',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              data-tooltip-id="quotable"
              data-event="click"
              className="bg-orange selection underline"
            >
              {selectedText}
            </span>
            <span>{getPostSelectedText(children)}</span>
          </>
        ) : (
          <>{children}</>
        )}
      </span>
      {selectedText.length > 0 && (
        <Tooltip
          id="quotable"
          effect="solid"
          style={{
            maxWidth: '400px',
          }}
          clickable
          globalEventOff="click"
        >
          <a
            href={`https://twitter.com/intent/tweet?text=${selectedText}`}
            className="text-white no-underline"
            target="_blank"
            rel="noreferrer"
          >
            {`"${truncateString(selectedText, 200).trim()}"`}{' '}
            <FaTwitter fontSize="10px" color="#1DA1F2" />
          </a>
        </Tooltip>
      )}
    </>
  )
}

export default Quotable
