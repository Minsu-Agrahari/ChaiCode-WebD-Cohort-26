// 🎯 Envirnment Variable are Validated

// env.ts:- Stores Envirnment Variable
// zod -> [used] Validation libary

import { z } from "zod";

const envSchema = z.object({
    PORT: z.string().optional(),
})

// Validate Env Valiable according to the line-6 Schema
// line-12 will parse env valiable 
function createEnv(env: NodeJS.ProcessEnv) {
    const safeParseResult = envSchema.safeParse(env);

    if (!safeParseResult.success) {
        throw new Error(safeParseResult.error.message);
    }

    return safeParseResult.data;
}

// export env value
export const env = createEnv(process.env);
