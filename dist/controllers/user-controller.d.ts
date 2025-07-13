declare const userController: () => Promise<{
    register: () => void;
    login: () => void;
    protectedRoute: () => void;
}>;
export default userController;
