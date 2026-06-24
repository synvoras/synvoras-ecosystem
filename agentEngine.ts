export async function spawnAgent(
  name: string
) {
  return {
    agent: name,
    status: "active"
  };
}
