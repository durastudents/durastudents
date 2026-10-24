# Resources page outline

**Status:** Page structure implemented with clearly labeled demo entries; real resource content and publishing decisions remain for review.  
**Route:** `/resources/`

## Purpose

Make approved Dura Students Society documents and publications easy to find,
understand and download. This page is for Society-wide resources; Dura language
books already have a dedicated collection at `/language/sources/`.

## Proposed page structure

Implemented on `/resources/`: introductory text, populated-category grouping,
resource metadata and view/download actions, an approval-aware empty state,
contact link, and a link to the separate Dura Lopa books collection. The
three category cards currently contain clearly labeled demo listings only.
They have no file links and must be replaced with approved resources before
being presented as published documents.

1. **Page introduction**
   - Heading: “Resources and publications”
   - Short explanation of what belongs in this collection.
   - State that documents are shared for public use only where publication
     permission has been confirmed.

2. **Resource list**
   - Group resources by a small set of clear categories:
     - Society and governance (for example, constitution or approved policies)
     - Reports and publications (for example, annual reports or project reports)
     - Programs and learning (for example, approved guides or event materials)
   - Show only categories that contain published resources.
   - Each resource card should include:
     - Title and a short description
     - Publication year, when known
     - Language and file format
     - File size
     - View and download actions
     - Attribution or reuse terms, when applicable

3. **Empty state**
   - If there are no approved files to publish, explain that resources will be
     added after review.
   - Do not direct maintainers to copy files from an old repository; confirm
     each source and permission before adding it.

4. **Contact or correction note**
   - Provide a route for reporting an inaccessible file or requesting a
     correction, using only a Society contact channel that has been confirmed.

## Content and publishing requirements

- Keep demo entries conspicuously labeled and without download/view links; do
  not present examples as real Society publications.
- Do not invent documents or publish placeholders as if they were available.
- Confirm the Society owns each file or has permission to publish it.
- Record the source, publication year, language, attribution and any reuse
  restrictions before adding a file.
- Keep files reasonably sized; optimize large scans or link to an approved
  external host when appropriate.
- Keep Dura Lopa books and learning materials in `/language/sources/` unless
  there is a clear reason to surface a particular item in both places.
- Preserve original documents and their supplied language; do not silently
  rewrite or translate them.

## Review decisions

- Which resource categories should be included in the first release?
- Which approved documents are ready to publish, and where are their source
  files?
- Should visitors be able to filter or search the list, or is a grouped list
  enough for the initial collection?
- What confirmed contact channel should be shown for corrections or questions?
- What attribution or reuse notice should appear for each resource?

## Not included in the initial implementation

- Adding or copying PDF files
- Search or category filters
- Duplicating the Dura Lopa book library
- Publishing documents whose ownership, accuracy or reuse permission is
  unresolved
