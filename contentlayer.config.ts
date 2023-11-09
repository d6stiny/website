import { defineDocumentType, makeSource } from "contentlayer/source-files";

import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

const Note = defineDocumentType(() => ({
  name: "Note",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the note",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the note",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/epm/notes/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "notes",
  documentTypes: [Note],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "rose-pine",
        },
      ],
    ],
  },
});
