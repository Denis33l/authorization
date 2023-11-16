import { Comment } from "@prisma/client";
import { api } from "./api";

export const commentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllComments: builder.query<Comment[], void>({
      query: () => ({
        url: "/comments",
        method: "GET",
      }),
    }),
    removeComment: builder.mutation<string, string>({
      query: (id) => ({
        url: `/comments/remove/${id}`,
        method: "POST",
        body: { id },
      }),
    }),
    addComment: builder.mutation<Comment, Comment>({
      query: (commet) => ({
        url: "/comments/add",
        method: "POST",
        body: commet,
      }),
    }),
  }),
});

export const {
  useGetAllCommentsQuery,
  useRemoveCommentMutation,
  useAddCommentMutation,
} = commentsApi;

export const {
  endpoints: {
    getAllComments,
    removeComment,
    addComment,
  },
} = commentsApi;