"use client";
import React from 'react';
import TimeAgoCompoent from "react-timeago";

function Timeago({ date}: {date: Date}) {
  return <TimeAgoCompoent date={date} />
}

export default Timeago;
