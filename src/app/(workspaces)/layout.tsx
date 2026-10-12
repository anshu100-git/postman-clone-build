import React from "react";
import Header from "@/modules/layout/components/header";
import { currentUser } from "@/modules/authentication/actions";

/** Workspace route group layout rendering the header, side panel, and page content. */
const RootLayout = async ({ children }: { children: React.ReactNode }) => {
    const user = await currentUser();
    return (
        <>
            <Header user={user} />
            <main className='max-h-[calc(100vh-4rem)] h-[calc(100vh-4rem)] flex flex-1 overflow-hidden'>
                <div className="flex h-full w-full">
                    <div className="w-12 border-zinc-800 bg-zinc-900">
                        {/* tabbed left panel — coming soon */}
                    </div>
                    <div className="flex-1 bg-zinc-900">
                        {children}
                    </div>
                </div>
            </main>
        </>
    );
};

export default RootLayout;