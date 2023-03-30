import React from "react";

const DailyTemperature = (props) => {

    const time = props.time

    const date = time.split("T")[0]
    const hour = time.split("T")[1]

    const temp = props.temp
    const index = props.index

    return(

        <div>
            <li className="main-list" key={index}> {date} | {hour} | ➤ {temp} °C </li>            
        </div>
    )

}

export default DailyTemperature