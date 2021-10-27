import { PropsWithChildren } from "react";
import { CssBaseline } from "@mui/material";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
    children: JSX.Element;
}

export default function Layout({ children }: PropsWithChildren<LayoutProps>) {
    return (
        <>
            <CssBaseline />
            <Header />
            {children}
            <Footer />
        </>
    );
}
