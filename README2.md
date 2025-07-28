---
sitemap: false
published: false
---
Modify your cv at assets/json/resume.json
POWERSHELL: bundle exec jekyll serve (-lsi)
https://giscus.app/

Okay, I've compared the features demonstrated in the initial al-folio snippets with your project markdown files. Here's a detailed list of features and functions from the initial snippets that you haven't used yet in your projects:

**I. Front Matter Configurations & Enabled Features:**

*   **`redirect: URL`**:
    *   Found in: `3_project.md`, `2022-02-01-redirect.md`
    *   Function: Automatically redirects the project/post page to an external or internal URL. You haven't used this to make one of your project pages redirect elsewhere.
*   **`featured: true`**:
    *   Found in: `2015-07-15-code.md`
    *   Function: Marks a post as "featured," which might affect its display or ordering on a blog listing page.
*   **`disqus_comments: true`**:
    *   Found in: `2015-10-20-disqus-comments.md`
    *   Function: Enables Disqus comments for a page. (You are using `giscus_comments` instead).
*   **`toc: { beginning: true }`**:
    *   Found in: `2023-03-20-table-of-contents.md`
    *   Function: Displays a table of contents at the beginning of the post content. (You've used `toc: { sidebar: true }`).
*   **`pretty_table: true`**:
    *   Found in: `2023-03-21-tables.md`
    *   Function: Enables enhanced styling for Markdown tables using Bootstrap Tables.
*   **`mermaid: { enabled: true, zoomable: true }`**:
    *   Found in: `2021-07-04-diagrams.md`
    *   Function: Enables rendering of Mermaid diagrams from text descriptions.
*   **`tikzjax: true`**:
    *   Found in: `2023-12-12-tikzjax.md`
    *   Function: Enables rendering of TikZ diagrams using TikZJax.
*   **`chart: { chartjs: true }` / `chart: { echarts: true }` / `chart: { vega_lite: true }`**:
    *   Found in: `2024-01-26-chartjs.md`, `2024-01-26-echarts.md`, `2024-01-27-vega-lite.md`
    *   Function: Enables rendering of charts using Chart.js, ECharts, or Vega-Lite from JSON definitions in code blocks.
*   **`map: true`**:
    *   Found in: `2024-01-26-geojson-map.md`
    *   Function: Enables rendering of GeoJSON maps using Leaflet.
*   **`images: { compare: true, slider: true }`**:
    *   Found in: `2024-01-27-advanced-images.md`
    *   Function: Enables specific JavaScript libraries for image comparison sliders and image carousels/sliders.
*   **`code_diff: true`**:
    *   Found in: `2024-01-27-code-diff.md`
    *   Function: Enables enhanced display of code differences using `diff2html`.
*   **`pseudocode: true`**:
    *   Found in: `2024-04-15-pseudocode.md`
    *   Function: Enables rendering of LaTeX-style pseudocode.
*   **`typograms: true`**:
    *   Found in: `2024-04-29-typograms.md`
    *   Function: Enables rendering of typograms (text-based diagrams).
*   **`citation: true`** (for the post itself):
    *   Found in: `2024-04-28-post-citation.md`
    *   Function: Automatically generates citation information for the blog post/page itself.
*   **`tabs: true`**:
    *   Found in: `2024-05-01-tabs.md`
    *   Function: Enables the use of tabbed content sections.

**II. Content Formatting & Display Techniques:**

*   **Specific Image Layouts:**
    *   **Image Slider (`<swiper-container>`, `<swiper-slide>`)**:
        *   Found in: `2024-01-27-advanced-images.md`
        *   Function: Creates an interactive carousel for images.
    *   **Image Comparison Slider (`<img-comparison-slider>`)**:
        *   Found in: `2024-01-27-advanced-images.md`
        *   Function: Allows interactive comparison of two images with a draggable slider.
    *   **`loading="eager"` attribute in `{% include figure.liquid ... %}`**:
        *   Found in: Many initial `project_*.md` files (e.g., `7_project.md`).
        *   Function: Instructs the browser to load the image as soon as possible. While you use `figure.liquid`, this specific attribute might not be consistently applied if not explicitly added.

*   **Text Formatting:**
    *   **Checklists (`- [x] Item`, `- [ ] Item`)**:
        *   Found in: `2015-03-15-formatting-and-links.md`
        *   Function: Creates interactive or static task lists.
    *   **Explicit Horizontal Rule (`<hr>`)**:
        *   Found in: `2015-03-15-formatting-and-links.md`
        *   Function: Visually separates content sections. (Markdown `---` can also create this, but `<hr>` is explicit HTML).
    *   **Custom Blockquotes (`.block-tip`, `.block-warning`, `.block-danger`)**:
        *   Found in: `2023-05-12-custom-blockquotes.md`
        *   Function: Provides styled blockquotes for tips, warnings, and dangers.

*   **Code Display:**
    *   **Code Blocks in Lists (with specific indentation for kramdown)**:
        *   Found in: `2015-07-15-code.md`
        *   Function: Properly formats code blocks when nested within markdown lists.
    *   **Liquid `{% highlight c++ linenos %}` tag**:
        *   Found in: `2015-07-15-code.md`
        *   Function: Specifically for highlighting code with line numbers using Jekyll's built-in highlighter. (You use fenced code blocks ```cpp which also provide highlighting).
    *   **Displaying Liquid Code Snippets using `{% raw %}` and `{% endraw %}`**:
        *   Found in: Many initial snippets like `7_project.md`, `2015-07-15-code.md`.
        *   Function: Allows you to show the actual Liquid template code as text on your page, rather than having it processed by Jekyll.
    *   **Code Diff Display (```diff ... ``` and ```diff2html ... ```)**:
        *   Found in: `2024-01-27-code-diff.md`
        *   Function: Renders code differences in a standard diff format or an enhanced HTML view.

*   **Mathematical Equations:**
    *   **Equation Numbering and Referencing (`\label{...}`, `\eqref`)**:
        *   Found in: `2015-10-20-math.md`
        *   Function: Allows numbered equations and cross-referencing within MathJax. (You've used MathJax for equations but not this specific numbering/referencing feature).

*   **External Services/Embeds:**
    *   **Twitter Embeds (`{% twitter URL %}`)**:
        *   Found in: `2020-09-28-twitter.md`
        *   Function: Embeds tweets or Twitter timelines directly into the page.

*   **Diagrams & Charts (Content Implementation):**
    *   **Mermaid Diagrams (```mermaid ... ``` code block)**
    *   **TikZJax Diagrams (`<script type="text/tikz">...</script>`)**
    *   **Chart.js Charts (```chartjs ... ``` code block)**
    *   **ECharts (```echarts ... ``` code block)**
    *   **Vega-Lite Charts (```vega_lite ... ``` code block)**
    *   **GeoJSON Maps (```geojson ... ``` code block)**
    *   **Typograms (```typograms ... ``` code block)**

*   **Tables:**
    *   **HTML Tables with Bootstrap Table attributes (`data-toggle="table"`, `data-url`, etc.)**:
        *   Found in: `2023-03-21-tables.md`
        *   Function: Creates dynamic, feature-rich tables from HTML markup or JSON data. (You've used standard Markdown tables).

*   **Multimedia:**
    *   **Video Embeds (`{% include video.liquid path="..." %}`)**:
        *   Found in: `2023-04-24-videos.md`
        *   Function: Embeds local or remote videos.
    *   **Audio Embeds (`{% include audio.liquid path="..." %}`)**:
        *   Found in: `2023-04-25-audios.md`
        *   Function: Embeds local or remote audio files.

*   **Bibliography & Citations (in-text):**
    *   **`{% cite bib_key %}`**:
        *   Found in: `7_project.md`, `1_project.md`, `2023-07-12-post-bibliography.md`
        *   Function: Creates in-text citations from a bibliography file.
    *   **`{% reference bib_key %}`**:
        *   Found in: `2023-07-12-post-bibliography.md`
        *   Function: Displays a full reference for a bibliography entry.
    *   **`{% quote bib_key %} ... {% endquote %}` (for bibliographic quotes)**:
        *   Found in: `2023-07-12-post-bibliography.md`
        *   Function: Formats a quote and associates it with a bibliography entry.

*   **Jupyter Notebook Embedding:**
    *   **`{% jupyter_notebook path %}` with `file_exists` check**:
        *   Found in: `2023-07-04-jupyter-notebook.md`
        *   Function: Embeds a rendered Jupyter Notebook into the page.

*   **Advanced Code Display:**
    *   **Pseudocode (```pseudocode ... ``` code block)**:
        *   Found in: `2024-04-15-pseudocode.md`
        *   Function: Renders algorithm pseudocode.

*   **Tabbed Content:**
    *   **`{% tabs group-name %}`, `{% tab tab-name %}`, `{% endtab %}`, `{% endtabs %}`**:
        *   Found in: `2024-05-01-tabs.md`
        *   Function: Organizes content into selectable tabs.

This list should give you a comprehensive overview of the features present in the examples that you could explore for your future projects or posts.