import { Switch as ArkSwitch, type SwitchRootProps } from '@ark-ui/react/switch'
import { cx } from '@bethelflow/ds/css'
import { switchRecipe } from '@bethelflow/ds/recipes'

// Ark UI gives the behaviour (state, keyboard, a11y). The Panda slot recipe gives the look.
export function Switch({ children, className, ...props }: SwitchRootProps) {
  const s = switchRecipe()
  return (
    <ArkSwitch.Root className={cx(s.root, className)} {...props}>
      {children && <ArkSwitch.Label className={s.label}>{children}</ArkSwitch.Label>}
      <ArkSwitch.Control className={s.control}>
        <ArkSwitch.Thumb className={s.thumb} />
      </ArkSwitch.Control>
      <ArkSwitch.HiddenInput />
    </ArkSwitch.Root>
  )
}
