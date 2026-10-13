import Script from "next/script";

const FORM_SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

/**
 * GoHighLevel embed for the Italy application.
 * The iframe URL, form id, and script source are fixed.
 * next/script dedupes by src, so the embed script is injected once.
 * Pixel height (not 100%) lets the embed script grow the iframe
 * without a fixed parent clipping it or creating a nested scroll.
 */
export function ItalyApplyForm() {
  return (
    <div className="w-full bg-chalk">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/tHJczGihUWnbXD3bEHt8"
        style={{
          width: "100%",
          height: "1043px",
          border: "none",
          borderRadius: "4px",
        }}
        className="block min-h-[1043px] w-full"
        id="inline-tHJczGihUWnbXD3bEHt8"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Application to Italy"
        data-height="1043"
        data-layout-iframe-id="inline-tHJczGihUWnbXD3bEHt8"
        data-form-id="tHJczGihUWnbXD3bEHt8"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Application to Italy"
      />
      <Script src={FORM_SCRIPT_SRC} strategy="afterInteractive" />
    </div>
  );
}
