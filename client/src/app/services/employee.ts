import { Employee } from "@prisma/client";
import { api } from "./api";

export const employeesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllEmployees: builder.query<Employee[], void>({
      query: () => ({
        url: "/employees",
        method: "GET",
      }),
    }),
    removeEmployee: builder.mutation<string, string>({
      query: (id) => ({
        url: `/employees/remove/${id}`,
        method: "POST",
        body: { id },
      }),
    }),
    addEmployee: builder.mutation<Employee, Employee>({
      query: (employee) => ({
        url: "/employees/add",
        method: "POST",
        body: employee,
      }),
    }),
  }),
});

export const {
  useGetAllEmployeesQuery,
  useRemoveEmployeeMutation,
  useAddEmployeeMutation,
} = employeesApi;

export const {
  endpoints: {
    getAllEmployees,
    removeEmployee,
    addEmployee,
  },
} = employeesApi;