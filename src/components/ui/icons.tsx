"use client";

import * as React from "react";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  AlertCircleIcon,
  ArrowDownIcon,
  ArrowDownRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArchiveIcon,
  Award01Icon,
  BarChartIcon,
  BriefcaseIcon,
  Building02Icon,
  CalendarIcon,
  CallIcon,
  CancelCircleIcon,
  CancelIcon,
  CheckListIcon,
  CheckmarkCircleIcon,
  CheckmarkCircle02Icon,
  CheckmarkSquareIcon,
  CircleArrowDownIcon,
  CircleArrowLeftIcon,
  CircleArrowRightIcon,
  CircleArrowUpIcon,
  CircleSlashTwoIcon,
  ClockIcon,
  CopyIcon,
  DollarIcon,
  Download01Icon,
  EyeIcon,
  File01Icon,
  FilterIcon,
  FlowIcon,
  GitForkIcon,
  GitBranchIcon,
  HandGripIcon,
  HourglassIcon,
  InboxIcon,
  InformationCircleIcon,
  KeyIcon,
  Layout01Icon,
  Link02Icon,
  ListPlusIcon,
  Loading03Icon,
  LogoutIcon,
  MailIcon,
  MenuIcon,
  MessageCircleReplyIcon,
  MessageIcon,
  MoreHorizontalIcon,
  MoreVerticalIcon,
  NoteIcon,
  PauseCircleIcon,
  PlusSignIcon,
  PodcastIcon,
  RefreshIcon,
  RotateLeft01Icon,
  SaveIcon,
  SearchIcon,
  SentIcon,
  Settings01Icon,
  SmilePlusIcon,
  TagIcon as HugeTagIcon,
  TagsIcon,
  Target01Icon,
  TriangleIcon,
  TrendingUpDownIcon,
  UserAddIcon,
  UserCheckIcon,
  UserGroupIcon,
  UserIcon,
  ViewOffIcon,
  WebhookIcon,
  WifiOffIcon,
  WorkflowSquareIcon,
  ZapIcon,
  Delete02Icon,
  UploadIcon,
} from "@hugeicons/core-free-icons";

export type IconProps = Omit<
  React.ComponentPropsWithoutRef<"svg">,
  "children"
> & {
  size?: string | number;
  strokeWidth?: number;
};

function createHugeIcon(icon: IconSvgElement) {
  const Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ size, strokeWidth = 2, ...props }, ref) => (
      <HugeiconsIcon
        ref={ref}
        icon={icon}
        size={size}
        strokeWidth={strokeWidth}
        {...props}
      />
    ),
  );
  Icon.displayName = "HugeIcon";
  return Icon;
}

export const ArrowDown = createHugeIcon(ArrowDownIcon);
export const ArrowLeft = createHugeIcon(ArrowLeftIcon);
export const ArrowRight = createHugeIcon(ArrowRightIcon);
export const ArrowUp = createHugeIcon(ArrowUpIcon);
export const BarChart3 = createHugeIcon(BarChartIcon);
export const Briefcase = createHugeIcon(BriefcaseIcon);
export const Calendar = createHugeIcon(CalendarIcon);
export const Check = createHugeIcon(CheckmarkSquareIcon);
export const CheckCircle = createHugeIcon(CheckmarkCircleIcon);
export const CheckCircle2 = createHugeIcon(CheckmarkCircle02Icon);
export const CheckCheck = createHugeIcon(CheckmarkCircle02Icon);
export const CheckIcon = Check;
export const ChevronLeft = createHugeIcon(CircleArrowLeftIcon);
export const ChevronDown = createHugeIcon(CircleArrowDownIcon);
export const ChevronDownIcon = ChevronDown;
export const ChevronRight = createHugeIcon(CircleArrowRightIcon);
export const ChevronRightIcon = createHugeIcon(CircleArrowRightIcon);
export const ChevronUp = createHugeIcon(CircleArrowUpIcon);
export const ChevronUpIcon = ChevronUp;
export const AlertCircle = createHugeIcon(AlertCircleIcon);
export const AlertTriangle = createHugeIcon(TriangleIcon);
export const Archive = createHugeIcon(ArchiveIcon);
export const CircleAlert = createHugeIcon(AlertCircleIcon);
export const CircleCheck = createHugeIcon(CheckmarkCircleIcon);
export const CircleSlash = createHugeIcon(CircleSlashTwoIcon);
export const Clock = createHugeIcon(ClockIcon);
export const Copy = createHugeIcon(CopyIcon);
export const CornerDownLeft = createHugeIcon(ArrowLeftIcon);
export const CornerDownRight = createHugeIcon(ArrowDownRightIcon);
export const CornerUpLeft = createHugeIcon(ArrowLeftIcon);
export const Download = createHugeIcon(Download01Icon);
export const DollarSign = createHugeIcon(DollarIcon);
export const Eye = createHugeIcon(EyeIcon);
export const EyeOff = createHugeIcon(ViewOffIcon);
export const ExternalLink = createHugeIcon(Link02Icon);
export const Building2 = createHugeIcon(Building02Icon);
export const FileText = createHugeIcon(File01Icon);
export const Filter = createHugeIcon(FilterIcon);
export const Flag = createHugeIcon(HugeTagIcon);
export const GitFork = createHugeIcon(GitForkIcon);
export const GitBranch = createHugeIcon(GitBranchIcon);
export const GripVertical = createHugeIcon(HandGripIcon);
export const History = createHugeIcon(RefreshIcon);
export const HelpCircle = createHugeIcon(AlertCircleIcon);
export const Hourglass = createHugeIcon(HourglassIcon);
export const ImageOff = createHugeIcon(CancelIcon);
export const Inbox = createHugeIcon(InboxIcon);
export const Info = createHugeIcon(InformationCircleIcon);
export const KeyRound = createHugeIcon(KeyIcon);
export const LayoutDashboard = createHugeIcon(Layout01Icon);
export const LayoutTemplate = createHugeIcon(Layout01Icon);
export const ListChecks = createHugeIcon(CheckListIcon);
export const ListPlus = createHugeIcon(ListPlusIcon);
export const Loader2 = createHugeIcon(Loading03Icon);
export const LogOut = createHugeIcon(LogoutIcon);
export const Mail = createHugeIcon(MailIcon);
export const MapPin = createHugeIcon(HugeTagIcon);
export const Menu = createHugeIcon(MenuIcon);
export const MessageCircle = createHugeIcon(MessageCircleReplyIcon);
export const MessageSquare = createHugeIcon(MessageIcon);
export const Minus = createHugeIcon(CancelIcon);
export const MoreHorizontal = createHugeIcon(MoreHorizontalIcon);
export const MoreVertical = createHugeIcon(MoreVerticalIcon);
export const PauseCircle = createHugeIcon(PauseCircleIcon);
export const Pencil = createHugeIcon(Settings01Icon);
export const PencilLine = createHugeIcon(Settings01Icon);
export const Phone = createHugeIcon(CallIcon);
export const PhoneCall = createHugeIcon(CallIcon);
export const PlayCircle = createHugeIcon(CircleArrowRightIcon);
export const Plus = createHugeIcon(PlusSignIcon);
export const Radio = createHugeIcon(PodcastIcon);
export const RefreshCw = createHugeIcon(RefreshIcon);
export const RotateCcw = createHugeIcon(RotateLeft01Icon);
export const Route = createHugeIcon(FlowIcon);
export const Save = createHugeIcon(SaveIcon);
export const Search = createHugeIcon(SearchIcon);
export const Send = createHugeIcon(SentIcon);
export const Settings = createHugeIcon(Settings01Icon);
export const SmilePlus = createHugeIcon(SmilePlusIcon);
export const Tag = createHugeIcon(HugeTagIcon);
export const TagIcon = Tag;
export const Tags = createHugeIcon(TagsIcon);
export const Target = createHugeIcon(Target01Icon);
export const Trash2 = createHugeIcon(Delete02Icon);
export const TrendingUp = createHugeIcon(TrendingUpDownIcon);
export const Trophy = createHugeIcon(Award01Icon);
export const Upload = createHugeIcon(UploadIcon);
export const User = createHugeIcon(UserIcon);
export const UserCheck = createHugeIcon(UserCheckIcon);
export const UserPlus = createHugeIcon(UserAddIcon);
export const Users = createHugeIcon(UserGroupIcon);
export const StickyNote = createHugeIcon(NoteIcon);
export const Webhook = createHugeIcon(WebhookIcon);
export const Workflow = createHugeIcon(WorkflowSquareIcon);
export const WifiOff = createHugeIcon(WifiOffIcon);
export const X = createHugeIcon(CancelIcon);
export const XCircle = createHugeIcon(CancelCircleIcon);
export const XIcon = X;
export const Zap = createHugeIcon(ZapIcon);
