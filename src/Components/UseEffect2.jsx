import React , {useEffect , useState} from 'react' 

export default function useEffect2() {
  const [users, setUsers] = useState([]);
  const baseUrl = "https://jsonplaceholder.typicode.com";
  useEffect(() => {
    const getUsers = async () => {
        const response = await fetch(`${baseUrl}/users`);
        const data = await response.json(); //convertir les données en json
        setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <div>
      <h2>Utilisateurs</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>Nom:</strong> {user.name}<br />
            <strong>Nom d'utilisateur:</strong> {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
}