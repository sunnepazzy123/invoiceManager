import { RequestMethod } from "@nestjs/common";

export const domains = ['http://localhost:4005'];

export const publicPaths = [
    { path: 'auth/(.*)', method: RequestMethod.ALL },
  ];
