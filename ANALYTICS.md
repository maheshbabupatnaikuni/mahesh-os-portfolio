# Portfolio Analytics

## Configuration

The GA4 Measurement ID is stored once in:

`src/config/analytics.ts`

Replace the value of `analyticsConfig.googleAnalytics.measurementId` when the portfolio needs to use a different GA4 web data stream.

Microsoft Clarity is prepared but disabled in the same configuration file. Its project ID is intentionally empty and no Clarity script is loaded.

## Required GA4 setting

This portfolio sends manual `page_view` events so React route changes are measured consistently.

In Google Analytics:

1. Open **Admin**.
2. Select **Data streams** and open the portfolio web stream.
3. Open **Enhanced measurement** settings.
4. Under **Page views**, disable **Page changes based on browser history events**.
5. Keep ordinary page-view measurement available; the site code sends the initial and routed page views.

This prevents duplicate page views because the Google tag is configured with `send_page_view: false` and the React analytics component sends each page view itself.

## Events

| Event | Trigger | Parameters |
| --- | --- | --- |
| `page_view` | Portfolio entry and React route changes | `page_title`, `page_location` |
| `project_card_click` | Project image or “Read the story” | `project_id`, `project_name`, `location` |
| `project_repository_click` | Project GitHub repository | `project_id`, `project_name`, `location` |
| `project_live_click` | Live project or Codespaces action | `project_id`, `project_name`, `location` |
| `social_link_click` | LinkedIn or GitHub profile | `platform`, `location` |
| `resume_click` | Resume view, download or request | `resume_id` when available, `action`, `location` when applicable |
| `contact_click` | Email, phone or contact-form handoff | `method`, `location` |
| `cta_click` | Main hero actions | `name`, `location`, `target` |
| `portfolio_share_click` | QR download or public-site action | `action`, `location` |

Event parameters contain only fixed labels and project identifiers. Contact-form names, email addresses, phone numbers, subjects and messages are never included in analytics events.

## Testing

1. Deploy the portfolio to GitHub Pages.
2. Open the public site in a private window without an analytics-blocking extension.
3. In browser developer tools, open **Network** and filter for `gtag/js` and `g/collect`.
4. Navigate to a project and click a tracked CTA.
5. In GA4, open **Reports → Realtime** to confirm the visitor, page views and event names. Realtime data usually appears within minutes.
6. For deeper validation, use Google Tag Assistant or GA4 **Admin → DebugView**.

Standard processed reports can take 24–48 hours. To use custom event parameters in regular explorations and reports, register the desired parameters as event-scoped custom dimensions under **Admin → Custom definitions**.

## Campaign reporting

GA4 reads `utm_source`, `utm_medium` and `utm_campaign` from the landing URL. The manual initial `page_view` keeps the complete landing URL in `page_location`, including campaign parameters.

View campaign results in **Reports → Acquisition → Traffic acquisition** using these dimensions:

- **Session source / medium**
- **Session source**
- **Session medium**
- **Session campaign**

Use lowercase UTM values consistently because campaign values are case-sensitive.

## UTM links

- LinkedIn: `https://maheshbabupatnaikuni.github.io/mahesh-os-portfolio/?utm_source=linkedin&utm_medium=profile&utm_campaign=portfolio`
- Naukri: `https://maheshbabupatnaikuni.github.io/mahesh-os-portfolio/?utm_source=naukri&utm_medium=profile&utm_campaign=portfolio`
- Resume: `https://maheshbabupatnaikuni.github.io/mahesh-os-portfolio/?utm_source=resume&utm_medium=resume&utm_campaign=portfolio`
- QR code: `https://maheshbabupatnaikuni.github.io/mahesh-os-portfolio/?utm_source=qr&utm_medium=qr&utm_campaign=portfolio`
- GitHub: `https://maheshbabupatnaikuni.github.io/mahesh-os-portfolio/?utm_source=github&utm_medium=profile&utm_campaign=portfolio`
- Other: `https://maheshbabupatnaikuni.github.io/mahesh-os-portfolio/?utm_source=other&utm_medium=referral&utm_campaign=portfolio`

Do not place names, email addresses, phone numbers or other personal information in UTM parameters.
