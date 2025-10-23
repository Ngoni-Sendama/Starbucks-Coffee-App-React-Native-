// Default entry (redirect to onboarding or auth)
import { Redirect } from "expo-router";

export default function Index() {
  // Later you can check user login state here.
  return <Redirect href="/(onboarding)/splash1" />;
}
