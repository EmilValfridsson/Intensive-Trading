function ProfilePage() {
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
            <h1 className="text-2xl ml-2">ProfileName</h1>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Favorite Stocks</h2>
          <p>Investor B</p>
          <p>Investor B</p>
          <p>Investor B</p>
          <p>Investor B</p>
          <p>Investor B</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
