# Campaign link handoff checklist

Use this worksheet alongside the SEM Lion Campaign Link Builder when passing a tagged acquisition link from a marketer to a designer, developer or campaign operator. It records what must be checked before release. It does not connect accounts, approve creative, send messages or measure results.

## 1. Record the intended journey

Complete one row for each destination and language. Keep contact details, customer data, passwords and access tokens out of campaign URLs and this shared worksheet.

| Field | Fill in before release |
| --- | --- |
| Campaign owner | Role or team responsible for the release |
| Market and language | For example, Qatar / English or Romania / Romanian |
| Offer and source | The message being promoted and its external channel |
| Destination | The exact HTTPS page that continues that message |
| Next step | The action a visitor should be able to complete |
| Campaign tags | Agreed source, medium, campaign and optional content label |
| Event definition | The exact action counted, such as a completed enquiry form |
| Evidence location | Where a reviewer can inspect the page and measurement check |
| Release decision | Ready, needs correction or not checked; name the responsible role |

Hypothetical example: a Romanian paid-search ad about a service leads to its Romanian service page. The page repeats the relevant offer and provides a working enquiry route. The example describes a check to perform; it reports no campaign result.

## 2. Check the generated link

- Open the destination without tags and confirm the intended page loads.
- Generate the acquisition URL with the local builder. Check the output against the agreed naming convention.
- Open that exact output on a phone. Confirm redirects retain the destination and the campaign fields that the intended measurement system needs.
- Check that the page language, offer and contact route match the source message.
- Inspect the actual URL for duplicate parameters or unintended personal information. Use campaign tags on external acquisition links rather than adding them to internal navigation.
- Record each check as passed, failed or not checked. A working page is not proof that analytics received a visit or that a visitor became a qualified lead.

## 3. Keep automation scope explicit

The builder only creates a URL in the browser. If a separate workflow will use it, record the sending account, workspace, trigger, intended destination, permitted action and human owner. Test with non-customer sample data before enabling that workflow. Check duplicate handling and the response when a required permission or destination is unavailable.

| Workflow field | Required decision |
| --- | --- |
| Trigger | What exact event starts the workflow? |
| Account and workspace | Which authorized account owns the action? |
| Link version | Which reviewed destination and campaign values will be used? |
| Duplicate handling | How is one event prevented from causing repeated actions? |
| Permission failure | What is recorded when the platform refuses the action? |
| Native evidence | Which provider receipt identifies the actual action? |
| Human owner | Who reviews errors and approves a changed destination? |

A successful workflow execution does not by itself prove that a message arrived, a post published or a conversion occurred. Review the native outcome for the action involved. SEM Lion's related service page is [AI marketing integration](https://www.semlion.com/ai-marketing-integration/); it is separate from this free local URL builder.

## 4. Give creative variants distinct labels

If you are comparing creative, write the question first and keep a record of the intended difference. A content label such as `creative_a` identifies a variant; it does not make the comparison a controlled experiment.

| Variant record | What to record |
| --- | --- |
| Question | What are you trying to learn? |
| Intended difference | Which headline, image or other element changes? |
| Kept consistent | Which audience, offer, destination and timing conditions should stay comparable? |
| Outcome | Which event is relevant to the question? |
| Limitations | Which differences or missing observations affect interpretation? |
| Decision | What evidence is needed before continuing, changing or stopping? |

Do not infer a winner solely because two tagged URLs have different totals. Check the comparison conditions and uncertainty. For implementation support, see SEM Lion's [AI creative testing](https://www.semlion.com/ai-creative-testing/). This worksheet contains no claimed performance gains.

## 5. Optional review prompt

> Review this campaign-link handoff record: [insert the completed fields and non-sensitive sample URLs]. Identify mismatches between the source message, market, language, destination and next step. Check campaign naming consistency and list the human or native-system checks that remain. Separate confirmed observations from assumptions. Do not infer delivery, measurement or business results from a URL alone. Flag missing evidence and do not invent an answer for an unchecked field.

Prepared by SEM Lion for the public Campaign Link Builder resource. Use the existing builder and its URL-behaviour checks as documented in the repository README.
