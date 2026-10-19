import { Switch } from '@ark-ui/react/switch'
import { css } from '@bethelflow/ds/css'

// Built on Ark UI Switch: real switch semantics, keyboard support, and data-state for styling.
const root = css({ display: 'inline-flex', cursor: 'pointer' })
const control = css({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  w: '16',
  h: '9',
  px: '2.5',
  borderRadius: 'full',
  bg: 'tint',
  borderWidth: '1px',
  color: 'muted',
  transition: 'background-color 0.3s',
  _focusVisible: { outline: '2px solid', outlineColor: 'primary', outlineOffset: '2px' },
})
const thumb = css({
  position: 'absolute',
  top: '1',
  left: '1',
  w: '7',
  h: '7',
  borderRadius: 'full',
  bg: 'surface',
  color: 'primary',
  display: 'grid',
  placeItems: 'center',
  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
  _checked: { transform: 'translateX(28px)' },
})
const icon = css({ w: '3.5', h: '3.5' })

const Sun = () => (
  <svg className={icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
)
const Moon = () => (
  <svg
    className={icon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
)

export function ThemeToggle() {
  return (
    <Switch.Root
      className={root}
      aria-label="Toggle dark mode"
      onCheckedChange={({ checked }) => document.documentElement.classList.toggle('dark', checked)}
    >
      <Switch.Context>
        {(api) => (
          <Switch.Control className={control}>
            <Sun />
            <Moon />
            <Switch.Thumb className={thumb}>{api.checked ? <Moon /> : <Sun />}</Switch.Thumb>
          </Switch.Control>
        )}
      </Switch.Context>
      <Switch.HiddenInput />
    </Switch.Root>
  )
}
