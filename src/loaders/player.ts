type PlayerParams = {
    id: string;
};

export const getPlayer = async ({ params }: { params: PlayerParams }) => {
    console.log(`looking for player ${params.id}`);
};