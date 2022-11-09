import { useAuthState, addUser, useDbData } from "../utilities/firebase";

export const getUser = () => {
  const [users, error] = useDbData("/users");
  const user = useAuthState();

  if (user) {
    if (error) return error.toString();
    if (users === undefined) return "Loading...";
    if (!users) return "No user found";

    if (user.uid in users) {
      users[user.uid].uid = user.uid;
      return users[user.uid];
    } else {
      if (user) {
        addUser(user);
      }
      users[user.uid].uid = user.uid;
      return users[user.uid];
    }
  }
};
