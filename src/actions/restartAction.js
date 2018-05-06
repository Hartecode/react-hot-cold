export const RESTART_GAME = "RESTART_GAME";

export const restartGame =  currectAnswer => ({
	type: RESTART_GAME,
	currectAnswer
});