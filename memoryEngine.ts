export interface Memory {
  owner: string;
  content: string;
}

export async function storeMemory(
  memory: Memory
) {
  return {
    id: crypto.randomUUID(),
    ...memory,
    status: "stored"
  };
}
