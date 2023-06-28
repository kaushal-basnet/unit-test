interface IDataType {
  displayname: string;
  userName: string;
  email: string;
  isEmailVerified: boolean;
}
export const UserProfile = ({
  displayname,
  userName,
  email,
  isEmailVerified,
}: IDataType) => {
  return (
    <div>
      <div>
        <span>Display Name: {displayname}</span>
      </div>
      <div>
        <span>Username: {userName}</span>
      </div>
      <div>
        <span>Email: {email}</span>
      </div>
      <div>
        Verified:
        <span>{isEmailVerified ? "Email Verified" : "Email Not Verified"}</span>
      </div>
    </div>
  );
};
