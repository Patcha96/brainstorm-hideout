// GET /ideas
import { ideasRepo } from '$lib/repos/ideas';

import type { Idea } from "$lib/repos/ideas";

import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
  const ideas: Idea[] = await ideasRepo.getAll();

  if (ideas) {
    return {
      body: { ideas },
    };
  }

  return {
    status: 404,
  };
};
