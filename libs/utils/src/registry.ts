import { z } from 'zod';

const SHADCN_UI_REGISTRY_ENDPOINT = 'https://ui.shadcn.com/registry';

const fetchRegistry = async (
  endpoint: string | undefined,
  schema: z.ZodTypeAny,
  // biome-ignore lint/suspicious/noExplicitAny: library
): Promise<any> => {
  const response = await fetch(
    [SHADCN_UI_REGISTRY_ENDPOINT, endpoint, 'index.json']
      .filter(Boolean)
      .join('/'),
  );
  const resultJson = await response.json();

  return schema.parse(resultJson);
};

class Component {
  dependencies: string[] | undefined;
  files: string[];
  name: string;
  type: string;
}

const fetchComponents = async (): Promise<Component[]> =>
  fetchRegistry(
    undefined,
    z.array(
      z.object({
        dependencies: z.array(z.string()).optional(),
        files: z.array(z.string()),
        name: z.string(),
        type: z.string(),
      }),
    ),
  );

class Style {
  label: string;
  name: string;
}

const fetchStyles = async (): Promise<Style[]> =>
  fetchRegistry(
    'styles',
    z.array(
      z.object({
        label: z.string(),
        name: z.string(),
      }),
    ),
  );

export { fetchComponents, fetchRegistry, fetchStyles };
