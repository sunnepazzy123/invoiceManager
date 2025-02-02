'use server'

import { ICompanyFormType } from "@/components/CompanyForm"
import { paths } from "@/helpers/path";
import { axiosServer } from "@/libs/request";
import { companySchema } from "@/validators/company"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export interface CompanyCreateType {
  name: string,
  nip: string,
  address: string,
  email: string,
  phone?: string,
}

export interface IGetCompany {
  token: string | undefined,
  query?: {
    ownership: string
  } | undefined
}

export async function createCompany(formState: ICompanyFormType, formData: FormData): Promise<ICompanyFormType> {
  const rawFormData = {
    name: formData.get('name'),
    nip: formData.get('nip'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    address: formData.get('address'),
  }

  const result = companySchema.safeParse(rawFormData);

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors)
    return {
      errors: result.error.flatten().fieldErrors,
    }
  }

  //  make https call to backend
  try {
    await axiosServer.post("/companies/create", rawFormData)
  } catch (err: any) {
    console.log(err.response.data.message)
    const msg = err.response?.data.message || err.message
    if (err instanceof Error) {
      return {
        errors: {
          _form: [msg],
        },
      };
    } else {
      return {
        errors: {
          _form: ['Something went wrong'],
        },
      };
    }
  }

  //end
  // mutate data
  revalidatePath('/create');
  redirect(paths.companyPage());

}


export const getCompanies = async () => {
  const { data: companies } = await axiosServer.get(`/companies`)
  return companies
}


const queryBuilderRoutes = (params: Partial<IGetCompany>) => {
  if (params && params.query && params.query.ownership === 'true') {
    const path = `?ownership=${params.query.ownership}`
    return path
  }
  return ''
}

export const getSessionCustom = async () => {
  const { data: session } = await axiosServer.get(`/auth/session`)
  return session
}

export const logOutUser = async () => {
  await axiosServer.get(`/auth/logout`)
  return
}