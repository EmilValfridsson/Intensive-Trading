import authService from "../services/authService";

function ProfilePage() {
  const user = authService.getCurrentUser();

  return (
    <div className="flex justify-center">
      <div className="card w-2/3 bg-base-100 shadow-xl">
        <figure>
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl ml-2">{user?.name}</h1>
          </div>
        </figure>
        <div className="card-body grid grid-cols-2">
          <div>
            <h2 className="card-title">Favorite Stocks</h2>
            <p>Investor B</p>
            <p>Investor B</p>
            <p>Investor B</p>
            <p>Investor B</p>
            <p>Investor B</p>
          </div>
          <div>
            <h2 className="card-title">lorem</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              ipsa quas iusto, dolorum dolore veritatis? Nesciunt quas magnam
              recusandae qui illo suscipit aspernatur. Iste iure sed cupiditate
              culpa molestias ducimus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
