export function generateToc(contentHtml: string) {
  let tocHtml = `<div id="mains-srvc" style="border:1px solid #ddd; padding:10px; margin-bottom:1rem;">
                    <p style="margin-bottom:0; display: flex; align-items: center; justify-content: space-between;">
                        <b>Table of Contents</b>
                        <button data-toc-toggle style="cursor:pointer;">
                          <img src="/images/toggle.png" class="tglclass" />
                        </button>
                    </p>
                    <div id="lists-srvc" style="display:none;">`;

  const headingRegex = /<h([2-6])[^>]*>(.*?)<\/h\1>/gi;
  let match;
  let count = 1;
  let contentWithIds = contentHtml;

  while ((match = headingRegex.exec(contentHtml)) !== null) {
    const tag = match[1];
    const text = match[2].replace(/<[^>]+>/g, '').trim();
    if (!text) continue;

    const id = `toc-${tag}-${match.index}`;

    contentWithIds = contentWithIds.replace(
      match[0],
      `<h${tag} id="${id}">${text}</h${tag}>`
    );

    tocHtml += `<p>${count}. <a href="#${id}">${text}</a></p>`;
    count++;
  }

  tocHtml += `</div></div>`;

  return contentWithIds.replace(/(<p[^>]*>.*?<\/p>)/i, `$1${tocHtml}`);
}