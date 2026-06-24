export async function createSwarm(
  count: number
) {
  return Array.from(
    { length: count },
    (_, i) => ({
      id: i,
      status: "running"
    })
  );
}
