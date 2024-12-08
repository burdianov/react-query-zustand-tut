import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { getUsers } from "./api/user";
import { useUserStore } from "./state/userStore";

export default function App() {
  const { filters } = useUserStore();

  const { data } = useQuery({
    queryKey: ["users", filters],
    queryFn: () => getUsers(filters),
  });

  return (
    <>
      <div>
        <FiltersComponent />
        {data?.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </>
  );
}

function FiltersComponent() {
  const { setFilters } = useUserStore();

  return null;
}
