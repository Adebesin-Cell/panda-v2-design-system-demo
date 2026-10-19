import { Avatar as ArkAvatar } from '@ark-ui/react/avatar'
import { cx } from '@bethelflow/ds/css'
import { avatar } from '@bethelflow/ds/recipes'

export function Avatar({
  name,
  src,
  color,
  className,
}: {
  name: string
  src?: string
  color?: string
  className?: string
}) {
  const s = avatar()
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return (
    <ArkAvatar.Root className={cx(s.root, className)}>
      <ArkAvatar.Fallback className={s.fallback} style={{ background: color }}>
        {initials}
      </ArkAvatar.Fallback>
      {src && <ArkAvatar.Image className={s.image} src={src} alt={name} />}
    </ArkAvatar.Root>
  )
}
