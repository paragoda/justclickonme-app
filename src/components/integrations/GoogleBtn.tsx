import { googleAuth } from "@/shared/utils/server"
import { GoogleLogin } from "@react-oauth/google"

export const GoogleBtn = ({ user }: { user: boolean }) => {
  const googleSuccess = async (res: any) => {
    const idToken = res.credential
    if (idToken) {
      const accessToken = await googleAuth(idToken)
      console.log(accessToken)
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
