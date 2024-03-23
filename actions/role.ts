import { getUserById } from "@/data/user";

export const SetRole = async (userId: string) => {
    try {
        const user = getUserById(userId)
        console.log(user)
        return true
    } catch (error) {
        // Gestisci eventuali errori di validazione o del database
        console.error("Errore durante la creazione della notizia:", error);
        throw error; // Puoi gestire l'errore in modo diverso a seconda delle tue esigenze
    }
};