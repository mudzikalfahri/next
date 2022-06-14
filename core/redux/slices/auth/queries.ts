import { apiSlice } from "@/core/redux/api/apiSlice";
import { IPost } from "@/core/types/post";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IPost[], void>({
      query: () => "/users",
      providesTags: ["Post"],
    }),
  }),
});

export const { useGetUsersQuery } = extendedApiSlice;
