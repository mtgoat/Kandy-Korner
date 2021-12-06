import React from "react";
import "./Extra.css"

export const ExtraCard = ({extra}) => (
    <section className="extra">
        <h3 className="extra__temp">You get an extra! </h3>
        <div className="extra__message">{extra.message}</div>
      </section>
)