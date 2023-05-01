import Button from "@/components/ui/Button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async ({}) => {
  const session = await getServerSession(authOptions);
  // if (!session) notFound()
  return <pre>Dashboard</pre>;
};

export default page;
