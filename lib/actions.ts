'use server';

export async function shareMeal(formData: FormData) {
  const meal = {
    title: formData.get('title'),
    image: formData.get('image'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    creator: formData.get('name'), // name of input
    creator_email: formData.get('email'),
  };
}
