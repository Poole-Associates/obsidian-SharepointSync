/**
 * The plugin id lives in two places: manifest.json (what Obsidian reads) and
 * src/pluginId.ts (what the code uses for its own folder and secret names).
 * If they drift, the plugin would exclude, and store conflicts in, the wrong
 * folder.
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';
import { describe, expect, it } from 'vitest';
import { PLUGIN_ID, STORE_PLUGIN_ID } from '../../src/pluginId';

const readManifest = (name: string): { id: string } =>
	JSON.parse(readFileSync(resolve(__dirname, '../..', name), 'utf8')) as { id: string };

describe('plugin id', () => {
	it('matches manifest.json', () => {
		expect(readManifest('manifest.json').id).toBe(PLUGIN_ID);
	});

	it('matches manifest-beta.json', () => {
		expect(readManifest('manifest-beta.json').id).toBe(PLUGIN_ID);
	});

	it('differs from the community-store plugin, so the store never updates this build', () => {
		expect(PLUGIN_ID).not.toBe(STORE_PLUGIN_ID);
	});
});
