import React from "react";

export default function LayoutCard({img, children}) {
    return (<>
            <div style={{marginBottom: '10em',marginTop:'2em'}}>
                <img src={img}
                     alt="Titulo centro de reciclaje"
                     title="Titulo centro de reciclaje"
                     itemProp="thumbnailUrl"/>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(35rem,1fr))',
                    gridAutoRows: '22rem',
                    gap: '10em',
                    marginTop: '2em'
                }}>
                    {children}
                </div>
            </div>
        </>
    )
}