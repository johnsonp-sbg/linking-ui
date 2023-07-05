interface TeamParams {
  id: string
}

export const getTeam = async ({ params }: { params: TeamParams }): Promise<void> => {
  console.log(`looking for team ${params.id}`);
};
