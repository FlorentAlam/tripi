import React, { ReactElement, useEffect } from 'react';

type PageProps = {
    pageTitle: string;
    children: ReactElement;
}

const Page = ({pageTitle, children}: PageProps) => {
    useEffect(() => {
        document.title = pageTitle;
    }, []);

    return (
        <>
            {children}
        </>
    )
}

export default Page;