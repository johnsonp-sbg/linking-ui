interface PlayerParams {
  id: string
}

export const getPlayer = async ({ params }: { params: PlayerParams }): Promise<void> => {
  console.log(`looking for player ${params.id}`);
};
