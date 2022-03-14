import React from "react";
import './divider.scss'; 

export type Aligment = "start" | "center" | "end"
export type LineStyle = "solid" | "dashed" | "dotted"
export type LineWeight = "thin" | "medium" | "thick"

export interface DividerProps {
    alignment: Aligment
    lineStyle: LineStyle
    lineWeight: LineWeight
    children: React.ReactNode
}

export const Divider = ({ alignment, lineStyle, lineWeight, children }: DividerProps) => {
    return (
        <div
            className={['divider', `divider--${alignment}`].join(' ')}
        >
            <span className={['left', `line-style--${lineStyle}`, `line-weight--${lineWeight}`].join(' ')} />
            
            <i className="bi bi-alarm-fill">
                {children}
            </i>

            <span className={['right', `line-style--${lineStyle}`, `line-weight--${lineWeight}`].join(' ')} />
        </div>
    )
}