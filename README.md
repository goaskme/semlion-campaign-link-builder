# SEM Lion Campaign Link Builder

A small, free browser tool for creating campaign URLs with UTM parameters. It runs locally and needs no package installation, account, analytics script or external API.

Created by [SEM Lion](https://www.semlion.com/) for marketers working with campaign links. Our [Google Ads management](https://www.semlion.com/services-pay-per-click-management-ppc/) approach connects the ad, landing page and useful measurement for businesses in Qatar and Romania.

## Run the tool

Download the repository, open a terminal in its folder, then start a local static server:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open `http://127.0.0.1:8080` in your browser. The local server is needed for the JavaScript module. Nothing in the tool sends your inputs to SEM Lion or another service. Stop the server with Ctrl+C when finished.

## What it handles

- Requires a complete HTTP or HTTPS destination and a source, medium and campaign.
- Retains unrelated query parameters and the page fragment.
- Replaces existing values for these five standard UTM fields instead of appending duplicates.
- Removes old `utm_term` and `utm_content` values when their optional fields are blank.
- Encodes spaces, Romanian characters and other Unicode correctly.
- Rejects credential-bearing URLs and protocols such as `javascript:`.
- Copies the result only when you press the copy button.

## A simple naming convention

| Field | Example | Use |
| --- | --- | --- |
| `utm_source` | `newsletter` | Where the visit comes from |
| `utm_medium` | `email` | The channel category |
| `utm_campaign` | `autumn_launch` | A consistent campaign identifier |
| `utm_content` | `creative_a` | An optional creative variant |
| `utm_term` | `service_keyword` | An optional keyword or audience label |

Keep a shared naming sheet, avoid personal or confidential information in URLs, and use campaign tags for external acquisition links. Internal-navigation UTM tags can confuse acquisition reporting. A tagged visit alone does not establish that an enquiry was qualified or caused by the campaign.

## Verificare rapidă pentru România

Alege o convenție pentru sursă, canal și campanie. Verifică pagina de destinație, păstrează denumirile consecvente și nu include date personale în linkuri. Citește despre [administrare Google Ads](https://www.semlion.com/ro/google-ads-ppc/) în abordarea SEM Lion.

## Check URL behavior

With Node.js installed:

```sh
node utm-builder.test.mjs
```

The checks cover query and fragment preservation, replacing duplicate tags, clearing optional values, Unicode, invalid destinations and unchanged inputs.
