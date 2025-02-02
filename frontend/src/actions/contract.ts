'use server'
import { IContractFormType } from "@/components/ContractRegisterForm";
import { ApiBackend } from "@/constants";
import { paths } from "@/helpers/path";
import { axiosServer } from "@/libs/request";
import { contractCreateSchema } from "@/validators/contracts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export interface CompanyCreateType {
  name: string,
  nip: string,
  address: string,
  email: string,
  phone?: string,
}

export interface IGetContracts {
  token: string|undefined,
  query?: {
    ownership: string
  } | undefined
}





export const getContracts = async <T>(): Promise<T> => {
  const { data: contracts } = await axiosServer.get(`/contracts`)
  return contracts
} 


export async function createContract(formState: IContractFormType, formData: FormData): Promise<IContractFormType> {
  const rawFormData = {
    dailyHours: Number(formData.get('dailyHours')),
    duration: Number(formData.get('duration')),
    clientCompanyNip: formData.get('clientCompanyNip'),
    companyNip: formData.get('companyNip'),
    wagesPerHour: Number(formData.get('wagesPerHour')),
    signature: formData.get('signature'),
    type: formData.get('type')
  }
  console.log(rawFormData, "raform")
  const result = contractCreateSchema.safeParse(rawFormData);

  if(!result.success) {
    console.log(result.error.flatten().fieldErrors)
    return {
      errors: result.error.flatten().fieldErrors,
    }
  }
  console.log(rawFormData, "parsee")

  //  make https call to backend
  try {
   
    await axiosServer.post("/contracts", rawFormData)

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
    redirect(paths.contractPage('create'));

}

export const getBankAccounts = async <T>(): Promise<T> => {
  const { data: bank_accounts } = await axiosServer.get(`/bank_account`)
  return bank_accounts
} 