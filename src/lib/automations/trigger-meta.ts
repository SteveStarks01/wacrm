import type { AutomationTriggerType } from '@/types'

export interface TriggerMeta {
  label: string
  /** Tailwind classes for the Badge pill on the list row. */
  pillClass: string
}

export const TRIGGER_META: Record<AutomationTriggerType, TriggerMeta> = {
  new_message_received: {
    label: 'New Message',
    pillClass: 'border-primary/30 bg-primary/10 text-primary',
  },
  first_inbound_message: {
    label: 'First Message from Contact',
    pillClass: 'border-[rgb(5_177_105_/_0.3)] bg-[rgb(5_177_105_/_0.1)] text-[var(--semantic-up)]',
  },
  keyword_match: {
    label: 'Keyword Match',
    pillClass: 'border-primary/30 bg-primary/10 text-primary',
  },
  new_contact_created: {
    label: 'New Contact',
    pillClass: 'border-primary/30 bg-primary/10 text-primary',
  },
  conversation_assigned: {
    label: 'Conversation Assigned',
    pillClass: 'border-primary/30 bg-primary/10 text-primary',
  },
  tag_added: {
    label: 'Tag Added',
    pillClass: 'border-[rgb(244_176_0_/_0.35)] bg-[rgb(244_176_0_/_0.12)] text-[#8a6400]',
  },
  time_based: {
    label: 'Time-Based',
    pillClass: 'border-border bg-secondary text-foreground',
  },
}

export function triggerMeta(t: AutomationTriggerType | string): TriggerMeta {
  return (
    TRIGGER_META[t as AutomationTriggerType] ?? {
      label: t,
      pillClass: 'border-border bg-secondary text-foreground',
    }
  )
}

export function formatRelative(iso: string | null | undefined): string {
  if (!iso) return 'never'
  const then = new Date(iso).getTime()
  if (Number.isNaN(then)) return 'never'
  const diffSec = Math.round((Date.now() - then) / 1000)
  if (diffSec < 60) return 'just now'
  if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`
  if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h ago`
  if (diffSec < 2_592_000) return `${Math.floor(diffSec / 86400)}d ago`
  return new Date(iso).toLocaleDateString()
}
