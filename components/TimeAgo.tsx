"use client";
import React from 'react';
import TimeAgoCompoent from "react-timeago";

function TimeAgo({ date}: {date: Date}) {
  return <TimeAgoCompoent date={date} />
}

export default TimeAgo;
