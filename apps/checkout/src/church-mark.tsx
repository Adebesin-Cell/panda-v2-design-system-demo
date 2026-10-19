import { css } from 'styled-system/css'

const mark = css({
  w: '10',
  h: '10',
  borderRadius: '12px',
  bg: 'fg',
  color: 'surface',
  display: 'grid',
  placeItems: 'center',
  flexShrink: 0,
})

// Grace Chapel's mark: an arched window with a cross.
export function ChurchMark() {
  return (
    <span className={mark} aria-hidden="true">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 21V11a6 6 0 0 1 12 0v10" />
        <path d="M4 21h16" />
        <path d="M12 7.5v6M9.5 10h5" />
      </svg>
    </span>
  )
}
