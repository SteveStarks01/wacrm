/**
 * Shared status badge config for broadcasts + recipients.
 *
 * Previously `statusConfig` was defined inline in both
 * /broadcasts/page.tsx and /broadcasts/[id]/page.tsx with slight
 * drift risk. One source of truth now.
 *
 * Uses the DESIGN.md semantic palette instead of feature-local colors.
 */

import type { BroadcastStatus, RecipientStatus } from "@/types";

export interface StatusDisplay {
  label: string;
  classes: string;
  /**
   * Set true for statuses that should pulse in the UI to convey
   * "live / in-flight" — currently only `sending`.
   */
  pulse?: boolean;
}

export const broadcastStatusConfig: Record<BroadcastStatus, StatusDisplay> = {
  draft: {
    label: "Draft",
    classes: "bg-secondary text-muted-foreground border-border",
  },
  scheduled: {
    label: "Scheduled",
    classes: "bg-primary/10 text-primary border-primary/20",
  },
  sending: {
    label: "Sending",
    classes: "bg-[rgb(244_176_0_/_0.12)] text-[#8a6400] border-[rgb(244_176_0_/_0.35)]",
    pulse: true,
  },
  sent: {
    label: "Sent",
    classes: "bg-primary/10 text-primary border-primary/20",
  },
  failed: {
    label: "Failed",
    classes: "bg-destructive/10 text-destructive border-destructive/20",
  },
};

export const recipientStatusConfig: Record<RecipientStatus, StatusDisplay> = {
  pending: {
    label: "Pending",
    classes: "bg-secondary text-muted-foreground border-border",
  },
  sent: {
    label: "Sent",
    classes: "bg-primary/10 text-primary border-primary/20",
  },
  delivered: {
    label: "Delivered",
    classes: "bg-primary/10 text-primary border-primary/20",
  },
  read: {
    label: "Read",
    classes: "bg-primary/10 text-primary border-primary/20",
  },
  replied: {
    label: "Replied",
    classes: "bg-secondary text-foreground border-border",
  },
  failed: {
    label: "Failed",
    classes: "bg-destructive/10 text-destructive border-destructive/20",
  },
};

/**
 * Tolerant lookup — callers often have a generic string status
 * coming from Supabase. Falls back to the "draft" / "pending"
 * entry so the UI never crashes on an unknown value.
 */
export function getBroadcastStatus(status: string): StatusDisplay {
  return (
    broadcastStatusConfig[status as BroadcastStatus] ??
    broadcastStatusConfig.draft
  );
}

export function getRecipientStatus(status: string): StatusDisplay {
  return (
    recipientStatusConfig[status as RecipientStatus] ??
    recipientStatusConfig.pending
  );
}
