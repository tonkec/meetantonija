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

  const handleClickOutside = useCallback(
    (event) => {
      if (childrenRef.current && !childrenRef.current.contains(event.target)) {
        if (selectedText) {
          setSelectedText('')
          setSelectionStartIndex(0)
          setSelectionEndIndex(0)
          removeAllSelectionFromWindow()
        }
      }
    },
    [selectedText]
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

    return children
  }
  const getPostSelectedText = (children) => {
    if (selectedText.trim() === children) {
      return
    }

    if (typeof children === 'string') {
      return children.slice(selectionEndIndex)
    }


    return children
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
              selection.anchorOffset < selection.focusOffset
                ? selection.anchorOffset
                : selection.focusOffset
            )
            setSelectionEndIndex(
              selection.anchorOffset < selection.focusOffset
                ? selection.focusOffset
                : selection.anchorOffset
            )
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
            <span style={{ userSelect: 'none' }}>
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
            >
              {selectedText}
            </span>
            {/* https://codesandbox.io/p/sandbox/gifted-parm-42xel?file=%2Fsrc%2FTooltip.tsx%3A40%2C7-40%2C25 */}
            <Tooltip
                id="quotable"
                effect="solid"
                style={{
                  maxWidth: '400px',
                }}
                clickable
                globalEventOff={"click"}
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
            <span style={{ userSelect: 'none' }}>
              {getPostSelectedText(children)}
            </span>
          </>
        ) : (
          <>{children}</>
        )}
      </span>
    </>
  )
}

export default Quotable
