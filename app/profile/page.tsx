import { auth } from "@/auth/auth";
import { headers } from "next/headers";
import { SignOut } from "@/components/auth/SignOut";

export default async function Profile() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return (
            <div>
                <h1>Not logged in</h1>
            </div>
        );
    }
    return (
        <div>
            <h1>Profile</h1>
            <SignOut />
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
    );
}