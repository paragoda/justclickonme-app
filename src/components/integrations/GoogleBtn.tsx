import { googleLogin } from "@/shared/api/auth"
import { GoogleLogin } from "@react-oauth/google"

export const GoogleBtn = ({ user }: { user: boolean }) => {
  const googleSuccess = async (res: any) => {
    const idToken = res.credential
    if (idToken) {
      await googleLogin(idToken)
      //console.log(accessToken)
    }
  }

  const googleError = () => {}
  return (
    <GoogleLogin
      auto_select={!user}
      useOneTap={!user}
      onSuccess={googleSuccess}
      onError={googleError}
      text="continue_with"
      type="icon"
      shape="circle"
    />
  )
}
