import React from "react";

export function CardHeader(props){
  return (
    <div className="card-header"{...props}>
      {props.children}
    </div>
  )
}

export function CardBody(props){
  return (
    <div className="card-body ">
      {props.children}

    </div>
  )
}