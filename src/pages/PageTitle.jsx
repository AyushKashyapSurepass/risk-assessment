import React from 'react'
function PageTitle({title, subtitles}) {
    console.log("subtitles", subtitles);
    return (

        <div className="title-page">
            <div className="grid grid-flow-row   mt-6  mb-10 gap-4">
                <div className="text-2xl font-bold">{title}</div>
                <p className="text-[16px] text-black">{subtitles}</p>
            </div>
        </div>

    )
}

export default PageTitle