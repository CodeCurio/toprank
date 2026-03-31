import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'

export const SuggestionList = forwardRef((props: any, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectItem = (index: number) => {
    const item = props.items[index]
    if (item) {
      props.command(item)
    }
  }

  const upHandler = () => {
    setSelectedIndex(((selectedIndex + props.items.length) - 1) % props.items.length)
  }

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length)
  }

  const enterHandler = () => {
    selectItem(selectedIndex)
  }

  useEffect(() => setSelectedIndex(0), [props.items])

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }: any) => {
      if (event.key === 'ArrowUp') {
        upHandler()
        return true
      }
      if (event.key === 'ArrowDown') {
        downHandler()
        return true
      }
      if (event.key === 'Enter') {
        enterHandler()
        return true
      }
      return false
    },
  }))

  return (
    <div className="bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden flex flex-col min-w-[200px] z-[999]">
      {props.items.length
        ? props.items.map((item: any, index: number) => (
          <button
            className={`flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 transition-colors text-left ${index === selectedIndex ? 'bg-blue-50 text-blue-700 font-bold' : ''}`}
            key={index}
            onClick={() => selectItem(index)}
          >
            {item.icon && <span className="opacity-60">{item.icon}</span>}
            {item.title}
          </button>
        ))
        : <div className="px-4 py-2 text-sm text-slate-400">No results found</div>
      }
    </div>
  )
})

SuggestionList.displayName = 'SuggestionList'
