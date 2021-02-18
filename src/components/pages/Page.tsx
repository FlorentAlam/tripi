import React, { ReactElement, useEffect } from 'react';
import './Page.css';

type PageProps = {
    pageTitle: string;
    children: ReactElement;
}

const Page = ({pageTitle, children}: PageProps) => {
    useEffect(() => {
        document.title = pageTitle;
    }, []);

    return (
        <div className="page">
            {children}
        </div>
    )
}

export default Page;