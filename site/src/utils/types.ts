export interface IUser {
  accent_color?: number;
  accessToken: string;
  id: string;
  username: string;
  discriminator: string;
  avatar?: string;
  avatar_decoration?: string;
  banner?: string;
  banner_color?: number;
  email: string;
  fetchedAt: string;
  flags: number;
  guilds: IGuild[];
  locale: string;
  mfa_enabled: boolean;
  provider: string;
  public_flags: number;
  verified: boolean;
}

export type GuildFeatureString =
  | "ANIMATED_BANNER"
  | "ANIMATED_ICON"
  | "AUTO_MODERATION"
  | "BANNER"
  | "COMMERCE"
  | "COMMUNITY"
  | "DISCOVERABLE"
  | "FEATURABLE"
  | "INVITE_SPLASH"
  | "MEMBER_VERIFICATION_GATE_ENABLED"
  | "MONETIZATION_ENABLED"
  | "MORE_STICKERS"
  | "NEWS"
  | "PARTNERED"
  | "PREVIEW_ENABLED"
  | "PRIVATE_THREADS"
  | "ROLE_ICONS"
  | "TICKETED_EVENTS_ENABLED"
  | "VANITY_URL"
  | "VERIFIED"
  | "VIP_REGIONS"
  | "WELCOME_SCREEN_ENABLED";

export interface IGuild {
  features: GuildFeatureString[];
  icon: string;
  id: string;
  name: string;
  owner: boolean;
  permissions: number;
  permissions_new: number;
}

export type PERMISSON_STRING =
  | "CREATE_INSTANT_INVITE"
  | "KICK_MEMBERS"
  | "BAN_MEMBERS"
  | "ADMINISTRATOR"
  | "MANAGE_CHANNELS"
  | "MANAGE_GUILD"
  | "ADD_REACTIONS"
  | "VIEW_AUDIT_LOG"
  | "PRIORITY_SPEAKER"
  | "STREAM"
  | "VIEW_CHANNEL"
  | "SEND_MESSAGES"
  | "SEND_TTS_MESSAGES"
  | "MANAGE_MESSAGES"
  | "EMBED_LINKS"
  | "ATTACH_FILES"
  | "READ_MESSAGE_HISTORY"
  | "MENTION_EVERYONE"
  | "USE_EXTERNAL_EMOJIS"
  | "VIEW_GUILD_INSIGHTS"
  | "CONNECT"
  | "SPEAK"
  | "MUTE_MEMBERS"
  | "DEAFEN_MEMBERS"
  | "MOVE_MEMBERS"
  | "USE_VAD"
  | "CHANGE_NICKNAME"
  | "MANAGE_NICKNAMES"
  | "MANAGE_ROLES"
  | "MANAGE_WEBHOOKS"
  | "MANAGE_EMOJIS_AND_STICKERS"
  | "USE_APPLICATION_COMMANDS"
  | "REQUEST_TO_SPEAK"
  | "MANAGE_EVENTS"
  | "MANAGE_THREADS"
  | "CREATE_PUBLIC_THREADS"
  | "CREATE_PRIVATE_THREADS"
  | "USE_EXTERNAL_STICKERS"
  | "SEND_MESSAGES_IN_THREADS"
  | "USE_EMBEDDED_ACTIVITIES"
  | "MODERATE_MEMBERS";

export type IPermissions = {
  [k in PERMISSON_STRING]: number;
};
