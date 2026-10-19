import {
  Bell,
  Calendar,
  Check,
  Church,
  CreditCard,
  Download,
  Ellipsis,
  FileText,
  HandHeart,
  Info,
  Mail,
  MessageSquare,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react'
import { Avatar } from '@bethelflow/ds/components/avatar'
import { Logo } from '@bethelflow/ds/components/logo'
import { Switch } from '@bethelflow/ds/components/switch'
import { ThemeToggle } from '@bethelflow/ds/components/theme-toggle'
import { css, cx } from 'styled-system/css'
import { Tabs } from '@ark-ui/react/tabs'
import { badge, button, tabs } from 'styled-system/recipes'

/* ---------- layout ---------- */
const page = css({ minH: '100vh', px: '14', py: '10', maxW: '1360px', mx: 'auto' })
const header = css({ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', mb: '10' })
const headLeft = css({ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6' })
const headTitle = css({ textStyle: 'display', fontSize: '6xl', m: '0' })
const headAccent = css({ color: 'primaryText' })
const headRight = css({ display: 'flex', alignItems: 'center', gap: '3' })
const board = css({ display: 'grid', gridTemplateColumns: '1fr 1fr 1.25fr', gap: '6', alignItems: 'start' })
const col = css({ display: 'flex', flexDirection: 'column', gap: '6' })

/* ---------- card ---------- */
const card = css({
  bg: 'surface',
  borderRadius: 'card',
  p: '7',
  boxShadow: '0 1px 2px rgba(17,18,22,0.04), 0 12px 32px -16px rgba(17,18,22,0.12)',
  _dark: { borderWidth: '1px', boxShadow: 'none' },
})
const cardHead = css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '6' })
const cardTitle = css({ textStyle: 'section' })
const micro = css({ textStyle: 'micro' })

/* dark parity */
const darkCard = css({
  bg: 'ink',
  color: 'paper',
  borderRadius: 'card',
  p: '7',
  _dark: { bg: '#1c1d21', borderWidth: '1px' },
})
const darkHead = css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })
const darkTitle = css({
  fontFamily: 'heading',
  fontSize: 'lg',
  fontWeight: '700',
  letterSpacing: '-0.02em',
  color: 'white',
})
const autoChip = css({
  fontSize: '10px',
  fontWeight: '700',
  letterSpacing: '0.08em',
  px: '2.5',
  h: '6',
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: 'full',
  bg: 'rgba(79,131,246,0.18)',
  color: '#8fb0ff',
})
const dots = css({ display: 'flex', gap: '2.5', my: '6' })
const dot = css({ w: '10', h: '10', borderRadius: '12px', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.08)' })
const darkNote = css({ fontSize: 'sm', color: 'rgba(237,236,232,0.75)' })

/* list */
const listRow = css({
  display: 'flex',
  justifyContent: 'space-between',
  py: '3.5',
  borderBottomWidth: '1px',
  _last: { borderBottomWidth: '0', pb: '0' },
})
const rowMain = css({ fontSize: 'sm', fontWeight: '600', mb: '1' })
const rowSub = css({ fontSize: 'xs', color: 'muted' })
const amount = css({
  fontSize: 'sm',
  fontWeight: '700',
  color: 'successText',
  textAlign: 'right',
  fontVariantNumeric: 'tabular-nums',
  mb: '1',
})

/* icons */
const iconGrid = css({ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2.5' })
const iconTile = css({
  aspectRatio: '1',
  borderRadius: 'tile',
  bg: 'tint',
  display: 'grid',
  placeItems: 'center',
  color: 'fg',
})

/* type */
const typeHero = css({ display: 'flex', alignItems: 'center', gap: '6', mb: '6' })
const aa = css({
  fontFamily: 'heading',
  fontSize: '128px',
  fontWeight: '800',
  letterSpacing: '-0.06em',
  lineHeight: '0.85',
})
const glyphs = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1',
  fontSize: '2xl',
  fontWeight: '500',
  color: 'muted',
  fontVariantNumeric: 'tabular-nums',
  letterSpacing: '0.02em',
})
const scaleRow = css({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  py: '4',
  borderTopWidth: '1px',
})

/* controls */
const controls = css({ display: 'flex', flexDirection: 'column', gap: '3' })
const full = css({ w: 'full' })
const fieldBase = {
  display: 'flex',
  alignItems: 'center',
  gap: '3',
  h: '12',
  px: '4',
  borderRadius: 'control',
  fontSize: 'sm',
  borderWidth: '1.5px',
  color: 'muted',
  cursor: 'text',
  transition: 'all 0.15s',
  _focusWithin: { bg: 'surface', borderColor: 'primary', boxShadow: '0 0 0 4px token(colors.primarySubtle)' },
} as const
const field = css(fieldBase, { bg: 'tint', borderColor: 'transparent' })
const fieldValid = css(fieldBase, { bg: 'surface', borderColor: 'success' })
const fieldInput = css({
  flex: '1',
  bg: 'transparent',
  borderWidth: '0',
  fontSize: 'sm',
  fontWeight: '500',
  color: 'fg',
  fontFamily: 'body',
  p: '0',
  _focus: { outline: 'none' },
  _placeholder: { color: 'muted', fontWeight: '400' },
})
const switchRow = css({ w: 'full', justifyContent: 'space-between', pt: '3' })

/* hero */
const hero = css({
  position: 'relative',
  borderRadius: 'card',
  overflow: 'hidden',
  minH: '600px',
  color: 'white',
  p: '7',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundImage: 'url(/service.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})
const heroShade = css({
  position: 'absolute',
  inset: '0',
  backgroundImage: 'linear-gradient(180deg, rgba(10,10,14,0.15) 0%, rgba(10,10,14,0.35) 45%, rgba(10,10,14,0.92) 100%)',
})
const heroTop = css({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})
const liveChip = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '2',
  h: '8',
  px: '3.5',
  borderRadius: 'full',
  borderWidth: '1px',
  borderColor: 'rgba(255,255,255,0.3)',
  bg: 'rgba(255,255,255,0.08)',
  backdropFilter: 'blur(8px)',
  fontSize: '11px',
  fontWeight: '700',
  letterSpacing: '0.08em',
  whiteSpace: 'nowrap',
})
const liveDot = css({
  w: '2',
  h: '2',
  borderRadius: 'full',
  bg: '#4ade80',
  boxShadow: '0 0 0 3px rgba(74,222,128,0.25)',
})
const floatCard = css({
  bg: 'surface',
  color: 'fg',
  borderRadius: '20px',
  p: '4',
  w: '232px',
  display: 'flex',
  flexDirection: 'column',
  gap: '3',
  boxShadow: '0 20px 40px -12px rgba(0,0,0,0.45)',
})
const floatTop = css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })
const floatTime = css({ fontFamily: 'heading', fontSize: 'xl', fontWeight: '700', letterSpacing: '-0.02em' })
const heroBottom = css({ position: 'relative', display: 'flex', flexDirection: 'column', gap: '3' })
const people = css({ display: 'flex', alignItems: 'center', gap: '3', fontSize: 'sm', color: 'rgba(255,255,255,0.85)' })
const avatars = css({ display: 'flex' })
const stack = css({ ml: '-2', _first: { ml: '0' } })
const plus = css({
  w: '9',
  h: '9',
  borderRadius: 'full',
  borderWidth: '2px',
  borderColor: 'rgba(20,20,24,0.9)',
  display: 'grid',
  placeItems: 'center',
  fontSize: 'xs',
  fontWeight: '700',
  color: 'white',
  bg: 'rgba(255,255,255,0.2)',
})
const heroTitle = css({
  fontFamily: 'heading',
  fontSize: '72px',
  fontWeight: '800',
  letterSpacing: '-0.05em',
  lineHeight: '0.95',
})
const heroSub = css({ fontFamily: 'heading', fontSize: '3xl', fontWeight: '700', letterSpacing: '-0.03em' })
const heroNote = css({ fontSize: 'md', color: 'rgba(255,255,255,0.75)' })

/* colour */
const swatchRow = css({ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '2.5', mb: '6' })
const swatchTall = css({
  h: '28',
  borderRadius: 'tile',
  borderWidth: '1px',
  borderColor: 'rgba(17,18,22,0.06)',
  _dark: { borderColor: 'rgba(255,255,255,0.1)' },
})
const swatchName = css({ fontSize: '10px', fontWeight: '700', letterSpacing: '0.08em', mt: '2.5' })
const swatchHex = css({ fontSize: '10px', color: 'muted', fontVariantNumeric: 'tabular-nums' })
const ramp = css({ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '2' })
const rampStep = css({
  h: '11',
  borderRadius: '12px',
  borderWidth: '1px',
  borderColor: 'rgba(17,18,22,0.06)',
  _dark: { borderColor: 'rgba(255,255,255,0.1)' },
})

const gifts = [
  { kind: 'tithe', who: 'Ada Okafor', what: 'Tithe · Monthly', how: 'Visa •••• 4924', amount: '+₦50,000' },
  { kind: 'other', who: 'Tunde Bello', what: 'Building fund', how: 'Transfer', amount: '+₦120,000' },
  { kind: 'offering', who: 'Grace Eze', what: 'Sunday offering', how: 'Mastercard •••• 1180', amount: '+₦15,000' },
  { kind: 'other', who: 'Samuel Ojo', what: 'Missions · Quarterly', how: 'Apple Pay •••• 8801', amount: '+₦30,000' },
]
const icons = [
  Calendar,
  Users,
  CreditCard,
  MessageSquare,
  TrendingUp,
  Church,
  HandHeart,
  Check,
  Plus,
  Search,
  Bell,
  Settings,
  FileText,
  ShieldCheck,
  Ellipsis,
]
const colours = [
  { name: 'ACCENT', hex: '#2463EB', bg: '#2463eb' },
  { name: 'INK', hex: '#111216', bg: '#111216' },
  { name: 'INK 2', hex: '#5B5D64', bg: '#5b5d64' },
  { name: 'PAPER', hex: '#EDECE8', bg: '#edece8' },
  { name: 'OK', hex: '#22AC77', bg: '#22ac77' },
  { name: 'ERROR', hex: '#D9483B', bg: '#d9483b' },
]
const neutrals = ['#ffffff', '#f3f4f6', '#e5e6ea', '#c9c8c2', '#9a9ca3', '#5b5d64', '#2a2b30', '#111216']
const faces = [
  { name: 'Ada Okafor', bg: '#2463eb' },
  { name: 'Tunde Bello', bg: '#13704c' },
  { name: 'Grace Eze', bg: '#b45309' },
  { name: 'Samuel Ojo', bg: '#6d28d9' },
]

const tabsUi = tabs()

export function App() {
  return (
    <div className={page}>
      <header className={header}>
        <div className={headLeft}>
          <Logo />
          <div>
            <span className={micro}>Design system · @bethelflow/ds</span>
            <h1 className={headTitle}>
              Your whole church, <span className={headAccent}>in one flow.</span>
            </h1>
          </div>
        </div>
        <div className={headRight}>
          <span className={badge({ tone: 'primary' })}>Panda CSS v2</span>
          <ThemeToggle />
        </div>
      </header>

      <main className={board}>
        {/* column 1 */}
        <div className={col}>
          <div className={darkCard}>
            <div className={darkHead}>
              <span className={darkTitle}>Dark parity</span>
              <span className={autoChip}>AUTO</span>
            </div>
            <div className={dots}>
              {['#2463eb', '#edece8', '#9a9ca3', '#2a2b30', '#16171a', '#22ac77', '#d9483b'].map((c) => (
                <span key={c} className={dot} style={{ background: c }} />
              ))}
            </div>
            <p className={darkNote}>Every token carries a night value. One set, two modes.</p>
          </div>

          <div className={card}>
            <Tabs.Root defaultValue="all" className={tabsUi.root}>
              <div className={cardHead}>
                <span className={cx(cardTitle, css({ display: 'flex', alignItems: 'center', gap: '2' }))}>
                  Recent giving <Info size={16} strokeWidth={2} />
                </span>
                <Tabs.List className={tabsUi.list}>
                  <Tabs.Trigger value="all" className={tabsUi.trigger}>
                    All
                  </Tabs.Trigger>
                  <Tabs.Trigger value="tithe" className={tabsUi.trigger}>
                    Tithes
                  </Tabs.Trigger>
                  <Tabs.Trigger value="offering" className={tabsUi.trigger}>
                    Offerings
                  </Tabs.Trigger>
                </Tabs.List>
              </div>
              {['all', 'tithe', 'offering'].map((tab) => (
                <Tabs.Content key={tab} value={tab} className={tabsUi.content}>
                  {gifts
                    .filter((g) => tab === 'all' || g.kind === tab)
                    .map((g) => (
                      <div key={g.who} className={listRow}>
                        <div>
                          <div className={rowMain}>{g.what}</div>
                          <div className={rowSub}>{g.who}</div>
                        </div>
                        <div>
                          <div className={amount}>{g.amount}</div>
                          <div className={rowSub}>{g.how}</div>
                        </div>
                      </div>
                    ))}
                </Tabs.Content>
              ))}
            </Tabs.Root>
          </div>

          <div className={card}>
            <div className={cardHead}>
              <span className={cardTitle}>Icons</span>
              <span className={micro}>Lucide · 1.5 stroke · 24 px</span>
            </div>
            <div className={iconGrid}>
              {icons.map((Icon, i) => (
                <span key={i} className={iconTile}>
                  <Icon size={22} strokeWidth={1.5} />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* column 2 */}
        <div className={col}>
          <div className={card}>
            <div className={cardHead}>
              <span className={cardTitle}>Rethink Sans</span>
              <span className={micro}>Variable · 400 – 800</span>
            </div>
            <div className={typeHero}>
              <span className={aa}>Aa</span>
              <div className={glyphs}>
                <span>0123456</span>
                <span>789 ₦ %</span>
                <span>+ − → ✓</span>
              </div>
            </div>
            <div className={scaleRow}>
              <span
                className={css({
                  fontFamily: 'heading',
                  fontSize: '3xl',
                  fontWeight: '800',
                  letterSpacing: '-0.035em',
                })}
              >
                Attendance
              </span>
              <span className={micro}>Display 32</span>
            </div>
            <div className={scaleRow}>
              <span
                className={css({ fontFamily: 'heading', fontSize: 'xl', fontWeight: '700', letterSpacing: '-0.02em' })}
              >
                Members this week
              </span>
              <span className={micro}>Title 20</span>
            </div>
            <div className={scaleRow}>
              <span className={css({ fontSize: 'md' })}>Body copy sits at fifteen</span>
              <span className={micro}>Body 15</span>
            </div>
          </div>

          <div className={card}>
            <div className={cardHead}>
              <span className={cardTitle}>Controls</span>
              <span className={micro}>One height · One radius</span>
            </div>
            <div className={controls}>
              <button className={cx(button({ variant: 'solid', size: 'lg' }), full)}>
                <Plus size={18} /> Register for event
              </button>
              <button className={cx(button({ variant: 'outline', size: 'lg' }), full)}>
                <Download size={18} /> Export members
              </button>
              <label className={field}>
                <Mail size={18} />
                <input className={fieldInput} type="email" placeholder="Email address" aria-label="Email address" />
              </label>
              <label className={fieldValid}>
                <Mail size={18} />
                <input
                  className={fieldInput}
                  type="email"
                  defaultValue="ada@gracechapel.org"
                  aria-label="Verified email address"
                />
                <Check size={18} className={css({ color: 'success' })} aria-label="Verified" />
              </label>
              <Switch defaultChecked className={switchRow}>
                Auto-send giving receipts
              </Switch>
            </div>
          </div>
        </div>

        {/* column 3 */}
        <div className={col}>
          <div className={hero}>
            <div className={heroShade} />
            <div className={heroTop}>
              <span className={liveChip}>
                <span className={liveDot} /> LIVE NOW
              </span>
              <div className={floatCard}>
                <div className={floatTop}>
                  <span className={micro}>Next event</span>
                  <span className={badge({ tone: 'success' })}>Open</span>
                </div>
                <span className={floatTime}>Tonight · 18:30</span>
                <button className={button({ variant: 'solid', size: 'md' })}>
                  <Plus size={16} /> Check in
                </button>
              </div>
            </div>
            <div className={heroBottom}>
              <div className={people}>
                <span className={avatars}>
                  {faces.map((f) => (
                    <Avatar key={f.name} name={f.name} color={f.bg} className={stack} />
                  ))}
                  <span className={cx(stack, plus)}>+48</span>
                </span>
                186 registered · 24 volunteers
              </div>
              <span className={heroTitle}>Youth Night</span>
              <span className={heroSub}>Worship · Games · 2 hrs</span>
              <span className={heroNote}>Reminders sent, tickets scanned, volunteers on standby.</span>
            </div>
          </div>

          <div className={card}>
            <div className={cardHead}>
              <span className={cardTitle}>Colour</span>
              <span className={micro}>1 accent · 13 tokens · 2 themes</span>
            </div>
            <div className={swatchRow}>
              {colours.map((c) => (
                <div key={c.name}>
                  <div className={swatchTall} style={{ background: c.bg }} />
                  <div className={swatchName}>{c.name}</div>
                  <div className={swatchHex}>{c.hex}</div>
                </div>
              ))}
            </div>
            <div className={ramp}>
              {neutrals.map((n) => (
                <span key={n} className={rampStep} style={{ background: n }} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
