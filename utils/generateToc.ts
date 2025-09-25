export function generateToc(contentHtml: any) {
  let tocHtml = `<div id="mains-srvc" style="border:1px solid #ddd; padding:10px; margin-bottom:1rem;">
                    <p style="margin-bottom:0; display: flex; align-items: center; justify-content: space-between;">
                        <b>Table of Contents</b>
                        <button id="toggle-toc-btn" style="cursor:pointer;"><img src="/images/toggle.png" class="tglclass" /></button>
                    </p>
                    <div id="lists-srvc" style="display:none;">`;

  // Match all h2–h6 headings
  const headingRegex = /<h([2-6])[^>]*>(.*?)<\/h\1>/gi;
  let match;
  let count = 1;

  let contentWithIds = contentHtml;

  while ((match = headingRegex.exec(contentHtml)) !== null) {
    const tag = match[1];
    const text = match[2].replace(/<[^>]+>/g, '').trim(); // strip inner HTML
    if (!text) continue;

    const id = `toc-${tag}-${match.index}`;

    // Inject ID into original heading
    contentWithIds = contentWithIds.replace(
      match[0],
      `<h${tag} id="${id}">${text}</h${tag}>`
    );

    // Add item to TOC
    tocHtml += `<p>${count}. <a href="#${id}">${text}</a></p>`;
    count++;
  }

  tocHtml += `</div></div>`;

  // Core JS toggle script
  tocHtml += `<script>
      document.addEventListener('DOMContentLoaded', function() {
          const tocList = document.getElementById('lists-srvc');
          const toggleBtn = document.getElementById('toggle-toc-btn');
          if (!tocList || !toggleBtn) return;

          toggleBtn.addEventListener('click', function() {
              if (tocList.style.display === 'none') {
                  tocList.style.display = 'block';
              } else {
                  tocList.style.display = 'none';
              }
          });
      });
  </script>`;

  // Insert TOC after first <p>
  contentWithIds = contentWithIds.replace(
    /(<p[^>]*>.*?<\/p>)/i,
    `$1${tocHtml}`
  );

  return contentWithIds;
}
