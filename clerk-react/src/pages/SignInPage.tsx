import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => (
  <div className="page centered">
    <SignIn
      appearance={{
        variables: {
          colorPrimary: 'blue',
          colorText: 'black',
        },
      }}
    />
  </div>
);

export default SignInPage;
