import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import type { IUser } from "../utils/types";

type Props = {};

const Guilds = (props: Props) => {
  const {
    user: { guilds },
  } = useContext(UserContext) as { user: IUser };
  return (
    <div>
      {guilds.map((guild) => (
        <div key={guild.id}>{guild.name}</div>
      ))}
    </div>
  );
};

export default Guilds;
