/**
 * Plugin identity.
 *
 * This build is Poole Associates' copy of OneDrive Sync. It uses its own
 * plugin id so that Obsidian treats it as a separate plugin from the
 * "OneDrive Sync" in the community store: the store can never update it
 * (and so silently drop SharePoint support), and it keeps its own settings,
 * sync state and sign-in.
 *
 * PLUGIN_ID must equal "id" in manifest.json; a unit test enforces this.
 * It has no imports so low-level utilities can use it freely.
 */

/** This plugin's id, and the name of its folder under `<configDir>/plugins/`. */
export const PLUGIN_ID = 'onedrive-sync-poole';

/**
 * Id of the community-store plugin this one is derived from. Its folder is
 * never synced either, so a vault that still has it installed can't push
 * that plugin's state or binaries to other devices.
 */
export const STORE_PLUGIN_ID = 'onedrive-sync';
