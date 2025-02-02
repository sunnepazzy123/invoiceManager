import { Request } from "express";

export const  generateUniqueRandomText = () =>  {
  // Get the current timestamp in milliseconds
  const timestamp = new Date().getTime();

  // Generate a random number between 0 and 99999
  const randomNumber = Math.floor(Math.random() * 100000);

  // Combine timestamp and random number to create a unique value
  const uniqueText = `${timestamp}${randomNumber}`;

  return uniqueText;
}

export const isProductionEnvironment = () => {
  if (process.env.NODE_ENV === 'development') {
    return false;
  }
  return true;
};


export const extractTokenFromHeader = (request: Request): string | undefined => {
  const [type, token] = request.headers.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
}