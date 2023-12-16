'use server'

export async function createContract(formData: FormData) {
   

    const rawFormData = {
      nip: formData.get('nip'),
    }
    console.log(rawFormData)
    // mutate data

}

