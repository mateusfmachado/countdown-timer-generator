import React from 'react';

const Anchor = ({ url, label }) => (
    <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}>
        {label}
    </a>
);

export default ( ) => (
    <div className="Footer">
        <hr />
        <small>
        &copy;{new Date().getFullYear()}
        &nbsp;-&nbsp;
        Mateus Machado
        &nbsp;-&nbsp;
        <Anchor
            url="https://twitter.com/mateus_fmachado"
            label="Twitter" />
        &nbsp;-&nbsp;
        <Anchor
            url="https://github.com/mateusfmachado"
            label="Github" />
        </small>
    </div>
);