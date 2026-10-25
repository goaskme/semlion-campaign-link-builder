/** Build a tagged campaign URL without network access or shared state. */
export function buildCampaignUrl({url, source, medium, campaign, term = '', content = ''} = {}) {
  const clean = (value, label, required = true) => {
    if (typeof value !== 'string') throw new Error(`${label} must be text.`);
    const result = value.trim();
    if (required && !result) throw new Error(`${label} is required.`);
    return result;
  };
  let target;
  try { target = new URL(clean(url, 'Destination URL')); }
  catch { throw new Error('Enter a complete destination URL starting with https:// or http://.'); }
  if (!['https:', 'http:'].includes(target.protocol)) throw new Error('Use an https:// or http:// destination.');
  if (target.username || target.password) throw new Error('Remove credentials from the destination URL.');
  for (const [key, value, label, required] of [
    ['utm_source', source, 'Source', true],
    ['utm_medium', medium, 'Medium', true],
    ['utm_campaign', campaign, 'Campaign', true],
    ['utm_term', term, 'Term', false],
    ['utm_content', content, 'Content', false],
  ]) {
    const text = clean(value, label, required);
    if (text) target.searchParams.set(key, text);
    else target.searchParams.delete(key);
  }
  return target.toString();
}
