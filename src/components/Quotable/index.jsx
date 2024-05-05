import { Tooltip } from 'react-tooltip'
import { useRef, useState, useEffect, useCallback } from 'react'

const Quotable = () => {
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

  return (
    <>
      <div className="container inline" ref={childrenRef}>
        <span
          data-tooltip-id="quotable"
          className="quotable"
          onMouseUp={() => {
            const selection = window.getSelection().toString()
            if (selection) {
              setSelectedText(selection)
            }
          }}
          onMouseDown={() => {
            if (selectedText) {
              setSelectedText('')
              removeAllSelectionFromWindow()
            }
          }}
        >
          Quotable
        </span>

        {!!selectedText && (
          <Tooltip id="quotable" effect="solid" className="select-none" isOpen={!!selectedText}>
            <span>{selectedText}</span>
          </Tooltip>
        )}
      </div>
    </>
  )
}

export default Quotable
