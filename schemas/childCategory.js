export default {
  name: "childCategory",
  title: "2차 카테고리",
  type: "document",
  fields: [
    {
      name: "parent",
      title: "대분류",
      type: "reference",
      to: { type: "parentCategory" },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
