// GET /ideas
import { ideasRepo } from '$lib/repos/ideas';

import type { Idea } from "$lib/repos/ideas";

import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async ({ url }) => {
  const limit = parseInt(url.searchParams.get("limit") || "50");
  const ideas: Idea[] = await ideasRepo.getAll({ limit });

  if (ideas) {
    return {
      body: { ideas },
    };
  }

  return {
    status: 404,
  };
};
