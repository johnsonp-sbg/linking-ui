type TeamParams = {
    id: string;
};

export const getTeam = async ({ params }: { params: TeamParams }) => {
    console.log(`looking for team ${params.id}`);
};