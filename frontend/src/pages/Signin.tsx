import Quote from "../components/Quote";
import Auth from "../components/Auth";

export default function Signup() {
  return (
    <div className="lg:flex h-screen">
        <Auth type="signin"/>
        <Quote />
    </div>
  )
}
