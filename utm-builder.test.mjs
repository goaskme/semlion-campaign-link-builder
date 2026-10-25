import assert from 'node:assert/strict';
import {buildCampaignUrl} from './utm-builder.mjs';

const base = {url: 'https://example.com/offer?product=42#details', source: 'newsletter', medium: 'email', campaign: 'autumn'};
const built = new URL(buildCampaignUrl(base));
assert.equal(built.searchParams.get('product'), '42');
assert.equal(built.hash, '#details');
assert.equal(built.searchParams.get('utm_source'), 'newsletter');
assert.equal(built.searchParams.get('utm_medium'), 'email');
assert.equal(built.searchParams.get('utm_campaign'), 'autumn');

const old = new URL(buildCampaignUrl({...base, url:'https://example.com/?utm_source=old&utm_source=duplicate&utm_term=stale&utm_content=stale&x=1'}));
assert.deepEqual(old.searchParams.getAll('utm_source'), ['newsletter']);
assert.equal(old.searchParams.has('utm_term'), false);
assert.equal(old.searchParams.has('utm_content'), false);
assert.equal(old.searchParams.get('x'), '1');

const unicode = new URL(buildCampaignUrl({...base, campaign:'  România & Qatar / 2026  ', content:'video + still', term:'servicii SEO'}));
assert.equal(unicode.searchParams.get('utm_campaign'), 'România & Qatar / 2026');
assert.equal(unicode.searchParams.get('utm_content'), 'video + still');
assert.equal(unicode.searchParams.get('utm_term'), 'servicii SEO');
assert.deepEqual(base, {url:'https://example.com/offer?product=42#details', source:'newsletter', medium:'email', campaign:'autumn'});

for (const url of ['javascript:alert(1)', 'data:text/html,test', 'ftp://example.com', '/relative', 'https://name:password@example.com']) {
  assert.throws(() => buildCampaignUrl({...base, url}));
}
for (const field of ['source', 'medium', 'campaign']) {
  assert.throws(() => buildCampaignUrl({...base, [field]:'  '}), /required/);
}
assert.throws(() => buildCampaignUrl({...base, content:42}), /must be text/);
console.log('Campaign URL checks passed: preservation, replacement, Unicode, validation and no input mutation.');
