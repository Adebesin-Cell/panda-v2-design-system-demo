import { useState } from 'react'
import { RadioGroup } from '@ark-ui/react/radio-group'
import {
  ArrowLeft,
  Building2,
  Check,
  CreditCard,
  Crown,
  Mail,
  Minus,
  Phone,
  Plus,
  ShoppingBag,
  Store,
  Ticket,
  User,
} from 'lucide-react'
import { Logo } from '@bethelflow/ds/components/logo'
import { ThemeToggle } from '@bethelflow/ds/components/theme-toggle'
import { css, cx } from 'styled-system/css'
import { badge, button, radioGroup } from 'styled-system/recipes'
import { ChurchMark } from './church-mark'

// Every token, recipe and the dark theme come from @bethelflow/ds via `designSystem`. This app defines none of them.

/* nav */
const nav = css({ borderBottomWidth: '1px' })
const navInner = css({
  maxW: '1200px',
  mx: 'auto',
  px: '8',
  h: '72px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})
const church = css({ display: 'flex', alignItems: 'center', gap: '3', color: 'fg', textDecoration: 'none' })
const churchName = css({ display: 'flex', flexDirection: 'column', lineHeight: '1.1' })
const churchTitle = css({ fontFamily: 'heading', fontWeight: '800', fontSize: 'lg', letterSpacing: '-0.02em' })
const churchPlace = css({ fontSize: 'xs', color: 'muted', fontWeight: '500' })
const links = css({
  display: 'flex',
  gap: '9',
  fontSize: 'sm',
  fontWeight: '500',
  listStyle: 'none',
  m: '0',
  p: '0',
  '& a': {
    color: 'muted',
    textDecoration: 'none',
    borderRadius: '6px',
    _hover: { color: 'fg' },
    _focusVisible: { outline: '2px solid', outlineColor: 'primary', outlineOffset: '4px' },
  },
  '& a[aria-current=page]': { color: 'fg', fontWeight: '600' },
})
const iconBtn = css({
  w: '10',
  h: '10',
  display: 'grid',
  placeItems: 'center',
  borderRadius: 'full',
  bg: 'transparent',
  color: 'fg',
  cursor: 'pointer',
  _hover: { bg: 'tint' },
  _focusVisible: { outline: '2px solid', outlineColor: 'primary', outlineOffset: '2px' },
})
const navRight = css({ display: 'flex', alignItems: 'center', gap: '4', color: 'fg' })

/* page */
const shell = css({ minH: '100vh', bg: 'surface' })
const page = css({ maxW: '1200px', mx: 'auto', px: '8', pt: '8', pb: '16' })
const crumb = css({
  display: 'flex',
  alignItems: 'center',
  gap: '2',
  fontSize: 'sm',
  fontWeight: '600',
  mb: '8',
  '& a': {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '2',
    color: 'muted',
    textDecoration: 'none',
    fontWeight: '500',
    borderRadius: '6px',
    _hover: { color: 'fg' },
    _focusVisible: { outline: '2px solid', outlineColor: 'primary', outlineOffset: '2px' },
  },
})
const crumbMuted = css({ color: 'muted', fontWeight: '500' })
const layout = css({ display: 'grid', gridTemplateColumns: '1fr 440px', gap: '12', alignItems: 'start' })

/* steps */
const steps = css({ display: 'grid', gridTemplateColumns: '1fr 1fr', mb: '10', listStyle: 'none', p: '0', mt: '0' })
const step = css({
  display: 'flex',
  alignItems: 'center',
  gap: '2.5',
  pb: '4',
  fontSize: 'sm',
  fontWeight: '600',
  color: 'muted',
  borderBottomWidth: '2px',
  borderColor: 'border',
})
const stepActive = css({ color: 'fg', borderColor: 'fg' })
const stepDot = css({
  w: '5',
  h: '5',
  borderRadius: 'full',
  bg: 'border',
  color: 'surface',
  display: 'grid',
  placeItems: 'center',
})
const stepDotActive = css({ bg: 'fg' })

/* form */
const sectionTitle = css({
  fontFamily: 'heading',
  fontSize: '2xl',
  fontWeight: '800',
  letterSpacing: '-0.03em',
  m: '0',
})
const sectionSub = css({ fontSize: 'sm', color: 'muted', mt: '1.5', mb: '6' })
const grid2 = css({ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3', mb: '3' })
const fieldBase = {
  display: 'flex',
  alignItems: 'center',
  gap: '3',
  px: '4',
  h: '16',
  borderRadius: 'control',
  borderWidth: '1.5px',
  bg: 'surface',
} as const
const field = css(fieldBase, {
  borderColor: 'border',
  borderWidth: '1px',
  cursor: 'text',
  transition: 'border-color 0.15s, box-shadow 0.15s',
  _focusWithin: { borderColor: 'fg', boxShadow: '0 0 0 3px token(colors.primarySubtle)' },
})
const fieldIcon = css({ color: 'muted', flexShrink: 0 })
const fieldText = css({ display: 'flex', flexDirection: 'column', gap: '0.5', flex: '1' })
const fieldLabel = css({ fontSize: 'xs', color: 'muted' })
const fieldInput = css({
  fontSize: 'sm',
  fontWeight: '600',
  color: 'fg',
  bg: 'transparent',
  fontFamily: 'body',
  p: '0',
  w: 'full',
  _focus: { outline: 'none' },
})
const methods = css({ mt: '10' })
const methodIcon = css({
  w: '10',
  h: '10',
  borderRadius: '10px',
  bg: 'tint',
  display: 'grid',
  placeItems: 'center',
  color: 'fg',
  flexShrink: 0,
})
const methodHint = css({ display: 'block', fontSize: 'xs', color: 'muted', fontWeight: '400', mt: '0.5' })

/* summary */
const summary = css({ bg: 'tint', borderRadius: 'card', p: '7', position: 'sticky', top: '6' })
const banner = css({
  h: '32',
  borderRadius: 'tile',
  mb: '5',
  p: '4',
  display: 'flex',
  alignItems: 'flex-end',
  backgroundImage: 'linear-gradient(180deg, rgba(10,10,14,0) 30%, rgba(10,10,14,0.8) 100%), url(/conference.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center 35%',
})
const bannerTheme = css({
  color: 'white',
  fontSize: 'xs',
  fontWeight: '700',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
})
const summaryTitle = css({ fontFamily: 'heading', fontSize: 'xl', fontWeight: '800', letterSpacing: '-0.02em', m: '0' })
const item = css({
  display: 'flex',
  alignItems: 'center',
  gap: '4',
  p: '4',
  borderRadius: 'tile',
  bg: 'surface',
  mb: '3',
})
const thumb = css({
  w: '12',
  h: '12',
  borderRadius: '14px',
  flexShrink: 0,
  bg: 'primarySubtle',
  color: 'primary',
  display: 'grid',
  placeItems: 'center',
})
const itemBody = css({ flex: '1', display: 'flex', flexDirection: 'column', gap: '0.5' })
const itemTop = css({ display: 'flex', justifyContent: 'space-between', gap: '3' })
const itemName = css({
  fontFamily: 'heading',
  fontSize: 'sm',
  fontWeight: '700',
  letterSpacing: '-0.01em',
  lineHeight: '1.3',
})
const qtyLabel = css({ fontSize: 'xs', color: 'muted' })
const stepper = css({ display: 'flex', alignItems: 'center', gap: '1' })
const qtyBtn = css({
  w: '7',
  h: '7',
  borderRadius: '8px',
  bg: 'tint',
  borderWidth: '0',
  color: 'fg',
  display: 'grid',
  placeItems: 'center',
  cursor: 'pointer',
  _hover: { bg: 'border' },
  _disabled: { opacity: 0.35, cursor: 'not-allowed' },
  _focusVisible: { outline: '2px solid', outlineColor: 'primary', outlineOffset: '2px' },
})
const qty = css({ w: '7', textAlign: 'center', fontSize: 'sm', fontWeight: '700', fontVariantNumeric: 'tabular-nums' })
const subtotal = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  py: '5',
  mt: '3',
  borderTopWidth: '1px',
  borderBottomWidth: '1px',
  fontFamily: 'heading',
  fontWeight: '800',
  letterSpacing: '-0.02em',
})
const subtotalLabel = css({ fontSize: 'md' })
const subtotalValue = css({ fontSize: '2xl', fontVariantNumeric: 'tabular-nums' })
const lines = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '3',
  py: '5',
  fontSize: 'sm',
  color: 'muted',
  fontVariantNumeric: 'tabular-nums',
})
const line = css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })
const lineLeft = css({ display: 'flex', alignItems: 'center', gap: '2' })
const lineValue = css({ color: 'fg', fontWeight: '600' })
const pay = css({ w: 'full', h: '14', borderRadius: 'full', fontSize: 'md' })
const footer = css({ borderTopWidth: '1px', mt: '4' })
const footerInner = css({
  maxW: '1200px',
  mx: 'auto',
  px: '8',
  py: '6',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 'xs',
  color: 'muted',
})
const footerLinks = css({
  display: 'flex',
  gap: '5',
  '& a': {
    color: 'muted',
    textDecoration: 'none',
    _hover: { color: 'fg' },
    _focusVisible: { outline: '2px solid', outlineColor: 'primary', outlineOffset: '2px' },
  },
})
const secured = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2',
  mt: '4',
  fontSize: 'xs',
  color: 'muted',
})
const securedLogo = css({ display: 'inline-flex', '& svg': { h: '4' } })

const tickets = [
  { id: 'general', name: 'General admission', price: 5000, Icon: Ticket },
  { id: 'vip', name: 'VIP · front rows', price: 15000, Icon: Crown },
]
const naira = (n: number) => `₦${n.toLocaleString()}`

export function App() {
  const [qtys, setQtys] = useState<Record<string, number>>({ general: 2, vip: 1 })
  const [method, setMethod] = useState('card')
  const change = (id: string, by: number) => setQtys((q) => ({ ...q, [id]: Math.max(0, Math.min(9, q[id] + by)) }))
  const count = Object.values(qtys).reduce((a, b) => a + b, 0)
  const sub = tickets.reduce((sum, t) => sum + t.price * qtys[t.id], 0)
  const discount = sub > 0 ? 2000 : 0
  const fee = Math.round(sub * 0.015)
  const total = Math.max(0, sub - discount + fee)
  const rg = radioGroup()

  return (
    <div className={shell}>
      <nav className={nav}>
        <div className={navInner}>
          <a href="/" className={church} aria-label="Grace Chapel home">
            <ChurchMark />
            <span className={churchName}>
              <span className={churchTitle}>Grace Chapel</span>
              <span className={churchPlace}>Lekki, Lagos</span>
            </span>
          </a>
          <ul className={links}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/events" aria-current="page">
                Events
              </a>
            </li>
            <li>
              <a href="/give">Give</a>
            </li>
            <li>
              <a href="/sermons">Sermons</a>
            </li>
            <li>
              <a href="/live">Watch live</a>
            </li>
          </ul>
          <div className={navRight}>
            <ThemeToggle />
            <button className={iconBtn} aria-label={`Cart, ${count} tickets`}>
              <ShoppingBag size={20} strokeWidth={1.75} />
            </button>
            <button className={button({ variant: 'ink', size: 'sm' })}>Sign in</button>
          </div>
        </div>
      </nav>

      <main className={page}>
        <nav aria-label="Breadcrumb" className={crumb}>
          <a href="/events">
            <ArrowLeft size={16} /> Events
          </a>
          <span className={crumbMuted} aria-hidden="true">
            /
          </span>
          <span aria-current="page">Youth Conference 2026</span>
        </nav>

        <div className={layout}>
          <section>
            <ol className={steps} aria-label="Checkout progress">
              <li className={cx(step, stepActive)} aria-current="step">
                <span className={cx(stepDot, stepDotActive)}>
                  <Check size={12} strokeWidth={3} />
                </span>{' '}
                Your details
              </li>
              <li className={step}>
                <span className={stepDot} /> Payment
              </li>
            </ol>

            <h1 className={sectionTitle}>Check out your tickets</h1>
            <p className={sectionSub}>We'll send your tickets and a reminder to this email before the event.</p>

            <div className={grid2}>
              <label className={field}>
                <User size={18} className={fieldIcon} />
                <span className={fieldText}>
                  <span className={fieldLabel}>First name</span>
                  <input className={fieldInput} autoComplete="given-name" defaultValue="Ada" />
                </span>
              </label>
              <label className={field}>
                <User size={18} className={fieldIcon} />
                <span className={fieldText}>
                  <span className={fieldLabel}>Last name</span>
                  <input className={fieldInput} autoComplete="family-name" defaultValue="Okafor" />
                </span>
              </label>
            </div>
            <div className={grid2}>
              <label className={field}>
                <Mail size={18} className={fieldIcon} />
                <span className={fieldText}>
                  <span className={fieldLabel}>Email</span>
                  <input className={fieldInput} type="email" autoComplete="email" defaultValue="ada@gracechapel.org" />
                </span>
              </label>
              <label className={field}>
                <Phone size={18} className={fieldIcon} />
                <span className={fieldText}>
                  <span className={fieldLabel}>Phone</span>
                  <input className={fieldInput} type="tel" autoComplete="tel" defaultValue="+234 803 555 0142" />
                </span>
              </label>
            </div>

            <div className={methods}>
              <h2 className={sectionTitle}>Payment method</h2>
              <p className={sectionSub}>Choose how you'd like to pay for your tickets.</p>
              <RadioGroup.Root
                value={method}
                onValueChange={(e) => setMethod(e.value ?? 'card')}
                className={rg.root}
                aria-label="Payment method"
              >
                {[
                  { value: 'card', label: 'Card', hint: 'Visa, Mastercard, Verve', Icon: CreditCard },
                  {
                    value: 'transfer',
                    label: 'Bank transfer',
                    hint: 'Pay into Grace Chapel’s account',
                    Icon: Building2,
                  },
                  { value: 'door', label: 'Pay at the door', hint: 'Reserve now, pay on the night', Icon: Store },
                ].map(({ value, label, hint, Icon }) => (
                  <RadioGroup.Item key={value} value={value} className={rg.item}>
                    <span className={methodIcon}>
                      <Icon size={18} strokeWidth={1.75} />
                    </span>
                    <RadioGroup.ItemText className={rg.itemText}>
                      {label}
                      <span className={methodHint}>{hint}</span>
                    </RadioGroup.ItemText>
                    <RadioGroup.ItemControl className={rg.itemControl} />
                    <RadioGroup.ItemHiddenInput />
                  </RadioGroup.Item>
                ))}
              </RadioGroup.Root>
            </div>
          </section>

          <aside className={summary} aria-labelledby="order-title">
            <div className={banner}>
              <span className={bannerTheme}>Rooted · Colossians 2:7</span>
            </div>
            <h2 className={summaryTitle} id="order-title">
              Youth Conference 2026
            </h2>
            <p className={sectionSub}>Sat, 14 Nov · 10:00 AM · Main Auditorium, Lekki</p>

            {tickets.map((t) => (
              <div key={t.id} className={item}>
                <span className={thumb}>
                  <t.Icon size={20} strokeWidth={1.75} />
                </span>
                <div className={itemBody}>
                  <span className={itemName}>{t.name}</span>
                  <span className={qtyLabel}>{naira(t.price)} each</span>
                </div>
                <div className={itemTop}>
                  <div className={stepper}>
                    <button
                      className={qtyBtn}
                      onClick={() => change(t.id, -1)}
                      disabled={qtys[t.id] === 0}
                      aria-label={`Remove one ${t.name}`}
                    >
                      <Minus size={14} />
                    </button>
                    <span className={qty} aria-live="polite" aria-label={`${qtys[t.id]} ${t.name}`}>
                      {qtys[t.id]}
                    </span>
                    <button className={qtyBtn} onClick={() => change(t.id, 1)} aria-label={`Add one ${t.name}`}>
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className={subtotal}>
              <span className={subtotalLabel}>
                Subtotal · {count} {count === 1 ? 'ticket' : 'tickets'}
              </span>
              <span className={subtotalValue} aria-live="polite">
                {naira(sub)}
              </span>
            </div>
            <div className={lines}>
              <div className={line}>
                <span className={lineLeft}>
                  Promo · YOUTH26 <span className={badge({ tone: 'success' })}>Applied</span>
                </span>
                <span className={lineValue}>−{naira(discount)}</span>
              </div>
              <div className={line}>
                <span>Service fee</span>
                <span className={lineValue}>{naira(fee)}</span>
              </div>
            </div>
            <button className={cx(button({ variant: 'solid', size: 'lg' }), pay)} disabled={count === 0}>
              Pay {naira(total)}
            </button>
            <div className={secured}>
              Payments secured by{' '}
              <span className={securedLogo}>
                <Logo />
              </span>
            </div>
          </aside>
        </div>
      </main>

      <footer className={footer}>
        <div className={footerInner}>
          <span>Grace Chapel · 12 Admiralty Way, Lekki Phase 1, Lagos</span>
          <span className={footerLinks}>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy</a>
            <a href="/refunds">Refund policy</a>
          </span>
        </div>
      </footer>
    </div>
  )
}
